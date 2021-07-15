import * as types from "../../types";

const initialState = {
    quotations: {
        quotationList: [],
    },
    quotation: {},
    quotationForm: {
        date: "",
        referenceNo: "",
        note: "",
        supplier: null,
        customer: null,
        quotationStatus: "SENT",
        quotationCartInformationList: [],
        orderTax: 0,
        shippingCharge: 0,
        othersCharge: 0,
        discount: 0,
    },
};

const quotationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_QUOTATIONS:
            return {
                ...state,
                quotations: action.payload,
            };
        case types.FETCH_QUOTATION:
            return {
                ...state,
                quotation: action.payload,
                quotationForm: action.payload,
            };
        case types.CREATE_QUOTATION:
            return {
                ...state,
                quotations: {
                    ...state.quotations,
                    quotationList: [
                        ...state.quotations.quotationList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_QUOTATION:
            return {
                ...state,
                quotations: {
                    ...state.quotations,
                    quotationList: [
                        ...state.quotations.quotationList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_QUOTATION:
            return {
                ...state,
                quotations: {
                    ...state.quotations,
                    quotationList: state.quotations.quotationList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        case types.SET_QUOTATION_FORM:
            return {
                ...state,
                quotationForm: {
                    ...state.quotationForm,
                    [action.payload.field]: action.payload.value,
                },
            };
        case types.RESET_QUOTATION_FORM:
            return {
                ...state,
                quotationForm: {
                    date: "",
                    referenceNo: "",
                    note: "",
                    supplier: null,
                    customer: null,
                    quotationStatus: "SENT",
                    quotationCartInformationList: [],
                    orderTax: 0,
                    shippingCharge: 0,
                    othersCharge: 0,
                    discount: 0,
                },
            };
        default:
            return state;
    }
};

export default quotationReducer;
