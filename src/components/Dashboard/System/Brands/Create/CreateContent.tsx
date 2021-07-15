import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createBrand } from "../../../../../store/actions/dashboard/system/brandActions";
import { fetchStores } from "../../../../../store/actions/storeAction";
import { getBase64 } from "../../../../../utils/helpers";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FileUploadBox from "../../../shared/FileUploadBox";
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
        image: "",
        name: "",
        code: "",
        details: "",
        status: "ACTIVE",
        storeList: [],
    });

    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        code: { text: "", show: false },
        details: { text: "", show: false },
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

    const fileUploadChangeHandler = (file) => {
        if (file) {
            getBase64(file, (result) => {
                setForm((prevState) => ({
                    ...prevState,
                    image: result,
                }));
            });
        }
    };

    const resetForm = () => {
        setForm({
            image: "",
            name: "",
            code: "",
            details: "",
            status: "ACTIVE",
            storeList: [],
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(form.name, 'name', setErrors, 'Name field is required')
        const codeValidate = isRequiredValidate(form.code, 'code', setErrors, 'Code field is required')

        if(!nameValidate && !codeValidate){
            let brandData = {
                storeList: [],
            };
            Object.keys(form).forEach((key) => {
                if (key !== "storeList") {
                    brandData[key] = form[key];
                } else {
                    form.storeList.forEach((item) => {
                        brandData[key].push({ id: item.id });
                        console.log(item);
                    });
                }
            });

            dispatch(createBrand(brandData, resetForm));
        }


    };

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    const { storeList } = stores;

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
                    <FileUploadBox
                        label="Image"
                        required
                        onChange={(files) => fileUploadChangeHandler(files[0])}
                    />
                </Box>

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
                        type="text"
                        error={errors.code.show}
                        helperText={errors.code.text}
                        value={form.code}
                        onChange={(e) => changeHandler("code", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Details"
                        placeholder="Details"
                        required
                        type="text"
                        error={errors.details.show}
                        helperText={errors.details.text}
                        value={form.details}
                        onChange={(e) =>
                            changeHandler("details", e.target.value)
                        }
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
