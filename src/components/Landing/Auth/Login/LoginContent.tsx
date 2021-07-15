import {
    Avatar,
    Box,
    Container,
    Grid,
    Hidden,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Images } from "../../../../constants/themeData";
import { LandingUrls } from "../../../../constants/urls";
import { login } from "../../../../store/actions/authAction";
import { isRequiredValidate } from "../../../../utils/ValidateHelpers";
import AuthButton from "../../shared/AuthButton";
import SecretTextBox from "./../../shared/SecretTextBox";
import SectionTitle from "./../../shared/SectionTitle";
import TextBox from "./../../shared/TextBox";
import { useStyles } from "./styled";

const LoginContent = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { validateErrors } = useSelector((state:RootStateOrAny) => state.auth);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: { show: false, text: "" },
        password: { show: false, text: "" },
    });

    const handleChange = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));

        setLoginForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const resetForm = () => {
        setLoginForm((prevState) => ({
            ...prevState,
            email: "",
            password: "",
        }));
        history.replace(LandingUrls.STORE_SELECT);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let emailValidate = isRequiredValidate(
            loginForm.email,
            "email",
            setErrors,
            "Email field required"
        );

        let passwordValidate = isRequiredValidate(
            loginForm.password,
            "password",
            setErrors,
            "Password field required"
        );

        if (!emailValidate && !passwordValidate) {
            dispatch(login(loginForm, resetForm));
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
                    // emailInputRef.current.focus();
                } else if (item.field === "password") {
                    setErrors((prevState) => ({
                        ...prevState,
                        password: item.description,
                        show: true,
                    }));
                    // passwordInputRef.current.focus();
                }
            });
        }
    }, [validateErrors, setErrors]);

    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="lg">
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    spacing={5}
                >
                    <Hidden smDown>
                        <Grid item xs={12} sm={12} md={5}>
                            <Avatar
                                src={Images.Login}
                                className={classes.avatar}
                            />
                        </Grid>
                    </Hidden>

                    <Grid item xs={12} sm={12} md={6}>
                        <Box className={classes.formBox}>
                            <form onSubmit={handleSubmit}>
                                <Box mb={5}>
                                    <SectionTitle title="Please Login" />
                                </Box>

                                <Box mb={4}>
                                    <TextBox
                                        ref={emailInputRef}
                                        label="Email/UserID"
                                        placeholder="Email/UserID"
                                        value={loginForm.email}
                                        error={errors.email.show}
                                        helperText={errors.email.text}
                                        onChange={(e) =>
                                            handleChange(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>

                                <Box mb={4}>
                                    <SecretTextBox
                                        ref={passwordInputRef}
                                        label="Password"
                                        placeholder="Password"
                                        value={loginForm.password}
                                        error={errors.password.show}
                                        helperText={errors.password.text}
                                        onChange={(e) =>
                                            handleChange(
                                                "password",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>

                                <Box mb={4}>
                                    <Typography
                                        variant="h6"
                                        className={classes.forgetLink}
                                    >
                                        <Link to={LandingUrls.FORGET}>
                                            Forgot Password ?
                                        </Link>
                                    </Typography>
                                </Box>

                                <AuthButton type="submit" text="Login" />
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LoginContent;
