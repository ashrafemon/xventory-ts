import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const quotationRoutes = [
    {
        path: DashboardUrls.QUOTATION.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Quotations/QuotationList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.QUOTATION.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Quotations/QuotationCreate"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.QUOTATION.edit,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Quotations/QuotationCreate"),
            suspenseOption
        ),
    },
];

export default quotationRoutes;
