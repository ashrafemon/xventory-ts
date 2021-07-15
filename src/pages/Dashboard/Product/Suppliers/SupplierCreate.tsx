import React from "react";
import CreateContent from "../../../../components/Dashboard/Product/Suppliers/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const SupplierCreate = () => {
    return (
        <DashboardCrudLayout title="Supplier Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default SupplierCreate;
