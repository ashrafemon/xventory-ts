import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchExpenses =
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
                query: queries.GET_EXPENSES,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getExpenseList.code === 200) {
                    dispatch({
                        type: types.FETCH_EXPENSES,
                        payload: res.data.getExpenseList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchExpense =
    (expenseId, cb = () => {}) =>
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
                query: queries.GET_EXPENSE,
                variables: {
                    expenseId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getExpenseById.code === 200) {
                    dispatch({
                        type: types.FETCH_EXPENSE,
                        payload: res.data.getExpenseById.data,
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

export const createExpense =
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
                mutation: queries.CREATE_EXPENSE,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createExpense.code === 200) {
                    toast.success("Expense Category created successfully");
                    dispatch({
                        type: types.CREATE_EXPENSE,
                        payload: res.data.createExpense.data,
                    });
                    cb();
                } else if (res.data.createExpense.code === 400) {
                    toast.error(res.data.createExpense.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createExpense.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateExpense =
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
                mutation: queries.UPDATE_EXPENSE,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateExpense.code === 200) {
                    toast.success("Expense Category updated successfully");
                    dispatch({
                        type: types.UPDATE_EXPENSE,
                        payload: res.data.updateExpense.data,
                    });
                    cb();
                } else if (res.data.updateExpense.code === 400) {
                    toast.error(res.data.updateExpense.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateExpense.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteExpense = (expenseId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_EXPENSE,
            variables: {
                expenseId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteExpense.code === 200) {
                toast.error(res.data.deleteExpense.data);
                dispatch({
                    type: types.DELETE_EXPENSE,
                    payload: expenseId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
