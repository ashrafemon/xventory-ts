import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { updateExpense } from "../../../../../../store/actions/dashboard/expenditure/expenseActions";
import { toggleCrudDialog } from "../../../../../../store/actions/siteAction";
import { SubmitButton } from "../../../../../../styles/globalStyles";
import { isRequiredValidate } from "../../../../../../utils/ValidateHelpers";
import CrudAutoCompleteTextBox from "../../../../shared/CrudAutoCompleteTextBox";
import CrudSelector from "../../../../shared/CrudSelector";
import CrudTextBox from "../../../../shared/CrudTextBox";

const Edit = ({ data, handler, errors, setErrors }) => {
    const dispatch = useDispatch();
    const { expenseCategories } = useSelector(
        (state: RootStateOrAny) => state.expenseCategories
    );
    const [returnableOptions] = useState([
        { text: "Yes", value: true },
        { text: "No", value: false },
    ]);

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

        const referenceNoValidate = isRequiredValidate(
            data.referenceNo,
            "referenceNo",
            setErrors,
            "referenceNo field is required"
        );

        const expenseCategoryValidate = isRequiredValidate(
            data.expenseCategory,
            "expenseCategory",
            setErrors,
            "expenseCategory field is required"
        );

        const expenseReasonValidate = isRequiredValidate(
            data.expenseReason,
            "expenseReason",
            setErrors,
            "expenseReason field is required"
        );
        const amountValidate = isRequiredValidate(
            data.amount,
            "amount",
            setErrors,
            "amount field is required"
        );
        const returnableValidate = isRequiredValidate(
            data.returnable,
            "returnable",
            setErrors,
            "returnable field is required"
        );

        if (
            !referenceNoValidate &&
            !expenseCategoryValidate &&
            !expenseReasonValidate &&
            !amountValidate &&
            !returnableValidate
        ) {
            dispatch(
                updateExpense(data, () =>
                    dispatch(toggleCrudDialog({ open: false, type: "" }))
                )
            );
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <Box mb={1}>
                <CrudTextBox
                    label="referenceNo"
                    value={data && data.referenceNo}
                    error={errors.referenceNo.show}
                    helperText={errors.referenceNo.text}
                    onChange={(e) =>
                        fieldChangeHandler("referenceNo", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={
                        expenseCategories &&
                        expenseCategories.expenseCategoryList
                    }
                    optionLabel="name"
                    label="Expense Category"
                    value={data && data.expenseCategory}
                    error={errors.expenseCategory.show}
                    helperText={errors.expenseCategory.text}
                    onChange={(e, value) =>
                        fieldChangeHandler("expenseCategory", value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Expense Reason"
                    value={data && data.expenseReason}
                    error={errors.expenseReason.show}
                    helperText={errors.expenseReason.text}
                    onChange={(e) =>
                        fieldChangeHandler("expenseReason", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={returnableOptions}
                    label="Returnable"
                    value={data && data.returnable}
                    error={errors.returnable.show}
                    helperText={errors.returnable.text}
                    onChange={(e) =>
                        fieldChangeHandler("returnable", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    label="amount"
                    value={data && data.amount}
                    error={errors.amount.show}
                    helperText={errors.amount.text}
                    onChange={(e) =>
                        fieldChangeHandler("amount", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    multiple
                    label="Note"
                    value={data && data.note}
                    onChange={(e) => fieldChangeHandler("note", e.target.value)}
                    error={errors.note.show}
                    helperText={errors.note.text}
                />
            </Box>

            <Box textAlign="center" mt={3}>
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
