import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../../constants/themeData";

export const useStyles = makeStyles(() => ({
    wrapper: {
        position: "relative",
        backgroundColor: Colors.white1,
    },
    container: {
        backgroundColor: Colors.white4,
        position: "relative",
    },
    brand: {
        width: "100%",
        height: 100,
        borderRadius: 0,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },

    brandCarousel: {
        position: "relative",
        "& .owl-nav": {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",

            "& button": {
                width: 40,
                height: 40,
                borderRadius: "50% !important",
                fontSize: "40px !important",
                backgroundColor: "#fff !important",
                color: "#000 !important",

                position: "relative",
                left: -20,

                "&:last-child": {
                    left: "initial",
                    right: -20,
                },

                "& span": {
                    position: "relative",
                    top: -10,
                },
            },
        },
    },
}));
