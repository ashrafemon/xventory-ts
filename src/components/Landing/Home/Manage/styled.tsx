import { makeStyles } from "@material-ui/core";
import { Colors } from "./../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "10px 0 250px",

        "@media(max-width: 599px)": {
            padding: "10px 0 50px",
        },
    },
    sectionTitle: {
        fontSize: 35,
        display: "inline-block",
        position: "relative",
        paddingBottom: 20,

        "&:after": {
            content: "''",
            width: "50%",
            height: 8,
            backgroundColor: Colors.teal1,
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: 10,
        },
    },
    fullWidth: {
        width: "100%",
        height: "100%",
    },

    items: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "80px",

        "@media(max-width: 599px)": {
            gap: "20px",
            marginBottom: 20,

            "&:last-child": {
                marginBottom: 20,
            },
        },
    },
    item: {
        width: "80%",
        "&:nth-child(even)": {
            marginLeft: "auto",
        },

        "@media(max-width: 599px)": {
            width: "100%",
        },
    },
    rightSideItem: {
        "&:nth-child(even)": {
            marginLeft: "0",
        },
        "&:nth-child(odd)": {
            marginLeft: "auto",
        },

        "@media(max-width: 599px)": {
            width: "100%",
        },
    },
    itemTitle: {
        fontSize: 25,
        fontWeight: 600,
        paddingBottom: 10,
        marginBottom: 10,
        position: "relative",

        "&:after": {
            content: "''",
            width: "80%",
            height: 2,
            backgroundColor: Colors.teal1,
            position: "absolute",
            bottom: 0,
            left: 0,
            borderRadius: 8,
        },

        "@media(max-width: 599px)": {
            "&:after": {
                width: "50%",
            },
        },
    },
    itemText: {
        fontSize: 15,
    },

    manageImg: {
        width: "100%",
        height: "100%",
        borderRadius: 0,
    },
}));
