import React from "react";
import { Box, Button, makeStyles, Typography, Avatar } from "@material-ui/core";
import { Colors, Images } from "../../../../constants/themeData";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles(() => ({
    box: {
        width: "100%",
        // minWidth: 139,
        // maxWidth: 139,
        maxHeight: 300,
        minHeight: 257,

        padding: "35px 40px",
        boxSizing: "border-box",
        backgroundColor: "#303541 !important",
        borderRadius: 8,
        position: "relative",

        "& .MuiButton-label": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
        },
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    icon: {
        width: 25,
        height: 25,
        borderRadius: 0,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
    countText: {
        textTransform: "uppercase",
        color: "#fff",
        lineHeight: 1.4,
        fontWeight: 600,
        fontSize: 20,
    },
    text: {
        textTransform: "capitalize",
        color: "#949699",
        lineHeight: 1.4,
        fontWeight: 600,
        fontSize: 18,
    },

    flex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    flexItem: {
        flex: 1,
        borderRight: "1px solid #fff",
        textAlign: "center",

        "&:last-child": {
            borderRight: 0,
        },
    },

    badge: {
        width: 30,
        height: 30,
        position: "absolute",
        top: -10,
        right: -5,
        color: Colors.danger1,
    },
    badgeBox: {
        border: "1px solid " + Colors.danger1,
    },

    moreBtn: {
        backgroundColor: "transparent",
        padding: 0,
        color: "#60D1F6",
        fontSize: 18,
        textDecoration: "underline !important",
        textTransform: "capitalize",
    },
}));

const SummaryButton = () => {
    const classes = useStyles();
    return (
        <Box className={`${classes.box} ${classes.badgeBox}`}>
            <Box className={classes.badge}>
                <WarningIcon fontSize="large" />
            </Box>

            <Typography variant="h6" className={classes.title}>
                <Avatar src={Images.ListIcon} className={classes.icon} />
                INVOICE
            </Typography>

            <Box className={classes.flex} py={5}>
                <Box className={classes.flexItem}>
                    <Typography variant="h6" className={classes.countText}>
                        100
                    </Typography>
                    <Typography variant="body2" className={classes.text}>
                        Today
                    </Typography>
                </Box>
                <Box className={classes.flexItem}>
                    <Typography variant="h6" className={classes.countText}>
                        244
                    </Typography>
                    <Typography variant="body2" className={classes.text}>
                        Total
                    </Typography>
                </Box>
            </Box>

            <Button variant="text" className={classes.moreBtn}>
                Show Invoices
            </Button>
        </Box>
    );
};

export default SummaryButton;
