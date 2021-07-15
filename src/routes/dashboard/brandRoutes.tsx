import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const brandRoutes = [
    {
        path: DashboardUrls.SYSTEM.BRAND.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Brands/BrandList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SYSTEM.BRAND.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Brands/BrandCreate"),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.SYSTEM.BRAND.edit,
    //     layout: DashboardLayout,
    //     component: LazyLoading(
    //         () => import("./../../pages/Dashboard/System/Brands/BrandCreate"),
    //         suspenseOption
    //     ),
    // },
];

export default brandRoutes;
