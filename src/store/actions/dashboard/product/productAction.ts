import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchProducts =
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
                query: queries.GET_PRODUCTS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getProductList.code === 200) {
                    dispatch({
                        type: types.FETCH_PRODUCTS,
                        payload: res.data.getProductList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchProduct =
    (productId, cb = () => {}) =>
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
                query: queries.GET_PRODUCT,
                variables: {
                    productId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getProductById.code === 200) {
                    dispatch({
                        type: types.FETCH_PRODUCT,
                        payload: res.data.getProductById.data,
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

export const createProduct =
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
                mutation: queries.CREATE_PRODUCT,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createProduct.code === 200) {
                    toast.success("Product created successfully");
                    dispatch({
                        type: types.CREATE_PRODUCT,
                        payload: res.data.createProduct.data,
                    });
                    cb();
                } else if (res.data.createProduct.code === 400) {
                    toast.error(res.data.createProduct.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createProduct.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateProduct =
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
                mutation: queries.UPDATE_PRODUCT,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateProduct.code === 200) {
                    toast.success("Product updated successfully");
                    dispatch({
                        type: types.UPDATE_PRODUCT,
                        payload: res.data.updateProduct.data,
                    });
                    cb();
                } else if (res.data.updateProduct.code === 400) {
                    toast.error(res.data.updateProduct.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateProduct.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteProduct = (productId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_PRODUCT,
            variables: {
                productId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteProduct.code === 200) {
                toast.error(res.data.deleteProduct.data);
                dispatch({
                    type: types.DELETE_PRODUCT,
                    payload: productId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};

export const fetchProductsBySupplierId = (supplierId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .query({
            context: {
                headers: {
                    authorization: token,
                },
            },
            query: queries.GET_PRODUCTS_BY_SUPPLIER_ID,
            variables: {
                supplierId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.getAllProductListBySupplierId.code === 200) {
                dispatch({
                    type: types.FETCH_PRODUCTS,
                    payload: res.data.getAllProductListBySupplierId.data,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
