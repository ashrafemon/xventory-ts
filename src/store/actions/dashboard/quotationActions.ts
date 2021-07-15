import { client } from "../../gqlConfig";
import queries from "../../queries";
import { serverError, toggleLoading } from "../siteAction";
import { toast } from "react-toastify";
import * as types from "../../types";

export const fieldChangeHandler = (field, value) => ({
    type: types.SET_QUOTATION_FORM,
    payload: {
        field,
        value,
    },
});

export const fetchQuotations =
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
                query: queries.GET_QUOTATIONS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getQuotationList.code === 200) {
                    dispatch({
                        type: types.FETCH_QUOTATIONS,
                        payload: res.data.getQuotationList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchQuotation =
    (quotationId, cb = () => {}) =>
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
                query: queries.GET_QUOTATION,
                variables: {
                    quotationId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getQuotationById.code === 200) {
                    dispatch({
                        type: types.FETCH_QUOTATION,
                        payload: res.data.getQuotationById.data,
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

export const createQuotation =
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
                mutation: queries.CREATE_QUOTATION,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createQuotation.code === 200) {
                    toast.success("Quotation created successfully");
                    dispatch({
                        type: types.CREATE_QUOTATION,
                        payload: res.data.createQuotation.data,
                    });
                    cb();
                } else if (res.data.createQuotation.code === 400) {
                    toast.error(res.data.createQuotation.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createQuotation.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateQuotation =
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
                mutation: queries.UPDATE_QUOTATION,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateQuotation.code === 200) {
                    toast.success("Quotation updated successfully");
                    dispatch({
                        type: types.UPDATE_QUOTATION,
                        payload: res.data.updateQuotation.data,
                    });
                    cb();
                } else if (res.data.updateQuotation.code === 400) {
                    toast.error(res.data.updateQuotation.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateQuotation.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteQuotation = (quotationId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_QUOTATION,
            variables: {
                quotationId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteQuotation.code === 200) {
                toast.error(res.data.deleteQuotation.data);
                dispatch({
                    type: types.DELETE_QUOTATION,
                    payload: quotationId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
