import React from "react";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const currencyRoutes = [
    {
        path: DashboardUrls.SYSTEM.CURRENCY.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "./../../pages/Dashboard/System/Currencies/CurrencyList"
                ),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SYSTEM.CURRENCY.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "./../../pages/Dashboard/System/Currencies/CurrencyCreate"
                ),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.SYSTEM.CURRENCY.create,
    //     layout: DashboardLayout,
    //     component: LazyLoading(
    //         () =>
    //             import(
    //                 "./../../pages/Dashboard/System/Currencies/CurrencyCreate"
    //             ),
    //         suspenseOption
    //     ),
    // },
];

export default currencyRoutes;
