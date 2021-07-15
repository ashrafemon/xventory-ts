import * as types from "../../../types";

const initialState = {
    expenses: {
        expenseList: [],
    },
    expense: {},
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_EXPENSES:
            return {
                ...state,
                expenses: action.payload,
            };
        case types.FETCH_EXPENSE:
            return {
                ...state,
                expenseCategory: action.payload,
            };
        case types.CREATE_EXPENSE:
            return {
                ...state,
                expenses: {
                    ...state.expenses,
                    expenseList: [
                        ...state.expenses.expenseList,
                        action.payload,
                    ],
                },
            };
        case types.UPDATE_EXPENSE:
            return {
                ...state,
                expenses: {
                    ...state.expenses,
                    expenseList: [
                        ...state.expenses.expenseList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_EXPENSE:
            return {
                ...state,
                expenseCategories: {
                    ...state.expenses,
                    expenseList: state.expenses.expenseList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default expenseReducer;
