import { combineReducers } from "redux";
import authReducer from "./authReducer";
import siteReducer from "./siteReducer";
import locationReducer from "./locationReducer";
import sellReducer from "./sellReducer";
import storeReducer from "./dashboard/system/storeReducer";
import brandReducer from "./dashboard/system/brandReducer";
import currencyReducer from "./dashboard/system/currencyReducer";
import taxRateReducer from "./dashboard/system/taxRateReducer";
import unitReducer from "./dashboard/system/unitReducer";
import paymentMethodReducer from "./dashboard/system/paymentMethodReducer";
import boxReducer from "./dashboard/system/boxReducer";
import cashierReducer from "./dashboard/cashierReducer";
import categoryReducer from "./dashboard/product/categoryReducer";
import supplierReducer from "./dashboard/product/supplierReducer";
import productReducer from "./dashboard/product/productReducer";
import customerReducer from "./dashboard/customerReducer";
import purchaseReducer from "./dashboard/purchaseReducer";
import quotationReducer from "./dashboard/quotationReducer";
import loanReducers from "./dashboard/loanReducers";
import expenseCategoryReducer from "./dashboard/expenditure/expenseCategoryReducer";
import expenseReducer from "./dashboard/expenditure/expenseReducer";

const rootReducers = combineReducers({
    auth: authReducer,
    site: siteReducer,
    location: locationReducer,

    // Dashboard Reducers
    stores: storeReducer,
    sell: sellReducer,
    cashiers: cashierReducer,

    // Dashboard System Reducers
    brands: brandReducer,
    currencies: currencyReducer,
    taxRates: taxRateReducer,
    units: unitReducer,
    paymentMethods: paymentMethodReducer,
    boxes: boxReducer,

    // Dashboard Product Reducers
    categories: categoryReducer,
    suppliers: supplierReducer,
    products: productReducer,
    customers: customerReducer,
    purchases: purchaseReducer,
    quotations: quotationReducer,
    loans: loanReducers,

    // expenditure
    expenseCategories: expenseCategoryReducer,
    expenses: expenseReducer,
});

export default rootReducers;
