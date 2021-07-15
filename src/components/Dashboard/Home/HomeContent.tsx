import {Box, Container, Typography} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, {useState} from "react";
import {Images} from "../../../constants/themeData";
import PageTitle from "../shared/PageTitle";
import MenuList from "./MenuList";
import SummaryList from "./SummaryList";
import SectionAccordion from "../shared/SectionAccordion";

const HomeContent = () => {
    const [menuItems] = useState([
        {title: "POS", icon: Images.PosIcon, badge: 0},
        {title: "SELL LIST", icon: Images.ListIcon, badge: 0},
        {title: "OVERVIEW REPORT", icon: Images.OverviewReportIcon, badge: 0},
        {title: "SELL REPORT", icon: Images.SellReportIcon, badge: 0},
        {title: "PURCHASE REPORT", icon: Images.PurchaseReportIcon, badge: 0},
        {title: "STOCK ALERT", icon: Images.StockAlertIcon, badge: 1},
        {title: "EXPIRED", icon: Images.ExpiredIcon, badge: 0},
        {title: "BACKUP / RESTORE", icon: Images.BackupIcon, badge: 0},
    ]);

    return (
        <Container maxWidth="xl">
            <PageTitle title="Dashboard"/>
            <Box pb={5}>
                <SectionAccordion
                    title={<Typography variant="h5">Main Menu</Typography>}
                >
                    <MenuList data={menuItems}/>
                </SectionAccordion>

                <SectionAccordion
                    title={<Typography variant="h5">Storage</Typography>}
                >
                    <SummaryList/>
                </SectionAccordion>

                <SectionAccordion
                    title={
                        <Typography variant="h5">Recent Activity</Typography>
                    }
                >
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequuntur voluptates cupiditate officiis
                    </Typography>
                </SectionAccordion>

                <SectionAccordion
                    title={<Typography variant="h5">Deposite</Typography>}
                >
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequuntur voluptates cupiditate officiis
                    </Typography>
                </SectionAccordion>

                <SectionAccordion
                    title={
                        <Typography variant="h5">
                            Deposite & Withdraw
                        </Typography>
                    }
                >
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequuntur voluptates cupiditate officiis
                    </Typography>
                </SectionAccordion>

                <SectionAccordion
                    title={
                        <Typography variant="h5">
                            Encome Vs Expense Graph{" "}
                            <ArrowRightAltIcon fontSize="small"/> Jan, 2021
                        </Typography>
                    }
                >
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequuntur voluptates cupiditate officiis
                    </Typography>
                </SectionAccordion>
            </Box>
        </Container>
    );
};

export default HomeContent;
