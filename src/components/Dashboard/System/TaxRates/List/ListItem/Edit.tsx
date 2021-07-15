import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { updateTaxRate } from "../../../../../../store/actions/dashboard/system/taxRateActions";
import { toggleCrudDialog } from "../../../../../../store/actions/siteAction";
import { fetchStores } from "../../../../../../store/actions/storeAction";
import { SubmitButton } from "../../../../../../styles/globalStyles";
import CrudAutoCompleteTextBox from "../../../../shared/CrudAutoCompleteTextBox";
import CrudSelectBox from "../../../../shared/CrudSelectBox";
import CrudTextBox from "../../../../shared/CrudTextBox";
import {isRequiredValidate} from "../../../../../../utils/ValidateHelpers";

const Edit = ({ data, handler, errors, setErrors }) => {
    const dispatch = useDispatch();
    const { stores } = useSelector((state: RootStateOrAny) => state.stores);

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
        handler((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(data.name, 'name', setErrors, 'Name field is required')
        const codeValidate = isRequiredValidate(data.code, 'code', setErrors, 'Code field is required')
        const rateValidate = isRequiredValidate(data.rate, 'rate', setErrors, 'Rate field is required')

        if(!nameValidate && !codeValidate && !rateValidate){
            let formData = {
                storeList: [],
            };

            Object.keys(data).forEach((key) => {
                if (key !== "__typename" && key !== "storeList") {
                    formData[key] = data[key];
                }
                if (key === "storeList") {
                    let storeList = [];
                    data["storeList"] &&
                    data["storeList"].forEach((item) => {
                        storeList.push({ id: item.id });
                    });
                    formData["storeList"] = storeList;
                }
            });

            dispatch(
                updateTaxRate(formData, () =>
                    dispatch(toggleCrudDialog({ open: false, type: "" }))
                )
            );
        }

    };

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    return (
        <form onSubmit={submitHandler}>
            <Box mb={1}>
                <CrudTextBox
                    label="Name"
                    value={data && data.name}
                    onChange={(e) => fieldChangeHandler("name", e.target.value)}
                    error={errors.name.show}
                    helperText={errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Code"
                    value={data && data.code}
                    onChange={(e) => fieldChangeHandler("code", e.target.value)}
                    error={errors.code.show}
                    helperText={errors.code.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Rate"
                    value={data && data.rate}
                    onChange={(e) => fieldChangeHandler("rate", e.target.value)}
                    error={errors.rate.show}
                    helperText={errors.rate.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelectBox
                    label="Status"
                    value={data && data.status}
                    onChange={(e) =>
                        fieldChangeHandler("status", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={stores && stores.storeList}
                    optionLabel="name"
                    label="Store List"
                    placeholder="Store List"
                    required
                    multiple
                    value={data && data.storeList}
                    onChange={(e, data) =>
                        fieldChangeHandler("storeList", data)
                    }
                    error={errors.storeList.show}
                    helperText={errors.storeList.text}
                />
            </Box>

            <Box textAlign="center">
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
