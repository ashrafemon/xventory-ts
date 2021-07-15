import * as types from "../../../types";

const initialState = {
    stores: {
        storeList: [],
    },
    store: {},
    selectedStore: null,
};

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_STORES:
            return {
                ...state,
                stores: action.payload,
            };
        case types.FETCH_STORE:
            return {
                ...state,
                store: action.payload,
            };
        case types.UPDATE_STORE:
            return {
                ...state,
                stores: {
                    ...state.stores,
                    storeList: [
                        ...state.stores.storeList.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };
        case types.DELETE_STORE:
            return {
                ...state,
                stores: {
                    ...state.stores,
                    storeList: [
                        ...state.stores.storeList.filter(
                            (item) => item.id !== action.payload
                        ),
                    ],
                },
            };
        case types.SET_STORE:
            return {
                ...state,
                selectedStore: action.payload,
            };
        default:
            return state;
    }
};

export default storeReducer;
