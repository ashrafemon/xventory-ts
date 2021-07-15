import {client} from "../../gqlConfig";
import queries from "../../queries";
import {serverError, toggleLoading} from "../siteAction";
import {toast} from "react-toastify";
import * as types from "../../types";

export const fetchLoans =
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
                    query: queries.GET_LOANS,
                    variables: {
                        size,
                        offset,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.getLoanList.code === 200) {
                        dispatch({
                            type: types.FETCH_LOANS,
                            payload: res.data.getLoanList.data,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    serverError();
                });
        };

export const fetchLoan =
    (loanId, cb = () => {
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
                    query: queries.GET_LOAN,
                    variables: {
                        loanId,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.getLoanById.code === 200) {
                        dispatch({
                            type: types.FETCH_LOAN,
                            payload: res.data.getLoanById.data,
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

export const createLoan =
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
                    mutation: queries.CREATE_LOAN,
                    variables: {
                        ...data,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.createLoan.code === 200) {
                        toast.success("Loan created successfully");
                        dispatch({
                            type: types.CREATE_LOAN,
                            payload: res.data.createLoan.data,
                        });
                        cb();
                    } else if (res.data.createLoan.code === 400) {
                        toast.error(res.data.createLoan.errors[0].message);
                        dispatch({
                            type: types.SITE_VALIDATE_ERRORS,
                            payload: res.data.createLoan.errors,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    serverError();
                });
        };

export const updateLoan =
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
                    mutation: queries.UPDATE_LOAN,
                    variables: {
                        ...data,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.updateLoan.code === 200) {
                        toast.success("Loan updated successfully");
                        dispatch({
                            type: types.UPDATE_LOAN,
                            payload: res.data.updateLoan.data,
                        });
                        cb();
                    } else if (res.data.updateLoan.code === 400) {
                        toast.error(res.data.updateLoan.errors[0].message);
                        dispatch({
                            type: types.SITE_VALIDATE_ERRORS,
                            payload: res.data.updateLoan.errors,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    serverError();
                });
        };

export const deleteLoan = (loanId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_LOAN,
            variables: {
                loanId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteLoan.code === 200) {
                toast.error(res.data.deleteLoan.data);
                dispatch({
                    type: types.DELETE_LOAN,
                    payload: loanId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
