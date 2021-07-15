import React from "react";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";
import { DashboardUrls } from "../../constants/urls";
import PosLayout from "../../layouts/PosLayout";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: PosLayout,
};

const posRoutes = [
    {
        path: DashboardUrls.POS,
        layout: PosLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("./../../pages/Dashboard/Pos/PosList"),
            suspenseOption
        ),
    },
    // {
    //     path: DashboardUrls.PRODUCT.PRODUCTS.create,
    //     layout: PosLayout,
    //     meta: { requiresAuth: true },
    //     component: LazyLoading(
    //         () =>
    //             import(
    //                 "./../../pages/Dashboard/Product/Products/ProductCreate"
    //             ),
    //         suspenseOption
    //     ),
    // },
];

export default posRoutes;
