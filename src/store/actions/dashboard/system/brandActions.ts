import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "./../../../types";

export const fetchBrands =
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
                query: queries.GET_BRANDS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getBrandList.code === 200) {
                    dispatch({
                        type: types.FETCH_BRANDS,
                        payload: res.data.getBrandList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchBrand =
    (brandId, cb = () => {}) =>
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
                query: queries.GET_BRAND,
                variables: {
                    brandId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getBrandById.code === 200) {
                    dispatch({
                        type: types.FETCH_BRAND,
                        payload: res.data.getBrandById.data,
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

export const createBrand =
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
                mutation: queries.CREATE_BRAND,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createBrand.code === 200) {
                    toast.success("Brand created successfully");
                    dispatch({
                        type: types.CREATE_BRAND,
                        payload: res.data.createBrand.data,
                    });
                    cb();
                } else if (res.data.createBrand.code === 400) {
                    toast.error(res.data.createBrand.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createBrand.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateBrand =
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
                mutation: queries.UPDATE_BRAND,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateBrand.code === 200) {
                    toast.success("Brand updated successfully");
                    dispatch({
                        type: types.UPDATE_BRAND,
                        payload: res.data.updateBrand.data,
                    });
                    cb();
                } else if (res.data.updateBrand.code === 400) {
                    toast.error(res.data.updateBrand.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateBrand.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteBrand = (brandId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_BRAND,
            variables: {
                brandId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteBrand.code === 200) {
                toast.error(res.data.deleteBrand.data);
                dispatch({
                    type: types.DELETE_BRAND,
                    payload: brandId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
