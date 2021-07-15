import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "65px 0",
    },

    formBox: {
        border: "3px solid " + Colors.teal1,
        padding: 45,
        position: "relative",

        "@media(max-width: 425px)": {
            padding: "45px 25px",
        },
    },
    boxTitle: {
        position: "absolute",
        top: -28,
        left: 45,
        backgroundColor: Colors.white1,
        display: "inline-block",
        padding: 10,

        "@media(max-width: 425px)": {
            fontSize: 18,
            top: -24,
        },
    },

    authBtn: {
        width: 234,
        backgroundColor: Colors.teal1 + " !important",
        color: Colors.white1,
        borderRadius: 8,
        textTransform: "capitalize",
        fontSize: 20,
        fontWeight: 600,
        padding: "10px 16px",
    },
}));
