import { makeStyles, TextField, withStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#1F2129",
        position: "relative",
    },
    logoContainer: {
        width: "100%",
        padding: "20px 0px",
        boxSizing: "border-box",
        marginBottom: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: "50%",
        height: "auto",
        borderRadius: "0 important",
        overflow: "initial",
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
    storeFieldContainer: {
        marginBottom: 50,
    },
    storeFieldLabel: {
        color: "#fff",
        paddingLeft: 15,
        paddingBottom: 15,
    },
    storeField: {
        "& .MuiFormControl-root": {
            backgroundColor: "#313442",
            borderRadius: 10,
        },
    },
    menuListItem: {
        color: "#fff",
        borderRadius: 10,
        "& .Mui-selected": {
            backgroundColor: "crimson !important",
        },
    },
    menuListItemIcon: {
        color: "#fff",
    },
    nestedMenuList: {
        paddingLeft: 20,
    },

    closeBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        "& .MuiSvgIcon-root": {
            fontSize: 35,
            color: "#fff",
        },
    },
});

export const CustomTextField = withStyles({
    root: {
        "& .MuiInputBase-input": {
            color: "#fff",
            fontWeight: 800,
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
})(TextField);
