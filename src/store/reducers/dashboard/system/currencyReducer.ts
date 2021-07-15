import * as types from "../../../types";

const initialState = {
    currencies: {
        currencyList: [],
    },
    currency: {},
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CURRENCIES:
            return {
                ...state,
                currencies: action.payload,
            };
        case types.FETCH_CURRENCY:
            return {
                ...state,
                currency: action.payload,
            };
        case types.CREATE_CURRENCY:
            return {
                ...state,
                currencies: {
                    currencyList: [
                        ...state.currencies.currencyList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_CURRENCY:
            return {
                ...state,
                currencies: {
                    ...state.currencies,
                    currencyList: [
                        ...state.currencies.currencyList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_CURRENCY:
            return {
                ...state,
                currencies: {
                    ...state.currencies,
                    currencyList: state.currencies.currencyList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default currencyReducer;
