import { toast } from "react-toastify";
import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import * as types from "../../../types";
import { serverError, toggleLoading } from "../../siteAction";

export const fetchTaxRates =
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
                query: queries.GET_TAX_RATES,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getTaxRateList.code === 200) {
                    dispatch({
                        type: types.FETCH_TAX_RATES,
                        payload: res.data.getTaxRateList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchTaxRate =
    (taxRateId, cb = () => {}) =>
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
                query: queries.GET_TAX_RATE,
                variables: {
                    taxRateId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getTaxRateById.code === 200) {
                    dispatch({
                        type: types.FETCH_TAX_RATE,
                        payload: res.data.getTaxRateById.data,
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

export const createTaxRate =
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
                mutation: queries.CREATE_TAX_RATE,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createTaxRate.code === 200) {
                    toast.success("Tax rate created successfully");
                    dispatch({
                        type: types.CREATE_TAX_RATE,
                        payload: res.data.createTaxRate.data,
                    });
                    cb();
                } else if (res.data.createTaxRate.code === 400) {
                    toast.error(res.data.createTaxRate.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createTaxRate.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateTaxRate =
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
                mutation: queries.UPDATE_TAX_RATE,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateTaxRate.code === 200) {
                    toast.success("TaxRate updated successfully");
                    dispatch({
                        type: types.UPDATE_TAX_RATE,
                        payload: res.data.updateTaxRate.data,
                    });
                    cb();
                } else if (res.data.updateTaxRate.code === 400) {
                    toast.error(res.data.updateTaxRate.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateTaxRate.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteTaxRate = (taxRateId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_TAX_RATE,
            variables: {
                taxRateId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteTaxRate.code === 200) {
                toast.error(res.data.deleteTaxRate.data);
                dispatch({
                    type: types.DELETE_TAX_RATE,
                    payload: taxRateId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
