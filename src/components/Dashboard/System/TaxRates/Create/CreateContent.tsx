import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createTaxRate } from "../../../../../store/actions/dashboard/system/taxRateActions";
import { fetchStores } from "../../../../../store/actions/storeAction";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FormActions from "../../../shared/FormActions";
import SelectBox from "../../../shared/SelectBox";
import TextBox from "../../../shared/TextBox";
import {isRequiredValidate} from "../../../../../utils/ValidateHelpers";

const CreateContent = () => {
    const dispatch = useDispatch();
    const { storeId } = useParams<{ storeId: string }>();
    const { stores } = useSelector((state: RootStateOrAny) => state.stores);
    const { validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [form, setForm] = useState({
        name: "",
        code: "",
        rate: 0,
        status: "ACTIVE",
        storeList: [],
    });

    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        code: { text: "", show: false },
        rate: { text: "", show: false },
        status: { text: "", show: false },
        storeList: { text: "", show: false },
    });

    const changeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const resetForm = () => {
        setForm((prevState) => ({
            ...prevState,
            name: "",
            code: "",
            rate: 0,
            status: "ACTIVE",
            storeList: [],
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(form.name, 'name', setErrors, 'Name field is required')
        const codeValidate = isRequiredValidate(form.code, 'code', setErrors, 'Code field is required')
        const rateValidate = isRequiredValidate(form.rate, 'rate', setErrors, 'Rate field is required')

        if(!nameValidate && !codeValidate && !rateValidate){
            let taxRateData = {
                storeList: [],
            };
            Object.keys(form).forEach((key) => {
                if (key !== "storeList") {
                    taxRateData[key] = form[key];
                } else {
                    form.storeList.forEach((item) => {
                        taxRateData[key].push({ id: item.id });
                    });
                }
            });

            dispatch(createTaxRate(taxRateData, resetForm));
        }
    };

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    useEffect(() => {
        if (storeId && stores && stores.storeList) {
            let selectedStore = {};
            stores.storeList.forEach((item) => {
                if (item.id === storeId) {
                    selectedStore = item;
                }
            });
            setForm((prevState) => ({
                ...prevState,
                storeList: [selectedStore],
            }));
        }
    }, [storeId, stores]);

    useEffect(() => {
        if (validateErrors) {
            validateErrors.forEach((item) => {
                console.log(item);
                setErrors((prevState) => ({
                    ...prevState,
                    [item.field]: {
                        text: item.description,
                        show: true,
                    },
                }));
            });
        }
    }, [validateErrors, setErrors]);

    return (
        <Container maxWidth="md">
            <form onSubmit={submitHandler}>
                <Box mb={2}>
                    <TextBox
                        label="Name"
                        placeholder="Name"
                        required
                        type="text"
                        error={errors.name.show}
                        helperText={errors.name.text}
                        value={form.name}
                        onChange={(e) => changeHandler("name", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Code"
                        placeholder="Code"
                        required
                        value={form.code}
                        error={errors.code.show}
                        helperText={errors.code.text}
                        onChange={(e) => changeHandler("code", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Rate"
                        placeholder="Rate"
                        required
                        type="number"
                        error={errors.rate.show}
                        helperText={errors.rate.text}
                        value={form.rate}
                        onChange={(e) => changeHandler("rate", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <SelectBox
                        label="Status"
                        placeholder="Status"
                        required
                        onChange={(e) =>
                            changeHandler("status", e.target.value)
                        }
                        value={form.status}
                        error={errors.status.show}
                        helperText={errors.status.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={stores && stores.storeList}
                        optionLabel="name"
                        label="Store List"
                        placeholder="Store List"
                        required
                        multiple
                        value={form.storeList}
                        onChange={(e, data) => changeHandler("storeList", data)}
                        error={errors.storeList.show}
                        helperText={errors.storeList.text}
                    />
                </Box>

                <Box mb={2}>
                    <FormActions />
                </Box>
            </form>
        </Container>
    );
};

export default CreateContent;
