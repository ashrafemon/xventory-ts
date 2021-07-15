import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createCategory } from "../../../../../store/actions/dashboard/product/categoryAction";
import { createBox } from "../../../../../store/actions/dashboard/system/boxActions";
import { fetchStores } from "../../../../../store/actions/storeAction";
import {
    getBase64,
    typeNamePropertySlicer,
} from "../../../../../utils/helpers";
import { isRequiredValidate } from "../../../../../utils/ValidateHelpers";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FileUploadBox from "../../../shared/FileUploadBox";
import FormActions from "../../../shared/FormActions";
import SelectBox from "../../../shared/SelectBox";
import TextBox from "../../../shared/TextBox";

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
        details: "",
        image: "",
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
        setForm((prevState) => ({
            ...prevState,
            name: "",
            code: "",
            image: "",
            details: "",
            status: "ACTIVE",
            storeList: [],
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(
            form.name,
            "name",
            setErrors,
            "Name field is required"
        );

        const codeValidate = isRequiredValidate(
            form.code,
            "code",
            setErrors,
            "Code field is required"
        );

        if (!nameValidate && !codeValidate) {
            let categoryData = {
                storeList: [],
            };
            Object.keys(form).forEach((key) => {
                if (key !== "storeList") {
                    categoryData[key] = form[key];
                } else {
                    form.storeList.forEach((item) => {
                        categoryData[key].push({ id: item.id });
                    });
                }
            });

            dispatch(createCategory(categoryData, resetForm));
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

    console.log(form);

    return (
        <Container maxWidth="md">
            <form onSubmit={submitHandler}>
                <Box mb={2}>
                    <FileUploadBox
                        label="Image"
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
                        value={form.code}
                        error={errors.code.show}
                        helperText={errors.code.text}
                        onChange={(e) => changeHandler("code", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Details"
                        placeholder="Details"
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
                        onChange={(e, data) => {
                            changeHandler("storeList", data);
                        }}
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
