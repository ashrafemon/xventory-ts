import React from "react";
import CreateContent from "../../../../components/Dashboard/System/Units/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const UnitCreate = () => {
    return (
        <DashboardCrudLayout title="Unit Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default UnitCreate;
