import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { Colors } from "../../../../constants/themeData";

const CssTypography = withStyles(() => ({
    root: {
        fontSize: 25,
        position: "relative",
        display: "inline-block",
        fontWeight: 600,
        paddingBottom: 20,

        "&::after": {
            content: "''",
            width: "100%",
            height: 5,
            borderRadius: 8,
            backgroundColor: Colors.teal1,
            position: "absolute",
            bottom: 0,
            left: 0,
        },

        "@media(max-width: 600px)": {
            fontSize: 20,
        },
    },
}))(Typography);

const SectionTitle = ({ title = "Section Title" }) => {
    return <CssTypography variant="h5">{title}</CssTypography>;
};

export default SectionTitle;
