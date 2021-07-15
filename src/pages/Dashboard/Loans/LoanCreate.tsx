import React from "react";
import CreateContent from "../../../components/Dashboard/Loans/Create/CreateContent";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";

const LoanCreate = () => {
    return (
        <DashboardCrudLayout title="Loan Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default LoanCreate;
