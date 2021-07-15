import {toast} from "react-toastify";
import {serverError, toggleLoading} from "./siteAction";
import {client} from "../gqlConfig";
import queries from "../queries";
import * as types from "../types";

export const fetchStores = () => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .query({
            context: {
                headers: {
                    authorization: token,
                },
            },
            query: queries.GET_STORES,
        })
        .then((res) => {
            console.log(res);
            if (res.data.getAllStoreList.code === 200) {
                dispatch({
                    type: types.FETCH_STORES,
                    payload: res.data.getAllStoreList.data,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};

export const fetchStoresWithPaginate =
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
                    query: queries.GET_STORES_WITH_PAGINATE,
                    variables: {
                        size,
                        offset,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.getStoreList.code === 200) {
                        dispatch({
                            type: types.FETCH_STORES,
                            payload: res.data.getStoreList.data,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    serverError();
                });
        };

export const fetchStore =
    (storeId, cb = () => {
    }) =>
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
                    query: queries.GET_STORE,
                    variables: {
                        storeId,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.getStoreById.code === 200) {
                        dispatch({
                            type: types.FETCH_STORE,
                            payload: res.data.getStoreById.data,
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

export const updateStore =
    (data, cb = () => {
    }) =>
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
                    mutation: queries.UPDATE_STORE,
                    variables: {
                        ...data,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.updateStore.code === 200) {
                        toast.success("Store updated successfully");
                        dispatch({
                            type: types.UPDATE_STORE,
                            payload: res.data.updateStore.data,
                        });
                        cb();
                    } else if (res.data.updateStore.code === 400) {
                        toast.error(res.data.updateStore.errors[0].message);
                        dispatch({
                            type: types.SITE_VALIDATE_ERRORS,
                            payload: res.data.updateStore.errors,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    serverError();
                });
        };

export const deleteStore = (storeId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_STORE,
            variables: {
                storeId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteStore.code === 200) {
                toast.error(res.data.deleteStore.data);
                dispatch({
                    type: types.DELETE_STORE,
                    payload: storeId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
