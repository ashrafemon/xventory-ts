import { makeStyles } from "@material-ui/core";
import { Colors, Images } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        paddingTop: 85,
        paddingBottom: 330,
        position: "relative",
        overflow: "hidden",
        background: `url(${Images.HeroShape}) no-repeat center left`,

        "@media(max-width: 947px)": {
            paddingBottom: 85,
            backgroundSize: "contain",
        },
    },

    logo: {
        width: 250,
        height: 81,
        borderRadius: 0,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
    textContent: {
        marginBottom: 140,
        "@media(max-width: 592px)": {
            marginBottom: 50,
        },
    },

    title: {
        fontSize: 25,
        "@media(max-width: 1366px)": {
            fontSize: 20,
        },
    },
    text: {
        fontSize: 15,
        "@media(max-width: 1366px)": {
            fontSize: 13,
        },
    },
    heroImg: {
        width: "100%",
        height: "100%",
        borderRadius: 0,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
    fullWidth: {
        width: "100%",
        height: "100%",
    },

    btn: {
        textTransform: "capitalize",
        fontSize: 20,
        marginRight: 40,
        width: 230,
        "&:last-child": {
            marginRight: 0,
        },
        "@media(max-width: 1086px)": {
            marginRight: 20,
            width: 200,
        },
        "@media(max-width: 592px)": {
            marginRight: 0,
            marginBottom: 10,
            width: "100%",
        },
    },
    outlineBtn: {
        backgroundColor: Colors.white1,
        color: Colors.black1,
        border: `3px solid ${Colors.teal1}`,
    },
    fillBtn: {
        backgroundColor: Colors.teal1,
        color: Colors.white1,
    },
}));
