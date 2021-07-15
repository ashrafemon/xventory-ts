import React from "react";
import CreateContent from "../../../../components/Dashboard/System/Stores/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const StoreCreate = () => {
    return (
        <DashboardCrudLayout title="Store Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default StoreCreate;
