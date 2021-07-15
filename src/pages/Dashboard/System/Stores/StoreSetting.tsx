import React from "react";
import SettingContent from "../../../../components/Dashboard/System/Stores/Setting/SettingContent";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";

const StoreSetting = () => {
    return (
        <DashboardCrudLayout title="Store Setting">
            <SettingContent />
        </DashboardCrudLayout>
    );
};

export default StoreSetting;
