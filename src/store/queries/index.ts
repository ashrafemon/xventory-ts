import {
    LOGIN,
    LOGIN_WITH_STORE,
    PLAN_PURCHASE,
    REGISTER_STORE_ADMIN,
    REQUEST_RESET_PASSWORD,
    RESET_PASSWORD,
    VERIFY_OTP,
    VERIFY_RESET_PASSWORD_OTP,
} from "./authQueries";
import {
    CREATE_BRAND,
    DELETE_BRAND,
    GET_BRAND,
    GET_BRANDS,
    UPDATE_BRAND,
    UPDATE_BRAND_STATUS,
} from "./dashboard/system/brandQueries";
import {
    CREATE_CURRENCY,
    DELETE_CURRENCY,
    GET_CURRENCIES,
    GET_CURRENCY,
    UPDATE_CURRENCY,
    UPDATE_CURRENCY_STATUS,
} from "./dashboard/system/currencyQueries";
import {
    CREATE_PAYMENT_METHOD,
    DELETE_PAYMENT_METHOD,
    GET_PAYMENT_METHOD,
    GET_PAYMENT_METHODS,
    UPDATE_PAYMENT_METHOD,
    UPDATE_PAYMENT_METHOD_STATUS,
} from "./dashboard/system/paymentQueries";
import {
    CREATE_UNIT,
    DELETE_UNIT,
    GET_UNIT,
    GET_UNITS,
    UPDATE_UNIT,
    UPDATE_UNIT_STATUS,
} from "./dashboard/system/unitQueries";
import {
    CREATE_TAX_RATE,
    DELETE_TAX_RATE,
    GET_TAX_RATE,
    GET_TAX_RATES,
    UPDATE_TAX_RATE,
    UPDATE_TAX_RATE_STATUS,
} from "./dashboard/system/taxRateQueries";
import {
    CREATE_BOX,
    DELETE_BOX,
    GET_BOX,
    GET_BOXES,
    UPDATE_BOX,
    UPDATE_BOX_STATUS,
} from "./dashboard/system/boxQueries";
import {
    DELETE_STORE,
    GET_STORE,
    GET_STORES,
    GET_STORES_WITH_PAGINATE,
    UPDATE_STORE,
} from "./dashboard/system/storeQueries";
import {
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    GET_CATEGORY,
    UPDATE_CATEGORY,
} from "./dashboard/product/categoryQueries";
import {
    CREATE_SUPPLIER,
    DELETE_SUPPLIER,
    GET_SUPPLIER,
    GET_SUPPLIERS,
    UPDATE_SUPPLIER,
} from "./dashboard/product/supplierQueries";
import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_SUPPLIER_ID,
    UPDATE_PRODUCT,
} from "./dashboard/product/productQueries";
import {
    CREATE_CUSTOMER,
    DELETE_CUSTOMER,
    GET_CUSTOMER,
    GET_CUSTOMERS,
    UPDATE_CUSTOMER,
} from "./dashboard/customerQueries";
import {
    CREATE_PURCHASE,
    DELETE_PURCHASE,
    GET_PURCHASE,
    GET_PURCHASES,
    UPDATE_PURCHASE,
    UPDATE_PURCHASE_PAYMENT_STATUS,
    UPDATE_PURCHASE_SHIPPING_STATUS,
} from "./dashboard/purchaseQueries";
import {
    CREATE_QUOTATION,
    DELETE_QUOTATION,
    GET_QUOTATION,
    GET_QUOTATIONS,
    UPDATE_QUOTATION,
    UPDATE_QUOTATION_PAYMENT_STATUS,
    UPDATE_QUOTATION_SHIPPING_STATUS,
} from "./dashboard/quotationQueries";
import {
    CREATE_LOAN,
    DELETE_LOAN,
    GET_LOAN,
    GET_LOANS,
    UPDATE_LOAN,
} from "./dashboard/loanQueries";
import {
    CREATE_EXPENSE_CATEGORY,
    DELETE_EXPENSE_CATEGORY,
    GET_EXPENSE_CATEGORY,
    GET_EXPENSE_CATEGORIES,
    UPDATE_EXPENSE_CATEGORY,
} from "./dashboard/expenditure/expenseCategoryQueries";
import {
    CREATE_EXPENSE,
    DELETE_EXPENSE,
    GET_EXPENSE,
    GET_EXPENSES,
    UPDATE_EXPENSE,
} from "./dashboard/expenditure/expenseQueries";
import { GET_CASHIERS } from "./dashboard/cashierQueries";
import {
    ADD_DISTRICT,
    DELETE_DISTRICT,
    GET_DISTRICT,
    GET_DISTRICTS,
    GET_DISTRICTS_BY_DIVISION_ID,
    UPDATE_DISTRICT,
} from "./location/districtQueries";
import {
    ADD_DIVISION,
    DELETE_DIVISION,
    GET_DIVISION,
    GET_DIVISIONS,
    UPDATE_DIVISION,
} from "./location/divisionQueries";
import { GET_POST_OFFICES_BY_SUB_DISTRICT_ID } from "./location/postOfficeQueries";
import { GET_SUB_DISTRICTS_BY_DISTRICT_ID } from "./location/subDistrictQueries";
import { GET_PRICING_PLANS } from "./siteQueries";
import { ADD_STAFF } from "./staffQueries";

