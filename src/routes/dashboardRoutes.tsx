import React from "react";
import { DashboardUrls } from "../constants/urls";
import DashboardLayout from "../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../components/shared/Router/LazyLoading";
import storeRoutes from "./dashboard/storeRoutes";
import brandRoutes from "./dashboard/brandRoutes";
import currencyRoutes from "./dashboard/currencyRoutes";
import paymentRoutes from "./dashboard/paymentRoutes";
import unitRoutes from "./dashboard/unitRoutes";
import boxRoutes from "./dashboard/boxRoutes";
import taxRateRoutes from "./dashboard/taxRateRoutes";
import categoryRoutes from "./dashboard/categoryRoutes";
import supplierRoutes from "./dashboard/supplierRoutes";
import productRoutes from "./dashboard/productRoutes";
import customerRoutes from "./dashboard/customerRoutes";
import purchaseRoutes from "./dashboard/purchaseRoutes";
import quotationRoutes from "./dashboard/quotationRoutes";
import PosLayout from "../layouts/PosLayout";
import posRoutes from "./dashboard/posRoutes";
import loanRoutes from "./dashboard/loanRoutes";
import expenseRoutes from "./dashboard/expenseRoutes";
import expenseCategoryRoutes from "./dashboard/expenseCategoryRoutes";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const dashboardRoutes = [
    {
        path: DashboardUrls.HOME,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("../pages/Dashboard/Home"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SELL,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("../pages/Dashboard/SellList"),
            suspenseOption
        ),
    },

    ...storeRoutes,
    ...brandRoutes,
    ...currencyRoutes,
    ...paymentRoutes,
    ...unitRoutes,
    ...boxRoutes,
    ...taxRateRoutes,

    ...categoryRoutes,
    ...supplierRoutes,
    ...productRoutes,
    ...customerRoutes,
    ...purchaseRoutes,
    ...quotationRoutes,
    ...loanRoutes,
    ...expenseRoutes,
    ...expenseCategoryRoutes,

    ...posRoutes,
];

export default dashboardRoutes;
