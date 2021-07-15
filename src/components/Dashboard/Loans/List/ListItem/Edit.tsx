import {Box} from "@material-ui/core";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {toggleCrudDialog} from "../../../../../store/actions/siteAction";
import {SubmitButton} from "../../../../../styles/globalStyles";
import CrudTextBox from "../../../shared/CrudTextBox";
import {isRequiredValidate} from "../../../../../utils/ValidateHelpers";
import {updateLoan} from "../../../../../store/actions/dashboard/loanAction";
import CrudSelector from "../../../shared/CrudSelector";

const Edit = ({data, handler, errors, setErrors}) => {
    const dispatch = useDispatch();
    const [loanFromOptions] = useState([
        {text: "Bank", value: "BANK"},
        {text: "NGO", value: "NGO"},
        {text: "Person", value: "PERSON"},
        {text: "Others", value: "OTHERS"},
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

        const dateValidate = isRequiredValidate(
            data.date,
            "date",
            setErrors,
            "Date field is required"
        );
        const loanFromValidate = isRequiredValidate(
            data.loanFrom,
            "loanFrom",
            setErrors,
            "Loan From field is required"
        );
        const referenceNoValidate = isRequiredValidate(
            data.referenceNo,
            "referenceNo",
            setErrors,
            "Reference No From field is required"
        );
        const loadHeadlineValidate = isRequiredValidate(
            data.loadHeadline,
            "loadHeadline",
            setErrors,
            "Load Headline field is required"
        );
        const amountValidate = isRequiredValidate(
            data.amount,
            "amount",
            setErrors,
            "Amount field is required"
        );
        const interestValidate = isRequiredValidate(
            data.interest,
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
            dispatch(
                updateLoan(data, () =>
                    dispatch(toggleCrudDialog({open: false, type: ""}))
                )
            );
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <Box mb={1}>
                <CrudTextBox
                    type="date"
                    label="Date"
                    value={data && data.date}
                    error={errors.date.show}
                    helperText={errors.date.text}
                    onChange={(e) => fieldChangeHandler("date", e.target.value)}
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={loanFromOptions}
                    label="Loan From"
                    value={data && data.loanFrom}
                    error={errors.loanFrom.show}
                    helperText={errors.loanFrom.text}
                    onChange={(e) =>
                        fieldChangeHandler("loanFrom", e.target.value)
                    }
                />
            </Box>
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
                <CrudTextBox
                    label="loadHeadline"
                    value={data && data.loadHeadline}
                    error={errors.loadHeadline.show}
                    helperText={errors.loadHeadline.text}
                    onChange={(e) =>
                        fieldChangeHandler("loadHeadline", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    InputProps={{inputProps: {min: 0}}}
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
                    type="number"
                    InputProps={{inputProps: {min: 0}}}
                    label="interest"
                    value={data && data.interest}
                    error={errors.interest.show}
                    helperText={errors.interest.text}
                    onChange={(e) =>
                        fieldChangeHandler("interest", e.target.value)
                    }
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

            <Box textAlign="center" mt={3}>
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
