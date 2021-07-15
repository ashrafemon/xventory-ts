import { client } from "../../gqlConfig";
import queries from "../../queries";
import { serverError, toggleLoading } from "../siteAction";
import { toast } from "react-toastify";
import * as types from "../../types";

export const fetchCustomers =
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
                query: queries.GET_CUSTOMERS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getCustomerList.code === 200) {
                    dispatch({
                        type: types.FETCH_CUSTOMERS,
                        payload: res.data.getCustomerList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchCustomer =
    (customerId, cb = () => {}) =>
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
                query: queries.GET_CUSTOMER,
                variables: {
                    customerId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getCustomerById.code === 200) {
                    dispatch({
                        type: types.FETCH_CUSTOMER,
                        payload: res.data.getCustomerById.data,
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

export const createCustomer =
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
                mutation: queries.CREATE_CUSTOMER,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createCustomer.code === 200) {
                    toast.success("Customer created successfully");
                    dispatch({
                        type: types.CREATE_CUSTOMER,
                        payload: res.data.createCustomer.data,
                    });
                    cb();
                } else if (res.data.createCustomer.code === 400) {
                    toast.error(res.data.createCustomer.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createCustomer.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateCustomer =
    (data, cb = () => {}) =>
    (dispatch) => {
        console.log("Pass Data", data);

        dispatch(toggleLoading(true));
        let token = localStorage.getItem("authToken") || "";

        client
            .mutate({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                mutation: queries.UPDATE_CUSTOMER,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateCustomer.code === 200) {
                    toast.success("Customer updated successfully");
                    dispatch({
                        type: types.UPDATE_CUSTOMER,
                        payload: res.data.updateCustomer.data,
                    });
                    cb();
                } else if (res.data.updateCustomer.code === 400) {
                    toast.error(res.data.updateCustomer.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateCustomer.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteCustomer = (customerId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_CUSTOMER,
            variables: {
                customerId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteCustomer.code === 200) {
                toast.error(res.data.deleteCustomer.data);
                dispatch({
                    type: types.DELETE_CUSTOMER,
                    payload: customerId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
