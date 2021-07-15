import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchUnites =
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
                query: queries.GET_UNITS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getUnitList.code === 200) {
                    dispatch({
                        type: types.FETCH_UNITS,
                        payload: res.data.getUnitList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchUnit =
    (unitId, cb = () => {}) =>
    (dispatch) => {
        console.log(unitId);
        dispatch(toggleLoading(true));
        let token = localStorage.getItem("authToken") || "";

        client
            .query({
                context: {
                    headers: {
                        authorization: token,
                    },
                },
                query: queries.GET_UNIT,
                variables: {
                    unitId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getUnitById.code === 200) {
                    dispatch({
                        type: types.FETCH_UNIT,
                        payload: res.data.getUnitById.data,
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

export const createUnit =
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
                mutation: queries.CREATE_UNIT,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createUnit.code === 200) {
                    toast.success("Unit created successfully");
                    dispatch({
                        type: types.CREATE_UNIT,
                        payload: res.data.createUnit.data,
                    });
                    cb();
                } else if (res.data.createUnit.code === 400) {
                    toast.error(res.data.createUnit.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createUnit.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateUnit =
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
                mutation: queries.UPDATE_UNIT,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateUnit.code === 200) {
                    toast.success("Unit updated successfully");
                    dispatch({
                        type: types.UPDATE_UNIT,
                        payload: res.data.updateUnit.data,
                    });
                    cb();
                } else if (res.data.updateUnit.code === 400) {
                    toast.error(res.data.updateUnit.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateUnit.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteUnit = (unitId) => (dispatch) => {
    console.log(unitId);
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_UNIT,
            variables: {
                unitId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteUnit.code === 200) {
                toast.error(res.data.deleteUnit.data);
                dispatch({
                    type: types.DELETE_UNIT,
                    payload: unitId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
