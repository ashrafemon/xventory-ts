import { Box, Hidden, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DiscountOffer from "../components/Landing/shared/DiscountOffer";
import Footer from "../components/Landing/shared/Footer";
import Navbar from "../components/Landing/shared/Navbar";
import { DashboardUrls, LandingUrls } from "../constants/urls";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "100%",
    },
    contentBox: {
        minHeight: "100vh",
        position: "relative",
    },
}));

const LandingLayout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();

    const { currentUser, isAuthenticate } = useSelector(
        (state: RootStateOrAny) => state.auth
    );
    const { selectedStore } = useSelector(
        (state: RootStateOrAny) => state.stores
    );

    // useEffect(() => {
    //     if (isAuthenticate && selectedStore === null) {
    //         history.replace(LandingUrls.STORE_SELECT);
    //     } else if (isAuthenticate && selectedStore !== null) {
    //         let path = DashboardUrls.HOME.replace(
    //             ":storeId",
    //             selectedStore.code
    //         );
    //         history.replace(path);
    //     }
    // }, [history, isAuthenticate, selectedStore]);

    return (
        <Box className={classes.wrapper}>
            <Navbar />
            <Hidden xsDown>
                <DiscountOffer />
            </Hidden>

            <Box className={classes.contentBox}>{children}</Box>

            <Footer />
        </Box>
    );
};

export default LandingLayout;
