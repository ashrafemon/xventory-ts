import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { LandingUrls } from "../../../../constants/urls";
import { resetPassword } from "../../../../store/actions/authAction";
import { VALIDATE_ERRORS } from "../../../../store/types";
import {
    isEqualValidate,
    isRequiredValidate,
} from "../../../../utils/ValidateHelpers";
import AuthButton from "../../shared/AuthButton";
import SecretTextBox from "../../shared/SecretTextBox";
import SectionTitle from "../../shared/SectionTitle";
import { useStyles } from "./styled";

const NewPasswordForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { validateErrors } = useSelector((state:RootStateOrAny) => state.auth);
    const [form, setForm] = useState({
        newPassword: "",
        reWrittenNewPassword: "",
    });

    const [errors, setErrors] = useState({
        newPassword: { text: "", show: false },
        reWrittenNewPassword: { text: "", show: false },
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
            newPassword: "",
            reWrittenNewPassword: "",
        }));
        history.replace(LandingUrls.LOGIN);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newPasswordValidate = isRequiredValidate(
            form.newPassword,
            "newPassword",
            setErrors,
            "New Password field required"
        );

        const reWrittenNewPasswordValidate = isRequiredValidate(
            form.reWrittenNewPassword,
            "reWrittenNewPassword",
            setErrors,
            "Confirm Password field required"
        );

        const reWrittenNewPasswordConfirmValidate = isEqualValidate(
            form.newPassword,
            form.reWrittenNewPassword,
            "reWrittenNewPassword",
            setErrors,
            "Confirm Password not matched"
        );

        if (
            !newPasswordValidate &&
            !reWrittenNewPasswordValidate &&
            !reWrittenNewPasswordConfirmValidate
        ) {
            dispatch(resetPassword(form, resetForm));
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
        <Box className={classes.formBox}>
            <form onSubmit={submitHandler}>
                <Box mb={5}>
                    <SectionTitle title="Enter Your New Password" />
                </Box>

                <Box mb={4}>
                    <SecretTextBox
                        placeholder="Password"
                        label="New Password"
                        value={form.newPassword}
                        onChange={(e) =>
                            changeHandler("newPassword", e.target.value)
                        }
                        error={errors.newPassword.show}
                        helperText={errors.newPassword.text}
                    />
                </Box>

                <Box mb={4}>
                    <SecretTextBox
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        onChange={(e) =>
                            changeHandler(
                                "reWrittenNewPassword",
                                e.target.value
                            )
                        }
                        error={errors.reWrittenNewPassword.show}
                        helperText={errors.reWrittenNewPassword.text}
                    />
                </Box>

                <AuthButton type="submit" text="Change Password" />
            </form>
        </Box>
    );
};

export default NewPasswordForm;
