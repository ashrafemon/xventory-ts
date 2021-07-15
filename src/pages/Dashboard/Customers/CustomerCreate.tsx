import React from "react";
import CreateContent from "../../../components/Dashboard/Customers/Create/CreateContent";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";

const CustomerCreate = () => {
    return (
        <DashboardCrudLayout title="Customer Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default CustomerCreate;
