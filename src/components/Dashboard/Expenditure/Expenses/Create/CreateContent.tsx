import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { createExpense } from "../../../../../store/actions/dashboard/expenditure/expenseActions";
import { fetchExpenseCategories } from "../../../../../store/actions/dashboard/expenditure/expenseCategoryActions";
import { createLoan } from "../../../../../store/actions/dashboard/loanAction";
import { isRequiredValidate } from "../../../../../utils/ValidateHelpers";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FormActions from "../../../shared/FormActions";
import Selector from "../../../shared/Selector";
import TextBox from "../../../shared/TextBox";

const CreateContent = () => {
    const dispatch = useDispatch();
    const { expenseCategories } = useSelector(
        (state: RootStateOrAny) => state.expenseCategories
    );
    const { validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [returnableOptions] = useState([
        { text: "Yes", value: true },
        { text: "No", value: false },
    ]);

    const [form, setForm] = useState({
        attachmentList: [],
        referenceNo: "",
        expenseCategory: {},
        expenseReason: "",
        amount: 0,
        returnable: true,
        note: "",
    });

    const [errors, setErrors] = useState({
        referenceNo: { text: "", show: false },
        expenseCategory: { text: "", show: false },
        expenseReason: { text: "", show: false },
        amount: { text: "", show: false },
        returnable: { text: "", show: false },
        note: { text: "", show: false },
        attachmentList: { text: "", show: false },
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
            attachmentList: [],
            referenceNo: "",
            expenseCategory: {},
            expenseReason: "",
            amount: 0,
            returnable: true,
            note: "",
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const referenceNoValidate = isRequiredValidate(
            form.referenceNo,
            "referenceNo",
            setErrors,
            "referenceNo field is required"
        );

        const expenseCategoryValidate = isRequiredValidate(
            form.expenseCategory,
            "expenseCategory",
            setErrors,
            "expenseCategory field is required"
        );

        const expenseReasonValidate = isRequiredValidate(
            form.expenseReason,
            "expenseReason",
            setErrors,
            "expenseReason field is required"
        );
        const amountValidate = isRequiredValidate(
            form.amount,
            "amount",
            setErrors,
            "amount field is required"
        );
        const returnableValidate = isRequiredValidate(
            form.returnable,
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
            dispatch(createExpense(form, resetForm));
        }
    };

    useEffect(() => {
        dispatch(fetchExpenseCategories());
    }, [dispatch]);

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
                        label="referenceNo"
                        placeholder="referenceNo"
                        required
                        error={errors.referenceNo.show}
                        helperText={errors.referenceNo.text}
                        value={form.referenceNo}
                        onChange={(e) =>
                            changeHandler("referenceNo", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={
                            expenseCategories &&
                            expenseCategories.expenseCategoryList
                        }
                        optionLabel="name"
                        label="Expense Category"
                        placeholder="Expense Category"
                        required
                        multiple
                        value={form.expenseCategory}
                        onChange={(e, data) => {
                            changeHandler("expenseCategory", data);
                        }}
                        error={errors.expenseCategory.show}
                        helperText={errors.expenseCategory.text}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Expense Reason"
                        placeholder="Expense Reason"
                        required
                        error={errors.expenseReason.show}
                        helperText={errors.expenseReason.text}
                        value={form.expenseReason}
                        onChange={(e) =>
                            changeHandler("expenseReason", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <Selector
                        options={returnableOptions}
                        label="Returnable"
                        required
                        error={errors.returnable.show}
                        helperText={errors.returnable.text}
                        value={form.returnable}
                        onChange={(e) =>
                            changeHandler("returnable", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        type="number"
                        label="Amount"
                        placeholder="Amount"
                        required
                        InputProps={{ inputProps: { min: 0 } }}
                        value={form.amount}
                        error={errors.amount.show}
                        helperText={errors.amount.text}
                        onChange={(e) =>
                            changeHandler("amount", e.target.value)
                        }
                    />
                </Box>

                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Note"
                        placeholder="Note"
                        type="text"
                        error={errors.note.show}
                        helperText={errors.note.text}
                        value={form.note}
                        onChange={(e) => changeHandler("note", e.target.value)}
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
