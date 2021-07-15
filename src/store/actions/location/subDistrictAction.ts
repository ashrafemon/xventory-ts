import {client} from "../../gqlConfig";
import queries from "../../queries";
import * as types from "../../types";
import {toggleLoading} from "../siteAction";

export const fetchSubDistrictsByDistrictId =
    (districtId, size = 10, offset = 0) =>
        (dispatch) => {
            dispatch(toggleLoading(true));

            client
                .query({
                    query: queries.GET_SUB_DISTRICTS_BY_DISTRICT_ID,
                    variables: {
                        districtId,
                        size,
                        offset
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.getSubDistrictListByDistrictId.code === 200) {
                        dispatch({
                            type: types.FETCH_SUB_DISTRICTS,
                            payload: res.data.getSubDistrictListByDistrictId.data,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    dispatch(toggleLoading(false));
                });
        };
