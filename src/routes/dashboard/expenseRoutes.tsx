import React from "react";
import { DashboardUrls } from "../../constants/urls";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: DashboardLayout,
};

const expenseRoutes = [
    {
        path: DashboardUrls.EXPENDITURE.EXPENSES.index,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "../../pages/Dashboard/Expenditure/Expenses/ExpenseList"
                ),
            suspenseOption
        ),
    },
    {
        path: DashboardUrls.EXPENDITURE.EXPENSES.create,
        layout: DashboardLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () =>
                import(
                    "../../pages/Dashboard/Expenditure/Expenses/ExpenseCreate"
                ),
            suspenseOption
        ),
    },
];

export default expenseRoutes;
