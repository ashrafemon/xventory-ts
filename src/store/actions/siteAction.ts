import * as types from "../types";
import { client } from "../gqlConfig";
import queries from "../queries";
import { toast } from "react-toastify";

export const toggleLoading = (status) => ({
    type: types.TOGGLE_LOADING,
    payload: status,
});

export const toggleNotification = (data) => ({
    type: types.TOGGLE_NOTIFICATION,
    payload: data,
});

export const serverError = () => (dispatch) => {
    toast.error("Something went wrong...");
    dispatch(toggleLoading(false));
};

export const toggleCrudDialog = (payload) => ({
    type: types.TOGGLE_DIALOG,
    payload,
});

export const fetchPricingPlans =
    (size = 10, offset = 0) =>
    (dispatch) => {
        dispatch(toggleLoading(true));

        client
            .query({
                query: queries.GET_PRICING_PLANS,
                variables: {
                    size,
                    offset,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.getPricingPlanList.code === 200) {
                    dispatch({
                        type: types.FETCH_PRICING_PLANS,
                        payload: res.data.getPricingPlanList.data,
                    });
                }
                dispatch(toggleLoading(false));
            })
            .catch((err) => {
                console.log(err);
                serverError();
            });
    };

export const fetchTimeZones = () => (dispatch) => {
    fetch(
        `${process.env.REACT_APP_TIMEZONE_URL}?key=${process.env.REACT_APP_TIMEZONE_API_KEY}&format=json`
    )
        .then((res) => res.json())
        .then((res) => {
            console.log(res);

            if (res.status === "OK") {
                let zones = [];
                res.zones.forEach((item) => {
                    zones.push({ text: item.zoneName, value: item.zoneName });
                });

                dispatch({
                    type: types.FETCH_TIMEZONES,
                    payload: zones,
                });
            }
        })
        .catch((err) => console.log(err));
};
