import * as types from "../types";

const initialState = {
    divisions: {
        divisionList: [],
    },
    division: {},
    districts: {
        districtList: [],
    },
    district: {},
    subDistricts: {
        subDistrictList: [],
    },
    subDistrict: {},
    postOffices: {
        postOfficeList: [],
    },
    postOffice: {},
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DIVISIONS:
            return {
                ...state,
                divisions: action.payload,
            };
        case types.FETCH_DIVISION:
            return {
                ...state,
                division: action.payload,
            };
        case types.UPDATE_DIVISION:
            return {
                ...state,
                division: action.payload,
            };
        case types.DELETE_DIVISION:
            return {
                ...state,
                divisions: {
                    ...state.divisions,
                    // divisionList: state.divisions.divisionList.filter(
                    //     (item) => item.id !== action.payload
                    // ),
                },
            };
        case types.FETCH_DISTRICTS:
            return {
                ...state,
                districts: action.payload,
            };
        case types.FETCH_DISTRICT:
            return {
                ...state,
                district: action.payload,
            };
        case types.UPDATE_DISTRICT:
            return {
                ...state,
                district: action.payload,
            };
        case types.DELETE_DISTRICT:
            return {
                ...state,
                districts: {
                    ...state.districts,
                    // districtList: state.districts.districtList.filter(
                    //     (item) => item.id !== action.payload
                    // ),
                },
            };
        case types.FETCH_SUB_DISTRICTS:
            return {
                ...state,
                subDistricts: action.payload,
            };
        case types.FETCH_POST_OFFICES:
            return {
                ...state,
                postOffices: action.payload,
            };
        default:
            return state;
    }
};

export default locationReducer;
