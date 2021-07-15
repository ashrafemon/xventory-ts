import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { createExpenseCategory } from "../../../../../store/actions/dashboard/expenditure/expenseCategoryActions";
import { isRequiredValidate } from "../../../../../utils/ValidateHelpers";
import FormActions from "../../../shared/FormActions";
import SelectBox from "../../../shared/SelectBox";
import TextBox from "../../../shared/TextBox";

const CreateContent = () => {
    const dispatch = useDispatch();

    const { validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [form, setForm] = useState({
        name: "",
        slug: "",
        details: "",
        status: "ACTIVE",
    });

    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        slug: { text: "", show: false },
        details: { text: "", show: false },
        status: { text: "", show: false },
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
            slug: "",
            details: "",
            status: "ACTIVE",
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

        if (!nameValidate) {
            dispatch(createExpenseCategory(form, resetForm));
        }
    };

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
                        value={form.name}
                        error={errors.name.show}
                        helperText={errors.name.text}
                        onChange={(e) => changeHandler("name", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Slug"
                        placeholder="Slug"
                        required
                        value={form.slug}
                        error={errors.slug.show}
                        helperText={errors.slug.text}
                        onChange={(e) => changeHandler("slug", e.target.value)}
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
                        error={errors.status.show}
                        helperText={errors.status.text}
                        value={form.status}
                        onChange={(e) =>
                            changeHandler("status", e.target.value)
                        }
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
