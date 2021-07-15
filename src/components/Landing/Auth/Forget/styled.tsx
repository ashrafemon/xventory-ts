import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "120px 0",
    },
    avatar: {
        width: "100%",
        borderRadius: 0,
        height: "auto",
    },
    formBox: {
        border: "1px solid " + Colors.teal1,
        padding: "65px 90px",

        "@media(max-width: 600px)": {
            padding: "30px 40px",
        },
    },
    forgetLink: {
        fontSize: 20,
        "& a": {
            color: Colors.teal1,
        },

        "@media(max-width: 600px)": {
            fontSize: 15,
        },
    },

    otpInputContainer: {
        width: "100%",
        height: 70,
        gap: "20px",
        "& div": {
            flex: 1,
            borderRadius: 8,
            overflow: "hidden",
        },

        "@media(max-width: 600px)": {
            height: 60,
            gap: "8px",
        },

        "@media(max-width: 400px)": {
            height: 50,
        },
    },
    otpInput: {
        width: "100% !important",
        height: "100%",
        backgroundColor: Colors.teal1,
        border: 0,
        fontSize: 25,
        fontWeight: 600,
        color: Colors.white1,

        "@media(max-width: 600px)": {
            fontSize: 20,
        },
    },
}));
