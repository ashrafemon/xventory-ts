import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { requestResetPassword } from "../../../../store/actions/authAction";
import { VALIDATE_ERRORS } from "../../../../store/types";
import { isRequiredValidate } from "../../../../utils/ValidateHelpers";
import AuthButton from "../../shared/AuthButton";
import SectionTitle from "../../shared/SectionTitle";
import TextBox from "../../shared/TextBox";
import { useStyles } from "./styled";

const ForgetForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { validateErrors } = useSelector((state:RootStateOrAny) => state.auth);

    const [form, setForm] = useState({
        email: "",
    });

    const [errors, setErrors] = useState({
        email: { text: "", show: false },
    });

    const changeHandler = (field, value) => {
        if (errors[field]) {
            dispatch({
                type: VALIDATE_ERRORS,
                payload: [],
            });
            setErrors((prevState) => ({
                ...prevState,
                [field]: { text: "", show: false },
            }));
        }

        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const resetForm = () => {
        setForm((prevState) => ({
            ...prevState,
            email: "",
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const emailValidate = isRequiredValidate(
            form.email,
            "email",
            setErrors,
            "Email field is required"
        );

        if (!emailValidate) {
            dispatch(requestResetPassword(form, resetForm));
        }
    };

    useEffect(() => {
        if (validateErrors) {
            validateErrors.forEach((item) => {
                console.log(item);
                if (item.field === "username") {
                    setErrors((prevState) => ({
                        ...prevState,
                        email: {
                            text: item.description,
                            show: true,
                        },
                    }));
                }
            });
        }
    }, [validateErrors, setErrors]);

    return (
        <Box className={classes.formBox}>
            <form onSubmit={submitHandler}>
                <Box mb={5}>
                    <SectionTitle title="Forgot Your Password ?" />
                </Box>

                <Box mb={4}>
                    <TextBox
                        // type="email"
                        placeholder="Enter Your Email"
                        value={form.email}
                        label="Enter Your Email"
                        onChange={(e) => changeHandler("email", e.target.value)}
                        error={errors.email.show}
                        helperText={errors.email.text}
                    />
                </Box>

                <AuthButton type="submit" text="Get Password Reset Link" />
            </form>
        </Box>
    );
};

export default ForgetForm;
