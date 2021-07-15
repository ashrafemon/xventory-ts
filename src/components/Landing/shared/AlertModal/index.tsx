import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogContent,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import { Colors } from "../../../../constants/themeData";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
    dialog: {
        "& .MuiPaper-rounded": {
            borderRadius: 8,
        },
    },
    dialogContent: {
        padding: "65px !important",
        position: "relative",

        "@media(max-width: 600px)": {
            padding: "65px 30px !important",
        },
    },
    closeBtn: {
        position: "absolute",
        width: 47,
        height: 47,
        minWidth: 47,
        top: 35,
        right: 35,
        borderRadius: 8,
        backgroundColor: Colors.black1 + " !important",
        color: Colors.white1,
        boxSizing: "border-box",

        "@media(max-width: 400px)": {
            width: 40,
            height: 40,
            minWidth: 40,
            top: 20,
            right: 20,
        },
    },
    avatar: {
        width: 164,
        height: 164,
        margin: "auto",

        "& .MuiSvgIcon-root": {
            width: "80%",
            height: "80%",
        },

        "@media(max-width: 400px)": {
            width: 125,
            height: 125,
        },
    },
    success: {
        backgroundColor: Colors.teal1,
    },
    danger: {
        backgroundColor: Colors.danger1,
    },
    title: {
        fontSize: 35,
        marginBottom: 40,

        "@media(max-width: 600px)": {
            fontSize: 25,
        },

        "@media(max-width: 400px)": {
            fontSize: 20,
        },
    },
    text: {
        fontSize: 25,

        "@media(max-width: 600px)": {
            fontSize: 15,
        },
    },
}));

const AlertModal = ({ open, data, close = () => {} }) => {
    const classes = useStyles();
    const { title, text, type } = data;

    const renderBgClass = (type) => {
        if (type === "success") {
            return classes.success;
        } else if (type === "failed") {
            return classes.danger;
        }
    };

    return (
        <Dialog open={open} maxWidth="md" fullWidth className={classes.dialog}>
            <DialogContent className={classes.dialogContent}>
                <Button
                    variant="contained"
                    className={classes.closeBtn}
                    onClick={close}
                >
                    <CloseIcon fontSize="large" />
                </Button>

                <Box textAlign="center">
                    <Box mb={5}>
                        <Avatar
                            className={`${classes.avatar} ${renderBgClass(
                                type
                            )}`}
                        >
                            {type === "success" && (
                                <DoneIcon fontSize="large" />
                            )}

                            {type === "failed" && (
                                <CloseIcon fontSize="large" />
                            )}
                        </Avatar>
                    </Box>

                    <Typography variant="h5" className={classes.title}>
                        {title}
                    </Typography>

                    <Typography variant="h6" className={classes.text}>
                        {text}
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AlertModal;
