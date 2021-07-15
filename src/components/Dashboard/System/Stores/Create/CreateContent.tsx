import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import DashboardCrudLayout from "../../../../../layouts/DashboardCrudLayout";
import PageTitle from "../../../shared/PageTitle";
import Paginate from "../../../shared/Paginate";
import StoreGeneralForm from "./StoreGeneralForm";
import { useStyles } from "./styled";

const CreateContent = () => {
    const classes = useStyles();
    const { menuItems } = useSelector((state: RootStateOrAny) => state.sell);
    const [tab, setTab] = useState(0);
    const [tabList] = useState([
        "General",
        "Currency",
        "Payment Method",
        "Product",
        "Receipt Template",
        "Printer",
        "Email Setting",
        "Ftp Setting",
    ]);

    const tabChangeHandler = (event, tabIndex) => setTab(tabIndex);

    return (
        <DashboardCrudLayout
            pageTitle={<PageTitle title="Sell > Sell List" />}
            title="Store Create"
            // pagination={<Paginate />}
        >
            <Box className={classes.pageContent} my={5}>
                {/* <SectionTabHeader
                    tabs={tabList}
                    selected={tab}
                    changeHandler={tabChangeHandler}
                /> */}
                {/* <SectionTabContent title="Create Store"> */}
                <StoreGeneralForm />
                {/* </SectionTabContent> */}
            </Box>
        </DashboardCrudLayout>
    );
};

export default CreateContent;
