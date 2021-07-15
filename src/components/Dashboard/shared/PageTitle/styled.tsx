import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    pageTitle: {
        fontWeight: 600,
        color: "#fff",
        textTransform: "capitalize",
    },
    pageSubTitle: {
        color: "#fff",
    },
    pageSubTitleCollapsibleBtn: {
        padding: 3,
        color: "#fff",
    },
    searchField: {
        backgroundColor: "#1F2129",
        borderRadius: 8,

        "& .MuiInputBase-input": {
            color: "#fff",
            "&::placeholder": {
                color: "#fff",
            },
        },
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            border: 0,
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
    searchFieldIcon: {
        color: "#fff",
    },
});
