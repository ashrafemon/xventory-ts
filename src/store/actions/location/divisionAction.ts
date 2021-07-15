import * as types from "../../types";
import queries from "../../queries";
import {client} from "../../gqlConfig";
import {toggleLoading} from "../siteAction";
import {toast} from "react-toastify";

export const fetchDivisions =
    (size = 10, offset = 0) =>
        (dispatch) => {
            dispatch(toggleLoading(true));

            client
                .query({
                    query: queries.GET_DIVISIONS,
                    variables: {
                        size,
                        offset,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.getDivisionList.code === 200) {
                        dispatch({
                            type: types.FETCH_DIVISIONS,
                            payload: res.data.getDivisionList.data,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    dispatch(toggleLoading(false));
                });
        };

export const fetchDivision = (id) => (dispatch) => {
    dispatch({
        type: types.TOGGLE_LOADING,
        payload: true,
    });

    client
        .query({
            query: queries.GET_DIVISION,
            variables: {
                id,
            },
        })
        .then((res) => {
            console.log(res);
            dispatch({
                type: types.TOGGLE_LOADING,
                payload: false,
            });
            if (res.data.getDivisionById.code === 200) {
                dispatch({
                    type: types.FETCH_DIVISION,
                    payload: res.data.getDivisionById.data,
                });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: types.TOGGLE_LOADING,
                payload: false,
            });
        });
};

export const createDivision =
    ({name, country}) =>
        (dispatch) => {
            dispatch({
                type: types.TOGGLE_LOADING,
                payload: true,
            });

            client
                .mutate({
                    mutation: queries.ADD_DIVISION,
                    variables: {
                        name,
                        country,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (
                        (res.data.createDivision.code === 200) &&
                        (res.data.createDivision.status === "OK")
                    ) {
                        toast.success("Division added...");
                    }

                    dispatch({
                        type: types.TOGGLE_LOADING,
                        payload: false,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    dispatch({
                        type: types.TOGGLE_LOADING,
                        payload: false,
                    });
                });
        };

export const updateDivision =
    ({id, name, country}) =>
        (dispatch) => {
            dispatch({
                type: types.TOGGLE_LOADING,
                payload: true,
            });

            client
                .mutate({
                    mutation: queries.UPDATE_DIVISION,
                    variables: {
                        id,
                        name,
                        country,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (
                        (res.data.updateDivision.code === 200) &&
                        (res.data.updateDivision.status === "OK")
                    ) {
                        toast.success("Division updated...");
                        dispatch({
                            type: types.UPDATE_DIVISION,
                            payload: res.data.updateDivision.data,
                        });
                    }

                    dispatch({
                        type: types.TOGGLE_LOADING,
                        payload: false,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    dispatch({
                        type: types.TOGGLE_LOADING,
                        payload: false,
                    });
                });
        };

export const deleteDivision = (id) => (dispatch) => {
    dispatch({
        type: types.TOGGLE_LOADING,
        payload: true,
    });

    client
        .mutate({
            mutation: queries.DELETE_DIVISION,
            variables: {
                id,
            },
        })
        .then((res) => {
            console.log(res);
            if (
                (res.data.deleteDivision.code === 200) &&
                (res.data.deleteDivision.status === "OK")
            ) {
                dispatch({
                    type: types.DELETE_DIVISION,
                    payload: id,
                });
                toast.success("Division deleted...");
            }

            dispatch({
                type: types.TOGGLE_LOADING,
                payload: false,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: types.TOGGLE_LOADING,
                payload: false,
            });
        });
};
