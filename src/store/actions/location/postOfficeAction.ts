import {client} from "../../gqlConfig";
import queries from "../../queries";
import * as types from "../../types";
import {toggleLoading} from "../siteAction";

export const fetchPostOfficesBySubDistrictId =
    (subDistrictId, size = 10, offset = 0) =>
        (dispatch) => {
            dispatch(toggleLoading(true));

            client
                .query({
                    query: queries.GET_POST_OFFICES_BY_SUB_DISTRICT_ID,
                    variables: {
                        subDistrictId,
                        size,
                        offset
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.getPostOfficeListBySubDistrictId.code === 200) {
                        dispatch({
                            type: types.FETCH_POST_OFFICES,
                            payload: res.data.getPostOfficeListBySubDistrictId.data,
                        });
                    }
                    dispatch(toggleLoading(false));
                })
                .catch((err) => {
                    console.log(err);
                    dispatch(toggleLoading(false));
                });
        };
