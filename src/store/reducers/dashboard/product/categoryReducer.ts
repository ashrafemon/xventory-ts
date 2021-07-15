import * as types from "../../../types";

const initialState = {
    categories: {
        categoryList: [],
    },
    category: {},
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case types.FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };
        case types.CREATE_CATEGORY:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    categoryList: [
                        ...state.categories.categoryList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_CATEGORY:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    categoryList: [
                        ...state.categories.categoryList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_CATEGORY:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    categoryList: state.categories.categoryList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default categoryReducer;
