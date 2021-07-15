import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const productRoutes = [
    {
        path: DashboardUrls.PRODUCT.PRODUCTS.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import("./../../pages/Dashboard/Product/Products/ProductList"),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.PRODUCT.PRODUCTS.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "./../../pages/Dashboard/Product/Products/ProductCreate"
                ),
            suspenseOption
        ),
    },
];

export default productRoutes;
