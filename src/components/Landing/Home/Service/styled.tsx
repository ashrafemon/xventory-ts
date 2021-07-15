import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: "40px 0",
        backgroundColor: Colors.teal2,
        marginBottom: 265,

        "@media(max-width: 599px)": {
            marginBottom: 50,
        },
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    time: {
        fontWeight: 600,
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
    },
    relativePosition: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: 548,
        borderRadius: 0,
        position: "absolute",
        top: -400,
        "@media(max-width: 599px)": {
            position: "relative",
            top: 0,
            height: 300,
            "& .MuiAvatar-img": {
                objectFit: "contain",
            },
        },
    },
}));
