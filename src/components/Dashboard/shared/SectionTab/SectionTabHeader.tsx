import { makeStyles, Tab, Tabs } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    tabs: {
        "& .MuiTabs-flexContainer": {
            justifyContent: "flex-end",
            gap: "20px",
        },
        position: "absolute",
        top: -50,
        right: 20,
        "& .Mui-selected": {
            backgroundColor: "#63F58C !important",
            color: "#1F2129 !important",
        },
        "& .MuiTabs-indicator": {
            backgroundColor: "#63F58C !important",
        },
    },
    tabItem: {
        fontSize: 12,
        color: "#949699",
        fontWeight: 600,
        backgroundColor: "#1F2129",
        minWidth: "initial",
        padding: "6px 10px",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
}));

const SectionTabHeader = ({
    tabs = [],
    selected = 0,
    changeHandler = () => {},
}) => {
    const classes = useStyles();
    return (
        <Tabs
            value={selected}
            onChange={changeHandler}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
        >
            {tabs.map((tab, index) => (
                <Tab className={classes.tabItem} label={tab} key={index} />
            ))}
        </Tabs>
    );
};

export default SectionTabHeader;
