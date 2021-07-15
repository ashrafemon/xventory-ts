import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    dialog: {
        "& .MuiPaper-rounded": {
            borderRadius: 8,
        },
    },
    dialogContent: {
        padding: "65px !important",

        "@media(max-width: 600px)": {
            padding: "65px 30px !important",
        },
    },
    title: {
        fontSize: 35,

        "@media(max-width: 600px)": {
            fontSize: 25,
        },
    },
    submitBtn: {
        backgroundColor: Colors.teal1 + " !important",
        color: Colors.white1,
        fontSize: 35,
        width: 280,
        textTransform: "capitalize",
        borderRadius: 8,

        "@media(max-width: 600px)": {
            width: "100%",
            fontSize: 25,
        },
    },
    otpFormBox: {
        margin: "100px 0",
    },
    otpInputContainer: {
        width: "100%",
        height: 150,
        gap: "32px",
        "& div": {
            flex: 1,
            borderRadius: 8,
            overflow: "hidden",
        },

        "@media(max-width: 600px)": {
            height: 80,
            gap: "15px",
        },

        "@media(max-width: 400px)": {
            height: 50,
            gap: "10px",
        },
    },
    otpInput: {
        width: "100% !important",
        height: "100%",
        backgroundColor: Colors.teal1,
        border: 0,
        fontSize: 65,
        color: Colors.white1,

        "@media(max-width: 600px)": {
            fontSize: 40,
        },

        "@media(max-width: 400px)": {
            fontSize: 30,
        },
    },
}));
