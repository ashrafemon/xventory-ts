import { makeStyles } from "@material-ui/core";
import { Colors } from "./../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    appBar: {
        backgroundColor: Colors.white1,
        padding: "20px 0",
    },
    logo: {
        width: 120,
        borderRadius: 0,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },

    drawer: {
        "& .MuiDrawer-paper": {
            width: 300,
            paddingTop: 50,
        },
    },
    drawerCloseBtn: {
        position: "absolute",
        top: 10,
        right: 10,
    },
}));
