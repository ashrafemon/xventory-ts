import {Box, Container} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {createCurrency} from "../../../../../store/actions/dashboard/system/currencyActions";
import {fetchStores} from "../../../../../store/actions/storeAction";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FormActions from "../../../shared/FormActions";
import SelectBox from "../../../shared/SelectBox";
import TextBox from "../../../shared/TextBox";
import {isRequiredValidate} from "../../../../../utils/ValidateHelpers";

const CreateContent = () => {
    const dispatch = useDispatch();
    const {storeId} = useParams<{ storeId: string }>();
    const {stores} = useSelector((state: RootStateOrAny) => state.stores);
    const {validateErrors} = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [form, setForm] = useState({
        title: "",
        code: "",
        symbolLeft: "",
        symbolRight: "",
        decimalPlace: 0,
        status: "ACTIVE",
        storeList: [],
    });

    const [errors, setErrors] = useState({
        title: {text: "", show: false},
        code: {text: "", show: false},
        symbolLeft: {text: "", show: false},
        symbolRight: {text: "", show: false},
        decimalPlace: {text: "", show: false},
        status: {text: "", show: false},
        storeList: {text: "", show: false},
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
            title: "",
            code: "",
            symbolLeft: "",
            symbolRight: "",
            decimalPlace: 0,
            status: "ACTIVE",
            storeList: [],
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const titleValidate = isRequiredValidate(form.title, 'title', setErrors, 'Title field is required')
        const codeValidate = isRequiredValidate(form.code, 'code', setErrors, 'Code field is required')
        const symbolLeftValidate = isRequiredValidate(form.symbolLeft, 'symbolLeft', setErrors, 'SymbolLeft field is required')
        const decimalPlaceValidate = isRequiredValidate(form.decimalPlace, 'decimalPlace', setErrors, 'DecimalPlace field is required')

        if (!titleValidate && !codeValidate && !symbolLeftValidate && !decimalPlaceValidate) {
            let currencyData = {
                storeList: [],
            };
            Object.keys(form).forEach((key) => {
                if (key !== "storeList") {
                    currencyData[key] = form[key];
                } else {
                    form.storeList.forEach((item) => {
                        currencyData[key].push({id: item.id});
                    });
                }
            });

            dispatch(createCurrency(currencyData, resetForm));
        }
    };

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    const {storeList} = stores;

    useEffect(() => {
        if (storeId && storeList && storeList.length) {
            let selectedStore = {};
            storeList.forEach((item) => {
                if (item.id === storeId) {
                    selectedStore = item;
                }
            });
            setForm((prevState) => ({
                ...prevState,
                storeList: [selectedStore],
            }));
        } else {
            setForm((prevState) => ({
                ...prevState,
                storeList: [],
            }));
        }
    }, [storeId, storeList]);

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
                        label="Title"
                        placeholder="Title"
                        required
                        value={form.title}
                        error={errors.title.show}
                        helperText={errors.title.text}
                        onChange={(e) => changeHandler("title", e.target.value)}
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
                        label="Symbol Left"
                        placeholder="Symbol Left"
                        value={form.symbolLeft}
                        onChange={(e) =>
                            changeHandler("symbolLeft", e.target.value)
                        }
                        error={errors.symbolLeft.show}
                        helperText={errors.symbolLeft.text}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Symbol Right"
                        placeholder="Symbol Right"
                        value={form.symbolRight}
                        onChange={(e) =>
                            changeHandler("symbolRight", e.target.value)
                        }
                        error={errors.symbolRight.show}
                        helperText={errors.symbolRight.text}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Decimal Place"
                        placeholder="0"
                        required
                        type="number"
                        value={form.decimalPlace}
                        onChange={(e) =>
                            changeHandler("decimalPlace", e.target.value)
                        }
                        error={errors.decimalPlace.show}
                        helperText={errors.decimalPlace.text}
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
                    <FormActions/>
                </Box>
            </form>
        </Container>
    );
}


export default CreateContent;
