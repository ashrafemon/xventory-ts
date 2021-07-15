import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchCategories =
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
                query: queries.GET_CATEGORIES,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getCategoryList.code === 200) {
                    dispatch({
                        type: types.FETCH_CATEGORIES,
                        payload: res.data.getCategoryList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchCategory =
    (categoryId, cb = () => {}) =>
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
                query: queries.GET_CATEGORY,
                variables: {
                    categoryId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getCategoryById.code === 200) {
                    dispatch({
                        type: types.FETCH_CATEGORY,
                        payload: res.data.getCategoryById.data,
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

export const createCategory =
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
                mutation: queries.CREATE_CATEGORY,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createCategory.code === 200) {
                    toast.success("Category created successfully");
                    dispatch({
                        type: types.CREATE_CATEGORY,
                        payload: res.data.createCategory.data,
                    });
                    cb();
                } else if (res.data.createCategory.code === 400) {
                    toast.error(res.data.createCategory.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createCategory.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateCategory =
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
                mutation: queries.UPDATE_CATEGORY,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateCategory.code === 200) {
                    toast.success("Category updated successfully");
                    dispatch({
                        type: types.UPDATE_CATEGORY,
                        payload: res.data.updateCategory.data,
                    });
                    cb();
                } else if (res.data.updateCategory.code === 400) {
                    toast.error(res.data.updateCategory.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateCategory.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteCategory = (categoryId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_CATEGORY,
            variables: {
                categoryId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteCategory.code === 200) {
                toast.error(res.data.deleteCategory.data);
                dispatch({
                    type: types.DELETE_CATEGORY,
                    payload: categoryId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
