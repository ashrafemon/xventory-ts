import * as types from "../../types";

const initialState = {
    purchases: {
        purchaseList: [],
    },
    purchase: {},
    purchaseForm: {
        date: "",
        referenceNo: "",
        note: "",
        supplier: null,
        purchaseCartInformationList: [],
        orderTax: 0,
        shippingCharge: 0,
        othersCharge: 0,
        discount: 0,
        attachmentLists: [],
        purchasePaymentInformationList: [],
    },
};

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PURCHASES:
            return {
                ...state,
                purchases: action.payload,
            };
        case types.FETCH_PURCHASE:
            return {
                ...state,
                purchase: action.payload,
                purchaseForm: action.payload,
            };
        case types.CREATE_PURCHASE:
            return {
                ...state,
                purchases: {
                    ...state.purchases,
                    purchaseList: [
                        ...state.purchases.purchaseList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_PURCHASE:
            return {
                ...state,
                purchases: {
                    ...state.purchases,
                    purchaseList: [
                        ...state.purchases.purchaseList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_PURCHASE:
            return {
                ...state,
                purchases: {
                    ...state.purchases,
                    purchaseList: state.purchases.purchaseList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        case types.SET_PURCHASE_FORM:
            return {
                ...state,
                purchaseForm: {
                    ...state.purchaseForm,
                    [action.payload.field]: action.payload.value,
                },
            };
        case types.RESET_PURCHASE_FORM:
            return {
                ...state,
                purchaseForm: {
                    date: "",
                    referenceNo: "",
                    note: "",
                    supplier: null,
                    purchaseCartInformationList: [],
                    orderTax: 0,
                    shippingCharge: 0,
                    othersCharge: 0,
                    discount: 0,
                    attachmentLists: [],
                    purchasePaymentInformationList: [],
                },
            };
        default:
            return state;
    }
};

export default purchaseReducer;
