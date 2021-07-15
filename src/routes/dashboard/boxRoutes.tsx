import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const boxRoutes = [
    {
        path: DashboardUrls.SYSTEM.BOX.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Boxes/BoxList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SYSTEM.BOX.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Boxes/BoxCreate"),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.SYSTEM.BOX.edit,
    //     layout: DashboardLayout,
    //     component: LazyLoading(
    //         () => import("./../../pages/Dashboard/System/Boxes/BoxCreate"),
    //         suspenseOption
    //     ),
    // },
];

export default boxRoutes;
