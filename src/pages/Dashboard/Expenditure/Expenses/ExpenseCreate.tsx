import React from "react";
import CreateContent from "../../../../components/Dashboard/Expenditure/Expenses/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const ExpenseCreate = () => {
    return (
        <DashboardCrudLayout title="Expense Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default ExpenseCreate;
