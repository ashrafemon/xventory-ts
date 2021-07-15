import * as types from "../../../types";

const initialState = {
    units: {
        unitList: [],
    },
    unit: {},
};

const unitReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_UNITS:
            return {
                ...state,
                units: action.payload,
            };
        case types.FETCH_UNIT:
            return {
                ...state,
                unit: action.payload,
            };
        case types.CREATE_UNIT:
            return {
                ...state,
                units: {
                    ...state.units,
                    unitList: [...state.units.unitList, action.payload],
                },
            };
        case types.UPDATE_UNIT:
            return {
                ...state,
                units: {
                    ...state.units,
                    unitList: [
                        ...state.units.unitList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_UNIT:
            return {
                ...state,
                units: {
                    ...state.units,
                    unitList: state.units.unitList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default unitReducer;
