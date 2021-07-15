import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "230px 0",

        "@media(max-width: 600px)": {
            padding: "100px 0",
        },
    },
    searchContent: {
        marginBottom: 140,

        "@media(max-width: 600px)": {
            marginBottom: 50,
        },
    },

    sectionTitle: {
        fontSize: 30,
        paddingBottom: 25,
        fontWeight: 600,
        color: Colors.teal1,
        position: "relative",
        display: "inline-block",

        "&::after": {
            content: "''",
            width: 64,
            height: 7,
            borderRadius: 2,
            backgroundColor: Colors.teal1,
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
        },
    },

    sectionAvatar: {
        borderRadius: 0,
        width: "80%",
        height: "auto",
        margin: "auto",
    },

    searchField: {
        backgroundColor: "rgba(216, 216, 216, .3)",
        borderRadius: 8,

        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            border: 0,
        },
        "& .MuiOutlinedInput-input": {
            padding: "22px 50px",
            fontWeight: 300,
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: 0,
            },
            "&:hover fieldset": {
                border: 0,
            },
            "&.Mui-focused fieldset": {
                border: 0,
            },
        },
    },

    accordionItem: {
        marginBottom: 40,
    },
    accordion: {
        backgroundColor: "rgba(196, 196, 196, .4)",
        borderRadius: "8px !important",
    },
    accordionHeader: {
        padding: "20px 60px",
        borderBottom: "1px solid rgba(196, 196, 196, .8)",

        "@media(max-width: 600px)": {
            padding: "20px",
        },
    },
    accordionDetails: {
        padding: "20px 60px",

        "@media(max-width: 600px)": {
            padding: "20px",
        },
    },
    accordionHeading: {
        fontSize: 20,
        fontWeight: 600,

        "@media(max-width: 600px)": {
            fontSize: 16,
        },
    },
    accordionDescription: {
        fontSize: 20,
        fontWeight: 300,

        "@media(max-width: 600px)": {
            fontSize: 16,
        },
    },
}));
