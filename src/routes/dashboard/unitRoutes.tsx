import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const unitRoutes = [
    {
        path: DashboardUrls.SYSTEM.UNIT.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Units/UnitList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SYSTEM.UNIT.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Units/UnitCreate"),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.SYSTEM.UNIT.edit,
    //     layout: DashboardLayout,
    //     component: LazyLoading(
    //         () => import("./../../pages/Dashboard/System/Units/UnitCreate"),
    //         suspenseOption
    //     ),
    // },
];

export default unitRoutes;
