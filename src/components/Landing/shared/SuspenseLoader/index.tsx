import { Box, makeStyles, Avatar } from "@material-ui/core";
import React from "react";
import { Images } from "../../../../constants/themeData";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    logo: {
        width: 300,
        height: "auto",
        borderRadius: 0,
        // animation: `$rotatingScroll 3s ${theme.transitions.easing.sharp} infinite`,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
    // "@keyframes rotatingScroll": {
    //     "0%": {
    //         transform: "scale(0)",
    //     },
    //     "100%": {
    //         transform: "scale(1.2)",
    //     },
    // },
}));

const SuspenseLoader = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Avatar src={Images.ProductLogo} className={classes.logo} />
        </Box>
    );
};

export default SuspenseLoader;
