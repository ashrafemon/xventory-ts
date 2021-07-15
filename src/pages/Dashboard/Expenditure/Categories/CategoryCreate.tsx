import React from "react";
import CreateContent from "../../../../components/Dashboard/Expenditure/Categories/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const ExpenseCategoryCreate = () => {
    return (
        <DashboardCrudLayout title="Expense Category Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default ExpenseCategoryCreate;
