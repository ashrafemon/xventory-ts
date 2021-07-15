import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "80vw",
        backgroundColor: "#1F212A",
        position: "fixed",
        bottom: 0,
        right: 0,
        borderTop: "2px solid #303541",

        [theme.breakpoints.down("md")]: {
            width: "100vw",
        },
    },
    fullWidth: {
        width: "100vw",
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 600,

        "@media(max-width: 767px)": {
            fontSize: 16,
            textAlign: "center",
        },

        "@media(max-width: 600px)": {
            fontSize: 14,
        },
    },

    versionText: {
        textAlign: "right",

        "@media(max-width: 767px)": {
            textAlign: "center",
        },
    },
}));
