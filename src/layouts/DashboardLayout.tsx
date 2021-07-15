import { Box, Drawer, makeStyles, SwipeableDrawer } from "@material-ui/core";
import React from "react";
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import Header from "../components/Dashboard/shared/Header";
import SideBar from "../components/Dashboard/shared/SideBar";
import Footer from "../components/Dashboard/shared/Footer";
import { Hidden } from "@material-ui/core";
import { TOGGLE_SIDEBAR } from "../store/types";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: "20vw",
        overflow: "hidden",
        "& .MuiDrawer-paper": {
            width: "20vw",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },

        [theme.breakpoints.down("md")]: {
            "& .MuiDrawer-paper": {
                width: "320px",
            },
        },
    },
    content: {
        width: "80vw",
        minHeight: "100vh",
        backgroundColor: "#262a33",
        marginLeft: "auto",
        padding: "100px 0",
        boxSizing: "border-box",
        position: "relative",

        [theme.breakpoints.down("md")]: {
            width: "100vw",
        },
    },
    contentFull: {
        width: "100vw",

        [theme.breakpoints.down("md")]: {
            width: "100vw",
        },
    },
}));

const DashboardLayout = ({ children }) => {
    const classes = useStyles();
    const { sidebarShow } = useSelector((state:RootStateOrAny) => state.site);
    const dispatch = useDispatch();

    const collapseHandler = (state) => {
        dispatch({
            type: TOGGLE_SIDEBAR,
            payload: state,
        });
    };

    return (
        <>
            <Header />

            <Hidden lgUp>
                <SwipeableDrawer
                    className={classes.drawer}
                    anchor="left"
                    open={sidebarShow}
                    onClose={() => collapseHandler(false)}
                    onOpen={() => collapseHandler(true)}
                >
                    <SideBar />
                </SwipeableDrawer>
            </Hidden>

            <Hidden mdDown>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={sidebarShow}
                >
                    <SideBar />
                </Drawer>
            </Hidden>

            <Box
                className={`${classes.content} ${
                    !sidebarShow && classes.contentFull
                }`}
            >
                {children}

                <Footer />
            </Box>
        </>
    );
};

export default DashboardLayout;
