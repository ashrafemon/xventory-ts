import {Button, makeStyles} from "@material-ui/core";
import React from "react";
import {Colors} from "../../../../constants/themeData";

const useStyles = makeStyles(() => ({
    authBtn: {
        minWidth: 234,
        backgroundColor: Colors.teal1 + " !important",
        color: Colors.white1,
        borderRadius: 8,
        textTransform: "capitalize",
        fontSize: 20,
        fontWeight: 600,
        padding: "13px 16px",
        marginRight: 10,

        '&:last-child': {
            marginRight: 0,
        },

        "@media(max-width: 600px)": {
            fontSize: 18,
        },
    },
}));

const AuthButton = ({text, ...props}) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            className={classes.authBtn}
            {...props}
        >
            {text}
        </Button>
    );
};

export default AuthButton;
