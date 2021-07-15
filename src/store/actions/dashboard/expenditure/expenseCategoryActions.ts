import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchExpenseCategories =
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
                query: queries.GET_EXPENSE_CATEGORIES,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getExpenseCategoryList.code === 200) {
                    dispatch({
                        type: types.FETCH_EXPENSE_CATEGORIES,
                        payload: res.data.getExpenseCategoryList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchExpenseCategory =
    (expenseCategoryId, cb = () => {}) =>
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
                query: queries.GET_EXPENSE_CATEGORY,
                variables: {
                    expenseCategoryId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getExpenseCategoryById.code === 200) {
                    dispatch({
                        type: types.FETCH_EXPENSE_CATEGORY,
                        payload: res.data.getExpenseCategoryById.data,
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

export const createExpenseCategory =
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
                mutation: queries.CREATE_EXPENSE_CATEGORY,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createExpenseCategory.code === 200) {
                    toast.success("Expense Category created successfully");
                    dispatch({
                        type: types.CREATE_EXPENSE_CATEGORY,
                        payload: res.data.createExpenseCategory.data,
                    });
                    cb();
                } else if (res.data.createExpenseCategory.code === 400) {
                    toast.error(
                        res.data.createExpenseCategory.errors[0].message
                    );
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createExpenseCategory.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateExpenseCategory =
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
                mutation: queries.UPDATE_EXPENSE_CATEGORY,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateExpenseCategory.code === 200) {
                    toast.success("Expense Category updated successfully");
                    dispatch({
                        type: types.UPDATE_EXPENSE_CATEGORY,
                        payload: res.data.updateExpenseCategory.data,
                    });
                    cb();
                } else if (res.data.updateExpenseCategory.code === 400) {
                    toast.error(
                        res.data.updateExpenseCategory.errors[0].message
                    );
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateExpenseCategory.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteExpenseCategory = (expenseCategoryId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_EXPENSE_CATEGORY,
            variables: {
                expenseCategoryId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteExpenseCategory.code === 200) {
                toast.error(res.data.deleteExpenseCategory.data);
                dispatch({
                    type: types.DELETE_EXPENSE_CATEGORY,
                    payload: expenseCategoryId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
