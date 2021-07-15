import * as types from "../../../types";

const initialState = {
    suppliers: {
        supplierList: [],
    },
    supplier: {},
};

const supplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload,
            };
        case types.FETCH_SUPPLIER:
            return {
                ...state,
                supplier: action.payload,
            };
        case types.CREATE_SUPPLIER:
            return {
                ...state,
                suppliers: {
                    ...state.suppliers,
                    supplierList: [
                        ...state.suppliers.supplierList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_SUPPLIER:
            return {
                ...state,
                suppliers: {
                    ...state.suppliers,
                    supplierList: [
                        ...state.suppliers.supplierList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_SUPPLIER:
            return {
                ...state,
                suppliers: {
                    ...state.suppliers,
                    supplierList: state.suppliers.supplierList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default supplierReducer;
