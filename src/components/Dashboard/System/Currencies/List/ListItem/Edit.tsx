import {Box} from "@material-ui/core";
import React, {useEffect} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {updateCurrency} from "../../../../../../store/actions/dashboard/system/currencyActions";
import {toggleCrudDialog} from "../../../../../../store/actions/siteAction";
import {fetchStores} from "../../../../../../store/actions/storeAction";
import {SubmitButton} from "../../../../../../styles/globalStyles";
import CrudAutoCompleteTextBox from "../../../../shared/CrudAutoCompleteTextBox";
import CrudSelectBox from "../../../../shared/CrudSelectBox";
import CrudTextBox from "../../../../shared/CrudTextBox";
import {isRequiredValidate} from "../../../../../../utils/ValidateHelpers";

const Edit = ({data, handler, errors, setErrors}) => {
    const dispatch = useDispatch();
    const {stores} = useSelector((state: RootStateOrAny) => state.stores);

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

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

        const titleValidate = isRequiredValidate(data.title, 'title', setErrors, 'Title field is required')
        const codeValidate = isRequiredValidate(data.code, 'code', setErrors, 'Code field is required')
        const symbolLeftValidate = isRequiredValidate(data.symbolLeft, 'symbolLeft', setErrors, 'SymbolLeft field is required')
        const decimalPlaceValidate = isRequiredValidate(data.decimalPlace, 'decimalPlace', setErrors, 'DecimalPlace field is required')

        if (!titleValidate && !codeValidate && !symbolLeftValidate && !decimalPlaceValidate) {
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
                        storeList.push({id: item.id});
                    });
                    formData["storeList"] = storeList;
                }
            });

            dispatch(
                updateCurrency(formData, () =>
                    dispatch(toggleCrudDialog({open: false, type: ""}))
                )
            );
        }

    };

    return (
        <form onSubmit={submitHandler}>
            <Box mb={1}>
                <CrudTextBox
                    label="Title"
                    value={data && data.title}
                    onChange={(e) =>
                        fieldChangeHandler("title", e.target.value)
                    }
                    error={errors.title.show}
                    helperText={errors.title.text}
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
                    label="Symbol Left"
                    value={data && data.symbolLeft}
                    onChange={(e) =>
                        fieldChangeHandler("symbolLeft", e.target.value)
                    }
                    error={errors.symbolLeft.show}
                    helperText={errors.symbolLeft.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Symbol Right"
                    value={data && data.symbolRight}
                    onChange={(e) =>
                        fieldChangeHandler("symbolRight", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Decimal Place"
                    value={data && data.decimalPlace}
                    onChange={(e) =>
                        fieldChangeHandler("decimalPlace", e.target.value)
                    }
                    error={errors.decimalPlace.show}
                    helperText={errors.decimalPlace.text}
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
                />
            </Box>

            <Box textAlign="center">
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
