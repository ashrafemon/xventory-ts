import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    contentBox: {
        width: "100%",
        minHeight: "78.5vh",
        backgroundColor: "#272934",
        "@media(max-width: 1366px)": {
            minHeight: "78vh",
        },
    },

    // Footer
    footerWrapper: {
        width: "100%",
    },
    footerInfoBox: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F3BB4D",
    },
    dateText: {
        fontWeight: 600,
        color: "#1F2129",
    },
    priceText: {
        fontWeight: 600,
        color: "#1F2129",
    },
    addNoteBtn: {
        "& .MuiButton-root": {
            fontWeight: 600,
            textTransform: "capitalize",
            color: "#1F2129",
        },
    },
    holdBtn: {
        backgroundColor: "#EB5757 !important",
        color: "#1F2129",
    },
    payBtn: {
        backgroundColor: "#63F58C !important",
        color: "#1F2129",
    },
    fullWidth: {
        width: "100%",
        height: "100%",
    },
}));
