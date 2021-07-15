import React from "react";
import CreateContent from "../../../../components/Dashboard/System/Brands/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const BrandCreate = () => {
    return (
        <DashboardCrudLayout title="Brand Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default BrandCreate;
