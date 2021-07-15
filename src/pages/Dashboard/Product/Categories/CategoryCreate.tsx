import React from "react";
import CreateContent from "../../../../components/Dashboard/Product/Categories/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const BoxCreate = () => {
    return (
        <DashboardCrudLayout title="Category Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default BoxCreate;
