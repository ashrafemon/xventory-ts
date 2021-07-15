import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { createBox } from "../../../../store/actions/dashboard/system/boxActions";
import FormActions from "../../shared/FormActions";
import TextBox from "../../shared/TextBox";
import { isRequiredValidate } from "../../../../utils/ValidateHelpers";
import Selector from "../../shared/Selector";
import { createLoan } from "../../../../store/actions/dashboard/loanAction";

const CreateContent = () => {
    const dispatch = useDispatch();

    const { validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );
    const [loanFromOptions] = useState([
        { text: "Bank", value: "BANK" },
        { text: "NGO", value: "NGO" },
        { text: "Person", value: "PERSON" },
        { text: "Others", value: "OTHERS" },
    ]);

    const [form, setForm] = useState({
        date: "",
        loanFrom: "BANK",
        referenceNo: "",
        loadHeadline: "",
        amount: 0,
        interest: 0,
        details: "",
        attachmentList: [],
    });

    const [errors, setErrors] = useState({
        date: { text: "", show: false },
        loanFrom: { text: "", show: false },
        referenceNo: { text: "", show: false },
        loadHeadline: { text: "", show: false },
        amount: { text: "", show: false },
        interest: { text: "", show: false },
        details: { text: "", show: false },
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
            date: "",
            loanFrom: "",
            referenceNo: "",
            loadHeadline: "",
            amount: 0,
            interest: 0,
            details: "",
            attachmentList: [],
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const dateValidate = isRequiredValidate(
            form.date,
            "date",
            setErrors,
            "Date field is required"
        );
        const loanFromValidate = isRequiredValidate(
            form.loanFrom,
            "loanFrom",
            setErrors,
            "Loan From field is required"
        );
        const referenceNoValidate = isRequiredValidate(
            form.referenceNo,
            "referenceNo",
            setErrors,
            "Reference No From field is required"
        );
        const loadHeadlineValidate = isRequiredValidate(
            form.loadHeadline,
            "loadHeadline",
            setErrors,
            "Load Headline field is required"
        );
        const amountValidate = isRequiredValidate(
            form.amount,
            "amount",
            setErrors,
            "Amount field is required"
        );
        const interestValidate = isRequiredValidate(
            form.interest,
            "interest",
            setErrors,
            "Interest field is required"
        );

        if (
            !dateValidate &&
            !loanFromValidate &&
            !referenceNoValidate &&
            !loadHeadlineValidate &&
            !interestValidate &&
            !amountValidate
        ) {
            dispatch(createLoan(form, resetForm));
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
                        type="date"
                        label="Date"
                        placeholder="Date"
                        required
                        error={errors.date.show}
                        helperText={errors.date.text}
                        value={form.date}
                        onChange={(e) => changeHandler("date", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <Selector
                        options={loanFromOptions}
                        label="Loan From"
                        required
                        error={errors.loanFrom.show}
                        helperText={errors.loanFrom.text}
                        value={form.loanFrom}
                        onChange={(e) =>
                            changeHandler("loanFrom", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Reference No"
                        placeholder="Reference No"
                        required
                        value={form.referenceNo}
                        error={errors.referenceNo.show}
                        helperText={errors.referenceNo.text}
                        onChange={(e) =>
                            changeHandler("referenceNo", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Loan Headline"
                        placeholder="Loan Headline"
                        required
                        value={form.loadHeadline}
                        error={errors.loadHeadline.show}
                        helperText={errors.loadHeadline.text}
                        onChange={(e) =>
                            changeHandler("loadHeadline", e.target.value)
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
                        type="number"
                        label="Interest"
                        placeholder="Interest"
                        required
                        InputProps={{ inputProps: { min: 0 } }}
                        value={form.interest}
                        error={errors.interest.show}
                        helperText={errors.interest.text}
                        onChange={(e) =>
                            changeHandler("interest", e.target.value)
                        }
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
                    <FormActions />
                </Box>
            </form>
        </Container>
    );
};

export default CreateContent;
