import sidebarMenu from "../../constants/sidebarMenu";
import stores from "../../constants/stores";
import * as types from "../types";

const initialState = {
    menuList: sidebarMenu,
    stores: stores,
    sidebarShow: true,
    pricingPlans: [],
    loading: false,
    errors: null,
    notification: {
        display: false,
        type: null,
        text: "",
        title: "",
    },
    validateErrors: [],
    crudDialog: {
        open: false,
        type: "",
    },
    timeZones: [],
};

const siteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRICING_PLANS:
            return {
                ...state,
                pricingPlans: action.payload,
            };
        case types.TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarShow: action.payload,
            };
        case types.TOGGLE_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case types.TOGGLE_NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
            };
        case types.SITE_VALIDATE_ERRORS:
            return {
                ...state,
                validateErrors: action.payload,
            };
        case types.TOGGLE_DIALOG:
            return {
                ...state,
                crudDialog: action.payload,
            };
        case types.FETCH_TIMEZONES:
            return {
                ...state,
                timeZones: action.payload,
            };
        default:
            return state;
    }
};

export default siteReducer;
