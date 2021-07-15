import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const categoryRoutes = [
    {
        path: DashboardUrls.PRODUCT.CATEGORIES.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import("../../pages/Dashboard/Product/Categories/CategoryList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.PRODUCT.CATEGORIES.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "../../pages/Dashboard/Product/Categories/CategoryCreate"
                ),
            suspenseOption
        ),
    },
];

export default categoryRoutes;
