import { makeStyles } from "@material-ui/core";
import { Colors } from "./../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "140px 0",
    },
    greetingTitle: {
        fontSize: 32,
        fontWeight: 600,
        marginBottom: 30,
    },
    selectText: {
        fontSize: 20,
        fontWeight: 300,
        marginBottom: 65,
    },
    listItem: {
        padding: 0,
        marginBottom: 30,
        "&:last-child": {
            marginBottom: 0,
        },
    },
    storeItemBtn: {
        fontSize: 20,
        fontWeight: 300,
        justifyContent: "flex-start",
        textTransform: "capitalize",
        height: 69,
        borderRadius: 8,
        padding: "6px 25px",
        backgroundColor: Colors.teal1 + " !important",
        "& .MuiButton-endIcon": {
            marginLeft: "auto",
            "& .MuiAvatar-root": {
                width: 80,
                "& .MuiAvatar-img": {
                    objectFit: "contain",
                },
            },
        },
    },
}));
