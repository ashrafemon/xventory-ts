import queries from "../../queries";
import { client } from "./../../gqlConfig";
import { serverError, toggleLoading } from "./../siteAction";
import * as types from "./../../types";

export const fetchCashiers = () => (dispatch) => {
    dispatch(toggleLoading(true));
    let token = localStorage.getItem("authToken") || "";

    client
        .query({
            context: {
                headers: {
                    authorization: token,
                },
            },
            query: queries.GET_CASHIERS,
            variables: {
                userType: "CASHIER",
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.getAllUserListByUserType.code === 200) {
                dispatch({
                    type: types.FETCH_CASHIERS,
                    payload: res.data.getAllUserListByUserType.data,
                });
            }
            dispatch(toggleLoading(false));
        })
        .catch((err) => {
            console.log(err);
            serverError();
        });
};
