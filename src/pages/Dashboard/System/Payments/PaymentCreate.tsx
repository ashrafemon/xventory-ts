import React from "react";
import CreateContent from "../../../../components/Dashboard/System/Payments/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const PaymentCreate = () => {
    return (
        <DashboardCrudLayout title="Payment Gateway Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default PaymentCreate;