const queries = {
    // Auth Queries
    REGISTER_STORE_ADMIN,
    VERIFY_OTP,
    PLAN_PURCHASE,
    LOGIN,
    LOGIN_WITH_STORE,
    REQUEST_RESET_PASSWORD,
    VERIFY_RESET_PASSWORD_OTP,
    RESET_PASSWORD,

    // Cashier
    GET_CASHIERS,

    // Store Queries
    GET_STORES,
    GET_STORES_WITH_PAGINATE,
    GET_STORE,
    UPDATE_STORE,
    DELETE_STORE,

    // Brand Queries
    GET_BRANDS,
    CREATE_BRAND,
    UPDATE_BRAND,
    GET_BRAND,
    UPDATE_BRAND_STATUS,
    DELETE_BRAND,

    // Currency Queries
    CREATE_CURRENCY,
    GET_CURRENCY,
    GET_CURRENCIES,
    UPDATE_CURRENCY,
    UPDATE_CURRENCY_STATUS,
    DELETE_CURRENCY,

    // Payment Queries
    CREATE_PAYMENT_METHOD,
    GET_PAYMENT_METHOD,
    GET_PAYMENT_METHODS,
    UPDATE_PAYMENT_METHOD,
    UPDATE_PAYMENT_METHOD_STATUS,
    DELETE_PAYMENT_METHOD,

    // Unit Queries
    CREATE_UNIT,
    GET_UNIT,
    GET_UNITS,
    UPDATE_UNIT,
    UPDATE_UNIT_STATUS,
    DELETE_UNIT,

    // TaxRate Queries
    CREATE_TAX_RATE,
    GET_TAX_RATE,
    GET_TAX_RATES,
    UPDATE_TAX_RATE,
    UPDATE_TAX_RATE_STATUS,
    DELETE_TAX_RATE,

    // Box Queries
    CREATE_BOX,
    GET_BOX,
    GET_BOXES,
    UPDATE_BOX,
    UPDATE_BOX_STATUS,
    DELETE_BOX,

    // Category Queries
    GET_CATEGORIES,
    GET_CATEGORY,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,

    // Supplier Queries
    GET_SUPPLIERS,
    GET_SUPPLIER,
    CREATE_SUPPLIER,
    UPDATE_SUPPLIER,
    DELETE_SUPPLIER,

    // Product Queries
    GET_PRODUCTS,
    GET_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS_BY_SUPPLIER_ID,

    // Customer Queries
    GET_CUSTOMERS,
    GET_CUSTOMER,
    CREATE_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,

    // Purchase Queries
    GET_PURCHASES,
    GET_PURCHASE,
    CREATE_PURCHASE,
    UPDATE_PURCHASE,
    UPDATE_PURCHASE_SHIPPING_STATUS,
    UPDATE_PURCHASE_PAYMENT_STATUS,
    DELETE_PURCHASE,

    // Quotation Queries
    CREATE_QUOTATION,
    DELETE_QUOTATION,
    GET_QUOTATION,
    GET_QUOTATIONS,
    UPDATE_QUOTATION,
    UPDATE_QUOTATION_PAYMENT_STATUS,
    UPDATE_QUOTATION_SHIPPING_STATUS,

    // Loan Queries
    CREATE_LOAN,
    DELETE_LOAN,
    GET_LOAN,
    GET_LOANS,
    UPDATE_LOAN,

    // Expense Category Queries
    CREATE_EXPENSE_CATEGORY,
    DELETE_EXPENSE_CATEGORY,
    GET_EXPENSE_CATEGORY,
    GET_EXPENSE_CATEGORIES,
    UPDATE_EXPENSE_CATEGORY,

    // Expense Queries
    CREATE_EXPENSE,
    DELETE_EXPENSE,
    GET_EXPENSE,
    GET_EXPENSES,
    UPDATE_EXPENSE,

    // Division Queries
    GET_DIVISION,
    GET_DIVISIONS,
    ADD_DIVISION,
    UPDATE_DIVISION,
    DELETE_DIVISION,

    // District Queries
    GET_DISTRICTS,
    GET_DISTRICTS_BY_DIVISION_ID,
    GET_DISTRICT,
    ADD_DISTRICT,
    UPDATE_DISTRICT,
    DELETE_DISTRICT,

    // Sub District Queries
    GET_SUB_DISTRICTS_BY_DISTRICT_ID,

    // Post Office Queries
    GET_POST_OFFICES_BY_SUB_DISTRICT_ID,

    // Staff Queries
    ADD_STAFF,

    // Pricing Plan
    GET_PRICING_PLANS,
};

export default queries;
