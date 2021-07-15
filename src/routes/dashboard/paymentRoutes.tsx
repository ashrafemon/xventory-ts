import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const paymentRoutes = [
    {
        path: DashboardUrls.SYSTEM.PAYMENT.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/System/Payments/PaymentList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SYSTEM.PAYMENT.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import("./../../pages/Dashboard/System/Payments/PaymentCreate"),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.SYSTEM.PAYMENT.edit,
    //     layout: DashboardLayout,
    //     component: LazyLoading(
    //         () =>
    //             import("./../../pages/Dashboard/System/Payments/PaymentCreate"),
    //         suspenseOption
    //     ),
    // },
];

export default paymentRoutes;
