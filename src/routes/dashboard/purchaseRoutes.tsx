import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const purchaseRoutes = [
    {
        path: DashboardUrls.PURCHASE.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Purchases/PurchaseList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.PURCHASE.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Purchases/PurchaseCreate"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.PURCHASE.edit,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Purchases/PurchaseCreate"),
            suspenseOption
        ),
    },
];

export default purchaseRoutes;
