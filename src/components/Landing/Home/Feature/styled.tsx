import { makeStyles } from "@material-ui/core";
import { Colors, Images } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "310px 0",
        position: "relative",
        overflow: "hidden",
        background: `url(${Images.OrangeShape}) no-repeat center left`,

        "@media(max-width: 767px)": {
            backgroundPosition: "top left",
            padding: "100px 0",
        },
    },
    featureImg: {
        borderRadius: 0,
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 35,
    },
    text: {
        fontSize: 16,
        color: "#4F5665",
        lineHeight: 2,
    },
    list: {},
    listItem: {},
    listItemIcon: {
        minWidth: 40,
        color: Colors.teal1,
    },
    listItemText: {
        "& .MuiTypography-root": {
            fontSize: 14,
        },
    },
}));
