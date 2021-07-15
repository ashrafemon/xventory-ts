import * as types from "../../../types";

const initialState = {
    paymentMethods: {
        paymentMethodList: [],
    },
    paymentMethod: {},
};

const paymentMethodReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PAYMENT_METHODS:
            return {
                ...state,
                paymentMethods: action.payload,
            };
        case types.FETCH_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        case types.CREATE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethods: {
                    ...state.paymentMethods,
                    paymentMethodList: [
                        ...state.paymentMethods.paymentMethodList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethods: {
                    ...state.paymentMethods,
                    paymentMethodList: [
                        ...state.paymentMethods.paymentMethodList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethods: {
                    ...state.paymentMethods,
                    paymentMethodList:
                        state.paymentMethods.paymentMethodList.filter(
                            (item) => item.id !== action.payload
                        ),
                },
            };
        default:
            return state;
    }
};

export default paymentMethodReducer;
