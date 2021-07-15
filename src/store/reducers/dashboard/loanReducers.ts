import * as types from "../../types";

const initialState = {
    loans: {
        loanList: [],
    },
    loan: {},
};

const loanReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_LOANS:
            return {
                ...state,
                loans: action.payload,
            };
        case types.FETCH_LOAN:
            return {
                ...state,
                loan: action.payload,
            };
        case types.CREATE_LOAN:
            return {
                ...state,
                loans: {
                    ...state.loans,
                    loanList: [...state.loans.loanList, action.payload],
                },
            };
        case types.UPDATE_LOAN:
            return {
                ...state,
                loans: {
                    ...state.loans,
                    loanList: [
                        ...state.loans.loanList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_LOAN:
            return {
                ...state,
                loans: {
                    ...state.loans,
                    loanList: state.loans.loanList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default loanReducer;
