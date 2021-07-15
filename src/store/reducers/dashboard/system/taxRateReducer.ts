import * as types from "../../../types";

const initialState = {
    taxRates: {
        taxRateList: [],
    },
    taxRate: {},
};

const taxRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TAX_RATES:
            return {
                ...state,
                taxRates: action.payload,
            };
        case types.FETCH_TAX_RATE:
            return {
                ...state,
                taxRate: action.payload,
            };
        case types.CREATE_TAX_RATE:
            return {
                ...state,
                taxRates: {
                    ...state.taxRates,
                    taxRateList: [
                        ...state.taxRates.taxRateList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_TAX_RATE:
            return {
                ...state,
                taxRates: {
                    ...state.taxRates,
                    taxRateList: [
                        ...state.taxRates.taxRateList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_TAX_RATE:
            return {
                ...state,
                taxRates: {
                    ...state.taxRates,
                    taxRateList: state.taxRates.taxRateList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default taxRateReducer;
