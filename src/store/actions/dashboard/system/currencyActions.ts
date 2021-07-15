import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchCurrencies =
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
                query: queries.GET_CURRENCIES,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getCurrencyList.code === 200) {
                    dispatch({
                        type: types.FETCH_CURRENCIES,
                        payload: res.data.getCurrencyList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchCurrency =
    (currencyId, cb = () => {}) =>
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
                query: queries.GET_CURRENCY,
                variables: {
                    currencyId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getCurrencyById.code === 200) {
                    dispatch({
                        type: types.FETCH_CURRENCY,
                        payload: res.data.getCurrencyById.data,
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

export const createCurrency =
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
                mutation: queries.CREATE_CURRENCY,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createCurrency.code === 200) {
                    toast.success("Currency created successfully");
                    dispatch({
                        type: types.CREATE_CURRENCY,
                        payload: res.data.createCurrency.data,
                    });
                    cb();
                } else if (res.data.createCurrency.code === 400) {
                    toast.error(res.data.createCurrency.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createCurrency.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateCurrency =
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
                mutation: queries.UPDATE_CURRENCY,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateCurrency.code === 200) {
                    toast.success("Currency updated successfully");
                    dispatch({
                        type: types.UPDATE_CURRENCY,
                        payload: res.data.updateCurrency.data,
                    });
                    cb();
                } else if (res.data.updateCurrency.code === 400) {
                    toast.error(res.data.updateCurrency.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateCurrency.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteCurrency = (currencyId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_CURRENCY,
            variables: {
                currencyId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteCurrency.code === 200) {
                toast.error(res.data.deleteCurrency.data);
                dispatch({
                    type: types.DELETE_CURRENCY,
                    payload: currencyId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
