import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchSuppliers =
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
                query: queries.GET_SUPPLIERS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getSupplierList.code === 200) {
                    dispatch({
                        type: types.FETCH_SUPPLIERS,
                        payload: res.data.getSupplierList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchSupplier =
    (supplierId, cb = () => {}) =>
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
                query: queries.GET_SUPPLIER,
                variables: {
                    supplierId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getSupplierById.code === 200) {
                    dispatch({
                        type: types.FETCH_SUPPLIER,
                        payload: res.data.getSupplierById.data,
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

export const createSupplier =
    (data, cb = () => {}) =>
    (dispatch) => {
        console.log(data);
        dispatch(toggleLoading(true));
        let token = localStorage.getItem("authToken") || "";

        client
            .mutate({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                mutation: queries.CREATE_SUPPLIER,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createSupplier.code === 200) {
                    toast.success("Supplier created successfully");
                    cb();
                } else if (res.data.createSupplier.code === 400) {
                    toast.error(res.data.createSupplier.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createSupplier.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateSupplier =
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
                mutation: queries.UPDATE_SUPPLIER,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateSupplier.code === 200) {
                    toast.success("Supplier updated successfully");
                    dispatch({
                        type: types.UPDATE_SUPPLIER,
                        payload: res.data.updateSupplier.data,
                    });
                    cb();
                } else if (res.data.updateSupplier.code === 400) {
                    toast.error(res.data.updateSupplier.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateSupplier.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteSupplier = (supplierId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_SUPPLIER,
            variables: {
                supplierId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteSupplier.code === 200) {
                toast.error(res.data.deleteSupplier.data);
                dispatch({
                    type: types.DELETE_SUPPLIER,
                    payload: supplierId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
