import { client } from "../../../gqlConfig";
import queries from "../../../queries";
import { serverError, toggleLoading } from "../../siteAction";
import { toast } from "react-toastify";
import * as types from "../../../types";

export const fetchBoxes =
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
                query: queries.GET_BOXES,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getBoxList.code === 200) {
                    dispatch({
                        type: types.FETCH_BOXES,
                        payload: res.data.getBoxList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchBox =
    (boxId, cb = () => {}) =>
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
                query: queries.GET_BOX,
                variables: {
                    boxId,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getBoxById.code === 200) {
                    dispatch({
                        type: types.FETCH_BOX,
                        payload: res.data.getBoxById.data,
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

export const createBox =
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
                mutation: queries.CREATE_BOX,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.createBox.code === 200) {
                    toast.success("Box created successfully");
                    dispatch({
                        type: types.CREATE_BOX,
                        payload: res.data.createBox.data,
                    });
                    cb();
                } else if (res.data.createBox.code === 400) {
                    toast.error(res.data.createBox.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.createBox.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const updateBox =
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
                mutation: queries.UPDATE_BOX,
                variables: {
                    ...data,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.updateBox.code === 200) {
                    toast.success("Box updated successfully");
                    dispatch({
                        type: types.UPDATE_BOX,
                        payload: res.data.updateBox.data,
                    });
                    cb();
                } else if (res.data.updateBox.code === 400) {
                    toast.error(res.data.updateBox.errors[0].message);
                    dispatch({
                        type: types.SITE_VALIDATE_ERRORS,
                        payload: res.data.updateBox.errors,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const deleteBox = (boxId) => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .mutate({
            context: {
                headers: {
                    authorization: token,
                },
            },
            mutation: queries.DELETE_BOX,
            variables: {
                boxId,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.deleteBox.code === 200) {
                toast.error(res.data.deleteBox.data);
                dispatch({
                    type: types.DELETE_BOX,
                    payload: boxId,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
