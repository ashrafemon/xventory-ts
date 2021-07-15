import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const supplierRoutes = [
    {
        path: DashboardUrls.SUPPLIERS.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import("../../pages/Dashboard/Product/Suppliers/SupplierList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.SUPPLIERS.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "../../pages/Dashboard/Product/Suppliers/SupplierCreate"
                ),
            suspenseOption
        ),
    },
];

export default supplierRoutes;
