import React from "react";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const storeRoutes = [
    {
        path: DashboardUrls.SYSTEM.STORE.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Stores/StoreList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SYSTEM.STORE.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Stores/StoreCreate"),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.SYSTEM.STORE.edit,
    //     layout: DashboardLayout,
    //     component: LazyLoading(
    //         () => import("./../../pages/Dashboard/System/Stores/StoreCreate"),
    //         suspenseOption
    //     ),
    // },
    {
        path: DashboardUrls.SYSTEM.STORE.setting,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Stores/StoreSetting"),
            suspenseOption
        ),
    },
];

export default storeRoutes;
