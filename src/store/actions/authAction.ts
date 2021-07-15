import tokenDecoder from "../../utils/jwt";
import { client } from "../gqlConfig";
import queries from "../queries";
import * as types from "../types";
import { serverError, toggleLoading } from "./siteAction";
import { toast } from "react-toastify";

export const toggleOTPForm = (status) => ({
    type: types.SET_REGISTER,
    payload: status,
});

export const togglePurchaseModal = (status) => ({
    type: types.TOGGLE_PURCHASE_MODAL,
    payload: status,
});

export const setCurrentUser = ({
    currentUser,
    isTokenExpire,
    isAuthenticate,
    token,
}) => ({
    type: types.SET_CURRENT_USER,
    payload: {
        currentUser,
        isTokenExpire,
        isAuthenticate,
        token,
    },
});

export const registerAsStoreAdmin =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleLoading(true));
        client
            .mutate({
                mutation: queries.REGISTER_STORE_ADMIN,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.registerAsAStoreAdmin.code === 200) {
                    toast.info("Please verify your account...");
                    dispatch(toggleOTPForm(true));
                    dispatch({
                        type: types.FETCH_REGISTER_USER,
                        payload: res.data.registerAsAStoreAdmin.data,
                    });
                    cb();
                } else if (res.data.registerAsAStoreAdmin.code === 400) {
                    toast.error("Registration Failed");
                    dispatch({
                        type: types.VALIDATE_ERRORS,
                        payload: res.data.registerAsAStoreAdmin.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const verifyOTP = (data) => (dispatch, getState) => {
    dispatch(toggleLoading(true));
    const registeredUser = getState().auth.registeredUser;

    client
        .mutate({
            mutation: queries.VERIFY_OTP,
            variables: {
                userId: registeredUser.id,
                code: data,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.verifyUserAccount.code === 200) {
                dispatch(toggleOTPForm(false));
                if (res.data.verifyUserAccount.data.emailVerified) {
                    dispatch(togglePurchaseModal(true));
                }
                dispatch({
                    type: types.VERIFY_USER,
                    payload: res.data.verifyUserAccount.data,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};

export const planPurchaseLink = (data) => (dispatch, getState) => {
    dispatch(toggleLoading(true));
    const registeredUser = getState().auth.registeredUser;

    client
        .mutate({
            mutation: queries.PLAN_PURCHASE,
            variables: {
                userId: registeredUser.id,
                planId: data,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.createUserPlanPaymentLink.code === 200) {
                dispatch({
                    type: types.CREATE_PLAN_PURCHASE_LINK,
                    payload: res.data.createUserPlanPaymentLink.paymentLink,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};

export const login =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleLoading(true));

        client
            .mutate({
                mutation: queries.LOGIN,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.login.code === 200) {
                    localStorage.setItem("authToken", res.data.login.data);
                    const decodedToken = tokenDecoder(res.data.login.data);

                    dispatch({
                        type: types.LOGIN,
                        payload: {
                            token: res.data.login.data,
                            isAuthenticate: res.data.login.data ? true : false,
                        },
                    });
                    dispatch({
                        type: types.SET_LOGIN_USER,
                        payload: {
                            currentUser: decodedToken.myDecodedToken,
                            tokenExpire: decodedToken.isMyTokenExpired,
                        },
                    });

                    cb();
                } else if (res.data.login.code === 400) {
                    toast.error("Login Failed");
                    dispatch({
                        type: types.VALIDATE_ERRORS,
                        payload: res.data.login.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const loginWithStore =
    (cb = () => {}) =>
    (dispatch, getState) => {
        dispatch(toggleLoading(true));
        const selectedStore = getState().stores.selectedStore;
        const token = localStorage.getItem("authToken");

        client
            .mutate({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                mutation: queries.LOGIN_WITH_STORE,
                variables: {
                    storeId: selectedStore.id,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.loginWithStore.code === 200) {
                    localStorage.setItem(
                        "authToken",
                        res.data.loginWithStore.data
                    );
                    const decodedToken = tokenDecoder(
                        res.data.loginWithStore.data
                    );

                    console.log(decodedToken);

                    dispatch({
                        type: types.LOGIN,
                        payload: {
                            token: res.data.loginWithStore.data,
                            isAuthenticate: !!res.data.loginWithStore.data,
                        },
                    });
                    dispatch({
                        type: types.SET_LOGIN_USER,
                        payload: {
                            currentUser: decodedToken.myDecodedToken,
                            tokenExpire: decodedToken.isMyTokenExpired,
                        },
                    });

                    cb();
                } else if (res.data.loginWithStore.code === 400) {
                    toast.error("Login Failed");
                    dispatch({
                        type: types.VALIDATE_ERRORS,
                        payload: res.data.loginWithStore.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const requestResetPassword = (data, cb) => (dispatch) => {
    dispatch(toggleLoading(true));

    client
        .mutate({
            mutation: queries.REQUEST_RESET_PASSWORD,
            variables: {
                ...data,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.requestForResetUserPassword.code === 200) {
                toast.info("A verify otp send in your mail");
                dispatch({
                    type: types.REQUEST_RESET_PASSWORD,
                    payload: {
                        resetUser: { email: data.email },
                        resetOTPForm: true,
                    },
                });
                cb();
            } else if (res.data.requestForResetUserPassword.code === 400) {
                toast.error("Reset Password Failed");
                dispatch({
                    type: types.VALIDATE_ERRORS,
                    payload: res.data.requestForResetUserPassword.errors,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};

export const verifyResetOTP = (data) => (dispatch, getState) => {
    dispatch(toggleLoading(true));
    const resetUser = getState().auth.resetUser;

    client
        .mutate({
            mutation: queries.VERIFY_RESET_PASSWORD_OTP,
            variables: {
                code: data,
                email: resetUser.email,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.validateOTP.code === 200) {
                dispatch({
                    type: types.VERIFY_RESET_PASSWORD_OTP,
                    payload: {
                        resetUser: { email: resetUser.email, code: data },
                        resetOTPForm: false,
                        newPasswordForm: true,
                    },
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};

export const resetPassword =
    (data, cb = () => {}) =>
    (dispatch, getState) => {
        dispatch(toggleLoading(true));
        const resetUser = getState().auth.resetUser;

        client
            .mutate({
                mutation: queries.RESET_PASSWORD,
                variables: {
                    ...data,
                    code: resetUser.code,
                    email: resetUser.email,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.resetPassword.code === 200) {
                    toast.success(res.data.resetPassword.data);
                    dispatch({
                        type: types.RESET_PASSWORD,
                        payload: {
                            resetUser: {},
                            resetOTPForm: false,
                            newPasswordForm: false,
                        },
                    });
                    cb();
                } else if (res.data.resetPassword.code === 400) {
                    toast.error("Password reset failed");
                    dispatch({
                        type: types.VALIDATE_ERRORS,
                        payload: res.data.resetPassword.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const logout =
    (cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleLoading(true));
        localStorage.removeItem("authToken");

        dispatch({
            type: types.LOGOUT,
        });
        dispatch({
            type: types.SET_STORE,
            payload: null,
        });
        dispatch(toggleLoading(false));
        cb();
    };
