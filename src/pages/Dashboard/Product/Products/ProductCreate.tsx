import React from "react";
import CreateContent from "../../../../components/Dashboard/Product/Products/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const BoxCreate = () => {
    return (
        <DashboardCrudLayout title="Product Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default BoxCreate;
