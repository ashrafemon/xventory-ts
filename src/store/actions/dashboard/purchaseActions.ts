import { client } from "../../gqlConfig";
import queries from "../../queries";
import { serverError, toggleLoading } from "../siteAction";
import { toast } from "react-toastify";
import * as types from "../../types";

export const fieldChangeHandler = (field, value) => ({
    type: types.SET_PURCHASE_FORM,
    payload: {
        field,
        value,
    },
});

export const fetchPurchases =
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
                query: queries.GET_PURCHASES,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getPurchaseList.code === 200) {
                    dispatch({
                        type: types.FETCH_PURCHASES,
                        payload: res.data.getPurchaseList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchPurchase =
    (purchaseId, cb = () => {}) =>
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
                query: queries.GET_PURCHASE,
                variables: {
                    purchaseId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getPurchaseById.code === 200) {
                    dispatch({
                        type: types.FETCH_PURCHASE,
                        payload: res.data.getPurchaseById.data,
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

export const createPurchase =
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
                mutation: queries.CREATE_PURCHASE,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createPurchase.code === 200) {
                    toast.success("Purchase created successfully");
                    dispatch({
                        type: types.CREATE_PURCHASE,
                        payload: res.data.createPurchase.data,
                    });
                    cb();
                } else if (res.data.createPurchase.code === 400) {
                    toast.error(res.data.createPurchase.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createPurchase.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updatePurchase =
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
                mutation: queries.UPDATE_PURCHASE,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updatePurchase.code === 200) {
                    toast.success("purchase updated successfully");
                    dispatch({
                        type: types.UPDATE_PURCHASE,
                        payload: res.data.updatePurchase.data,
                    });
                    cb();
                } else if (res.data.updatePurchase.code === 400) {
                    toast.error(res.data.updatePurchase.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updatePurchase.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deletePurchase = (purchaseId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_PURCHASE,
            variables: {
                purchaseId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deletePurchase.code === 200) {
                toast.error(res.data.deletePurchase.data);
                dispatch({
                    type: types.DELETE_PURCHASE,
                    payload: purchaseId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
