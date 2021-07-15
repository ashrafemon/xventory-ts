import { makeStyles } from "@material-ui/core";
import { Colors } from "./../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "30px 0 280px",

        "@media(max-width: 599px)": {
            padding: "30px 0 100px",
        },
    },

    basicCard: {
        backgroundColor: Colors.white3,
    },
    proCard: {
        backgroundColor: Colors.teal2,
    },
    moderateCard: {
        backgroundColor: Colors.yellow1,
    },
    itemCard: {
        borderRadius: 18,
    },
    itemCardContent: {
        padding: "60px 50px 30px !important",
        "@media(max-width: 768px)": {
            padding: "60px 30px 30px !important",
        },
    },
    textContent: {
        marginBottom: 100,

        "@media(max-width: 599px)": {
            marginBottom: 50,
        },
    },
    price: {
        fontSize: 40,
        fontWeight: 600,
        marginBottom: 30,
    },
    duration: {
        fontSize: 15,
        color: "rgba(0,0,0,0.4)",
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
    },
    description: {
        fontSize: 15,
    },

    featureBox: {
        marginBottom: 125,

        "@media(max-width: 599px)": {
            marginBottom: 50,
        },
    },
    list: {},
    listItem: {
        padding: 0,
    },
    listItemIcon: {
        minWidth: 40,
    },
    listItemText: {
        "& .MuiTypography-root": {
            fontSize: 15,
        },
    },

    purchaseBtn: {
        textTransform: "capitalize",
        fontSize: 15,
        borderRadius: 8,
        boxShadow: "none",
        padding: "12px 16px",
    },
    basicBtn: {
        backgroundColor: "rgba(188, 188, 188, 0.52) !important",
    },
    proBtn: {
        backgroundColor: "rgba(82, 183, 136, 0.52) !important",
    },
    moderateBtn: {
        backgroundColor: "rgba(243, 176, 7, 0.52) !important",
    },
}));
