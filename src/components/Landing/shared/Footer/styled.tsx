import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        backgroundColor: Colors.black1,
    },
    logo: {
        borderRadius: 0,
        width: 111,
        height: 43,
    },
    textWhite: {
        color: Colors.white1,
    },

    listItem: {
        padding: "3px 16px",
        "@media(max-width: 599px)": {
            padding: "3px 0",
        },
    },
    listItemIcon: {
        color: Colors.white1,
    },
    listItemText: {
        "& .MuiTypography-root": {
            fontSize: 20,
            color: Colors.white1,
        },

        "@media(max-width: 599px)": {
            "& .MuiTypography-root": {
                fontSize: 16,
                color: Colors.white1,
            },
        },
    },
}));
