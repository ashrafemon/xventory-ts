import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Colors from "../../../../constants/colors";

const useStyles = makeStyles(() => ({
    btn: {
        width: "100%",
        // minWidth: 139,
        // maxWidth: 139,
        height: 142,

        padding: 20,
        boxSizing: "border-box",
        backgroundColor: "#303541 !important",
        borderRadius: 8,
        position: "relative",

        "& .MuiButton-label": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
            gap: "8px",
        },
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 0,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
    text: {
        textTransform: "uppercase",
        color: "#fff",
        lineHeight: 1.4,
        fontWeight: 600,
        fontSize: 16,
    },
    badge: {
        width: 30,
        height: 30,
        position: "absolute",
        top: -10,
        right: -5,
        color: Colors.danger1,
    },
    badgeBtn: {
        border: "1px solid " + Colors.danger1,
    },
}));

const IconicButton = ({ data }) => {
    const classes = useStyles();

    const renderBadgeBtn = (badgeCount) => {
        if (badgeCount > 0) {
            return classes.badgeBtn;
        }
    };

    return (
        <Button className={`${classes.btn} ${renderBadgeBtn(data.badge)}`}>
            {data.badge > 0 && (
                <Box className={classes.badge}>
                    <NotificationsIcon fontSize="large" />
                </Box>
            )}

            <Box>
                <Avatar src={data.icon} className={classes.icon} />
            </Box>
            <Typography variant="body1" className={classes.text}>
                {data.title}
            </Typography>
        </Button>
    );
};

export default IconicButton;
