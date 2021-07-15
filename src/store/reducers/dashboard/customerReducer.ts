import * as types from "../../types";

const initialState = {
    customers: {
        customerList: [],
    },
    customer: {},
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
            };
        case types.FETCH_CUSTOMER:
            return {
                ...state,
                customer: action.payload,
            };
        case types.CREATE_CUSTOMER:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    customerList: [
                        ...state.customers.customerList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_CUSTOMER:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    customerList: [
                        ...state.customers.customerList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_CUSTOMER:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    customerList: state.customers.customerList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default customerReducer;
