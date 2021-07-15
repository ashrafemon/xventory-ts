import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const taxRateRoutes = [
    {
        path: DashboardUrls.SYSTEM.TAX_RATE.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/TaxRates/TaxRateList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SYSTEM.TAX_RATE.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import("./../../pages/Dashboard/System/TaxRates/TaxRateCreate"),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.SYSTEM.TAX_RATE.edit,
    //     layout: DashboardLayout,
    //     component: LazyLoading(
    //         () =>
    //             import("./../../pages/Dashboard/System/TaxRates/TaxRateCreate"),
    //         suspenseOption
    //     ),
    // },
];

export default taxRateRoutes;
