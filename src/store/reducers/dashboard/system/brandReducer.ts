import * as types from "../../../types";

const initialState = {
    brands: {
        brandList: [],
    },
    brand: {},
};

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_BRANDS:
            return {
                ...state,
                brands: action.payload,
            };
        case types.FETCH_BRAND:
            return {
                ...state,
                brand: action.payload,
            };
        case types.CREATE_BRAND:
            return {
                ...state,
                brands: {
                    brandList: [...state.brands.brandList, action.payload],
                },
            };
        case types.UPDATE_BRAND:
            return {
                ...state,
                brands: {
                    ...state.brands,
                    brandList: [
                        ...state.brands.brandList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_BRAND:
            return {
                ...state,
                brands: {
                    ...state.brands,
                    brandList: state.brands.brandList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default brandReducer;
