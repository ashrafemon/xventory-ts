import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchPaymentMethods =
    (size = 10, offset = 0) =>
    (dispatch) => {
        dispatch(toggleLoading(true));
        let token = localStorage.getItem("authToken") || "";

        client
            .query({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                query: queries.GET_PAYMENT_METHODS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getPaymentMethodList.code === 200) {
                    dispatch({
                        type: types.FETCH_PAYMENT_METHODS,
                        payload: res.data.getPaymentMethodList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchPaymentMethod =
    (paymentMethodId, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleLoading(true));
        let token = localStorage.getItem("authToken") || "";

        client
            .query({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                query: queries.GET_PAYMENT_METHOD,
                variables: {
                    paymentMethodId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getPaymentMethodById.code === 200) {
                    dispatch({
                        type: types.FETCH_PAYMENT_METHOD,
                        payload: res.data.getPaymentMethodById.data,
                    });
                    cb();
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const createPaymentMethod =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleLoading(true));
        let token = localStorage.getItem("authToken") || "";

        client
            .mutate({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                mutation: queries.CREATE_PAYMENT_METHOD,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createPaymentMethod.code === 200) {
                    toast.success("Payment Method created successfully");
                    dispatch({
                        type: types.CREATE_PAYMENT_METHOD,
                        payload: res.data.createPaymentMethod.data,
                    });
                    cb();
                } else if (res.data.createPaymentMethod.code === 400) {
                    toast.error(res.data.createPaymentMethod.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createPaymentMethod.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updatePaymentMethod =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleLoading(true));
        let token = localStorage.getItem("authToken") || "";

        client
            .mutate({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                mutation: queries.UPDATE_PAYMENT_METHOD,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updatePaymentMethod.code === 200) {
                    toast.success("PaymentMethod updated successfully");
                    dispatch({
                        type: types.UPDATE_PAYMENT_METHOD,
                        payload: res.data.updatePaymentMethod.data,
                    });
                    cb();
                } else if (res.data.updatePaymentMethod.code === 400) {
                    toast.error(res.data.updatePaymentMethod.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updatePaymentMethod.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deletePaymentMethod = (paymentMethodId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_PAYMENT_METHOD,
            variables: {
                paymentMethodId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deletePaymentMethod.code === 200) {
                toast.error(res.data.deletePaymentMethod.data);
                dispatch({
                    type: types.DELETE_PAYMENT_METHOD,
                    payload: paymentMethodId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
