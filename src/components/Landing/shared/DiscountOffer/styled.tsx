import { makeStyles } from "@material-ui/core";
import { Colors } from "./../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: Colors.teal1,
    },
    text: {
        fontSize: 15,
        color: Colors.white1,
        "& a": {
            color: Colors.white1,
        },
    },
    discountText: {
        fontSize: 35,
        padding: "0 10px",
        color: "#CFFF0D",
        marginRight: 2,
    },
}));
