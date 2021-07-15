import * as types from "../../../types";

const initialState = {
    boxes: {
        boxList: [],
    },
    box: {},
};

const boxReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_BOXES:
            return {
                ...state,
                boxes: action.payload,
            };
        case types.FETCH_BOX:
            return {
                ...state,
                box: action.payload,
            };
        case types.CREATE_BOX:
            return {
                ...state,
                boxes: {
                    ...state.boxes,
                    boxList: [...state.boxes.boxList, action.payload],
                },
            };
        case types.UPDATE_BOX:
            return {
                ...state,
                boxes: {
                    ...state.boxes,
                    boxList: [
                        ...state.boxes.boxList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_BOX:
            return {
                ...state,
                boxes: {
                    ...state.boxes,
                    boxList: state.boxes.boxList.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export default boxReducer;
