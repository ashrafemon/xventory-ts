import React from "react";
import CreateContent from "../../../../components/Dashboard/System/TaxRates/Create/CreateContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const TaxRateCreate = () => {
    return (
        <DashboardCrudLayout title="TaxRate Create">
            <CreateContent />
        </DashboardCrudLayout>
    );
};

export default TaxRateCreate;
