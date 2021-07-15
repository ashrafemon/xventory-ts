import { Box } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { updateExpenseCategory } from "../../../../../../store/actions/dashboard/expenditure/expenseCategoryActions";
import { toggleCrudDialog } from "../../../../../../store/actions/siteAction";
import { SubmitButton } from "../../../../../../styles/globalStyles";
import { isRequiredValidate } from "../../../../../../utils/ValidateHelpers";
import CrudSelectBox from "../../../../shared/CrudSelectBox";
import CrudTextBox from "../../../../shared/CrudTextBox";

const Edit = ({ data, handler, errors, setErrors }) => {
    const dispatch = useDispatch();

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

        const nameValidate = isRequiredValidate(
            data.name,
            "name",
            setErrors,
            "Name field is required"
        );

        if (!nameValidate) {
            dispatch(
                updateExpenseCategory(data, () =>
                    dispatch(toggleCrudDialog({ open: false, type: "" }))
                )
            );
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <Box mb={1}>
                <CrudTextBox
                    label="Name"
                    value={data && data.name}
                    error={errors.name.show}
                    helperText={errors.name.text}
                    onChange={(e) => fieldChangeHandler("name", e.target.value)}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Slug"
                    value={data && data.slug}
                    error={errors.slug.show}
                    helperText={errors.slug.text}
                    onChange={(e) => fieldChangeHandler("slug", e.target.value)}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    multiple
                    label="Details"
                    value={data && data.details}
                    onChange={(e) =>
                        fieldChangeHandler("details", e.target.value)
                    }
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

            <Box textAlign="center" mt={3}>
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
