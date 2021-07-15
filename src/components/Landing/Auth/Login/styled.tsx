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
}));
