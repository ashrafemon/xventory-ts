import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const customerRoutes = [
    {
        path: DashboardUrls.CUSTOMER.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Customers/CustomerList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.CUSTOMER.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Customers/CustomerCreate"),
            suspenseOption
        ),
    },
];

export default customerRoutes;
