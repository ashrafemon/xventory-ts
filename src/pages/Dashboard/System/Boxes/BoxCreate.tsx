import React from "react";
import CreateContent from "../../../../components/Dashboard/System/Boxes/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const BoxCreate = () => {
    return (
        <DashboardCrudLayout title="Box Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default BoxCreate;
