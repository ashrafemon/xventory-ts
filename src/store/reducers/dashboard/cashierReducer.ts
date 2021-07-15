import * as types from "./../../types";

const initialState = {
    cashiers: {
        userList: [],
    },
};

const cashierReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CASHIERS:
            return {
                ...state,
                cashiers: action.payload,
            };
        default:
            return state;
    }
};

export default cashierReducer;
