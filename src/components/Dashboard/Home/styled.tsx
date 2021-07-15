import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    menuBox: {
        width: "100%",
        display: "flex",
        overflow: "hidden",
        flexWrap: "wrap",
    },
    menuItem: {
        width: "calc(100%/8 * 1)",
        padding: 15,
        boxSizing: "border-box",

        "@media(max-width: 1366px)": {
            width: "calc(100%/8 * 2)",
        },

        "@media(max-width: 768px)": {
            width: "calc(100%/3)",
        },

        "@media(max-width: 600px)": {
            width: "100%",
        },
    },
    summaryItem: {
        width: "calc(100%/4 * 1)",
        padding: 15,
        boxSizing: "border-box",

        "@media(max-width: 768px)": {
            width: "calc(100%/2)",
        },

        "@media(max-width: 600px)": {
            width: "100%",
            padding: 10,
        },
    },
});
