import React from "react";
import CreateContent from "../../../../components/Dashboard/System/Currencies/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const CurrencyCreate = () => {
    return (
        <DashboardCrudLayout title="Currency Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default CurrencyCreate;
