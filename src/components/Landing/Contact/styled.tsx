import { makeStyles } from "@material-ui/core";
import { Colors, Images } from "../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "85px 0",
        background: `url(${Images.MailShape}) no-repeat bottom left`,
    },

    queryText: {
        marginBottom: 40,
    },
    orText: {
        marginBottom: 40,
        fontWeight: 600,
    },

    list: {
        width: "80%",
        padding: 0,
        "@media(max-width: 768px)": {
            width: "100%",
        },
    },
    listItem: {
        padding: "8px 0",
        gap: "25px",
    },

    listItemIcon: {
        backgroundColor: Colors.teal1,
        minWidth: 57,
        height: 55,
        color: Colors.white1,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    listItemText: {
        fontSize: 15,
        lineHeight: 2,
    },

    submitBtn: {
        backgroundColor: `${Colors.teal1} !important`,
        color: Colors.black1,
        fontSize: 16,
        fontWeight: 500,
        width: 314,
        height: 60,
        borderRadius: 8,
        textTransform: "capitalize",

        "@media(max-width: 600px)": {
            width: "100%",
        },
    },
}));
