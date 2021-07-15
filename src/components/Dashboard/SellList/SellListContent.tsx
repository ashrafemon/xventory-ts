import { Box, Container, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import MenuList from "../Home/MenuList";
import PageTitle from "../shared/PageTitle";
import SectionAccordion from "../shared/SectionAccordion";
import { useStyles } from "./styled";

const TabPanel = ({ children, value, index }) => {
    return <Box>{value === index && <>{children}</>}</Box>;
};

const SellListContent = () => {
    const classes = useStyles();
    const { menuItems } = useSelector((state: RootStateOrAny) => state.sell);
    const [tab, setTab] = useState(0);

    const tabChangeHandler = (event, tabIndex) => setTab(tabIndex);

    return (
        <Container maxWidth="xl">
            <PageTitle title="Sell > Sell List" />
            <Box pb={5}>
                <SectionAccordion
                    title={<Typography variant="h5">Sell Menu</Typography>}
                >
                    <MenuList data={menuItems} />
                </SectionAccordion>
            </Box>

            <Box className={classes.pageContent} my={5}>
                <Tabs
                    value={tab}
                    onChange={tabChangeHandler}
                    indicatorColor="primary"
                    textColor="primary"
                    className={classes.tabs}
                >
                    <Tab className={classes.tabItem} label=".JPG" />
                    <Tab className={classes.tabItem} label=".PNG" />
                    <Tab className={classes.tabItem} label=".XLXS" />
                    <Tab className={classes.tabItem} label=".PDF" />
                    <Tab className={classes.tabItem} label=".CSV" />
                </Tabs>
                <TabPanel value={tab} index={0}>
                    <Typography className={classes.title} variant="h5">
                        Invoices
                    </Typography>

                    {/*<SectionTable/>*/}
                </TabPanel>
            </Box>
        </Container>
    );
};

export default SellListContent;
