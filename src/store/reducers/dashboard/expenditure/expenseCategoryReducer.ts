import * as types from "../../../types";

const initialState = {
    expenseCategories: {
        expenseCategoryList: [],
    },
    expenseCategory: {},
};

const expenseCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_EXPENSE_CATEGORIES:
            return {
                ...state,
                expenseCategories: action.payload,
            };
        case types.FETCH_EXPENSE_CATEGORY:
            return {
                ...state,
                expenseCategory: action.payload,
            };
        case types.CREATE_EXPENSE_CATEGORY:
            return {
                ...state,
                expenseCategories: {
                    ...state.expenseCategories,
                    expenseCategoryList: [
                        ...state.expenseCategories.expenseCategoryList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_EXPENSE_CATEGORY:
            return {
                ...state,
                expenseCategories: {
                    ...state.expenseCategories,
                    expenseCategoryList: [
                        ...state.expenseCategories.expenseCategoryList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_EXPENSE_CATEGORY:
            return {
                ...state,
                expenseCategories: {
                    ...state.expenseCategories,
                    expenseCategoryList:
                        state.expenseCategories.expenseCategoryList.filter(
                            (item) => item.id !== action.payload
                        ),
                },
            };
        default:
            return state;
    }
};

export default expenseCategoryReducer;
