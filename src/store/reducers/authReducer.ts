import * as types from "../types";

const initialState = {
    token: null,
    isAuthenticate: false,
    currentUser: null,
    isTokenExpire: true,
    registerComplete: false,
    registeredUser: {},
    selectedPlan: {},
    planPurchaseForm: false,
    paymentLink: null,
    validateErrors: [],
    resetUser: {},
    resetOTPForm: false,
    newPasswordForm: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
            };
        case types.SET_LOGIN_USER:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                isTokenExpire: action.payload.isTokenExpire,
            };
        case types.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticate: action.payload.isAuthenticate,
                token: action.payload.token,
                currentUser: action.payload.currentUser,
                isTokenExpire: action.payload.isTokenExpire,
            };
        case types.SET_REGISTER:
            return {
                ...state,
                registerComplete: action.payload,
            };
        case types.FETCH_REGISTER_USER:
            return {
                ...state,
                registeredUser: action.payload,
            };
        case types.VERIFY_USER:
            return {
                ...state,
                registeredUser: action.payload,
            };
        case types.TOGGLE_PURCHASE_MODAL:
            return {
                ...state,
                planPurchaseForm: true,
            };
        case types.CREATE_PLAN_PURCHASE_LINK:
            return {
                ...state,
                paymentLink: action.payload,
            };
        case types.VALIDATE_ERRORS:
            return {
                ...state,
                validateErrors: action.payload,
            };
        case types.SELECT_PLAN:
            return {
                ...state,
                selectedPlan: action.payload,
            };
        case types.REQUEST_RESET_PASSWORD:
            return {
                ...state,
                resetUser: action.payload.resetUser,
                resetOTPForm: action.payload.resetOTPForm,
            };
        case types.VERIFY_RESET_PASSWORD_OTP:
            return {
                ...state,
                resetUser: action.payload.resetUser,
                resetOTPForm: action.payload.resetOTPForm,
                newPasswordForm: action.payload.newPasswordForm,
            };
        case types.RESET_PASSWORD:
            return {
                ...state,
                resetUser: action.payload.resetUser,
                resetOTPForm: action.payload.resetOTPForm,
                newPasswordForm: action.payload.newPasswordForm,
            };
        case types.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                currentUser: null,
                isTokenExpire: true,
                registerComplete: false,
                registeredUser: {},
                selectedPlan: {},
                planPurchaseForm: false,
                paymentLink: null,
                validateErrors: [],
                resetUser: {},
                resetOTPForm: false,
                newPasswordForm: false,
            };
        default:
            return state;
    }
};

export default authReducer;
