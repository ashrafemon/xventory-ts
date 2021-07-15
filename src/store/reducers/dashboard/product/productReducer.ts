import * as types from "../../../types";

const initialState = {
    products: {
        productList: [],
    },
    product: {},
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case types.FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };
        case types.CREATE_PRODUCT:
            return {
                ...state,
                products: {
                    ...state.products,
                    productList: [
                        ...state.products.productList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_PRODUCT:
            return {
                ...state,
                products: {
                    ...state.products,
                    productList: [
                        ...state.products.productList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_PRODUCT:
            return {
                ...state,
                products: {
                    ...state.products,
                    productList: state.products.productList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default productReducer;
