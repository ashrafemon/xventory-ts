export const LandingUrls = {
    HOME: "/",
    ABOUT: "/about-us",
    CONTACT: "/contact-us",
    PRICING: "/pricing-plan",
    LOGIN: "/sign-in",
    REGISTER: "/sign-up",
    FORGET: "/forget",
    TERMS: "/terms",
    POLICY: "/policy",
    FAQ: "/faq",
    PAYMENT_STATUS: "/payment/:status",
    STORE_SELECT: "/select-store",
};

export const DashboardUrls = {
    HOME: "/store/:storeId/dashboard",
    SELL: "/store/:storeId/sell",
    POS: "/store/:storeId/pos",
    CUSTOMER: {
        index: "/store/:storeId/customers",
        create: "/store/:storeId/customers/create",
    },
    PURCHASE: {
        index: "/store/:storeId/purchases",
        create: "/store/:storeId/purchases/create",
        edit: "/store/:storeId/purchases/edit/:id",
    },
    QUOTATION: {
        index: "/store/:storeId/quotations",
        create: "/store/:storeId/quotations/create",
        edit: "/store/:storeId/quotations/edit/:id",
    },
    PRODUCT: {
        PRODUCTS: {
            index: "/store/:storeId/products",
            create: "/store/:storeId/products/create",
        },
        CATEGORIES: {
            index: "/store/:storeId/categories",
            create: "/store/:storeId/categories/create",
        },
    },
    SUPPLIERS: {
        index: "/store/:storeId/suppliers",
        create: "/store/:storeId/suppliers/create",
    },
    LOANS: {
        index: "/store/:storeId/loans",
        create: "/store/:storeId/loans/create",
    },
    EXPENDITURE: {
        EXPENSES: {
            index: "/store/:storeId/expenses",
            create: "/store/:storeId/expenses/create",
        },
        EXPENSE_CATEGORIES: {
            index: "/store/:storeId/expense-categories",
            create: "/store/:storeId/expense-categories/create",
        },
    },
    SYSTEM: {
        STORE: {
            index: "/store/:storeId/stores",
            create: "/store/:storeId/stores/create",
            setting: "/store/:storeId/stores/setting",
        },
        BRAND: {
            index: "/store/:storeId/brands",
            create: "/store/:storeId/brands/create",
        },
        CURRENCY: {
            index: "/store/:storeId/currencies",
            create: "/store/:storeId/currencies/create",
        },
        PAYMENT: {
            index: "/store/:storeId/payments",
            create: "/store/:storeId/payments/create",
        },
        UNIT: {
            index: "/store/:storeId/units",
            create: "/store/:storeId/units/create",
        },
        TAX_RATE: {
            index: "/store/:storeId/tax-rates",
            create: "/store/:storeId/tax-rates/create",
        },
        BOX: {
            index: "/store/:storeId/boxes",
            create: "/store/:storeId/boxes/create",
        },
    },
};
