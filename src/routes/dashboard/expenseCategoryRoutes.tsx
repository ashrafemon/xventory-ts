import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const expenseCategoryRoutes = [
    {
        path: DashboardUrls.EXPENDITURE.EXPENSE_CATEGORIES.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "../../pages/Dashboard/Expenditure/Categories/CategoryList"
                ),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.EXPENDITURE.EXPENSE_CATEGORIES.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "../../pages/Dashboard/Expenditure/Categories/CategoryCreate"
                ),
            suspenseOption
        ),
    },
];

export default expenseCategoryRoutes;
