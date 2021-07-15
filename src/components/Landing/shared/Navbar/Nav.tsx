import {
    Button,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Colors } from "../../../../constants/themeData";
import { LandingUrls } from "../../../../constants/urls";
import { logout } from "../../../../store/actions/authAction";

const useStyles = makeStyles(() => ({
    list: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        "@media(max-width: 959px)": {
            flexDirection: "column",
        },
    },
    listItem: {
        width: "initial",
        "@media(max-width: 959px)": {
            width: "100%",
        },
    },
    listItemText: {
        "& .MuiTypography-root": {
            fontSize: "20px",

            "& a": {
                color: Colors.black1,
                textDecoration: "none",
            },
        },
    },
    listItemTextActive: {
        position: "relative",
        paddingBottom: 10,

        "&::after": {
            content: "''",
            width: "30%",
            height: 5,
            borderRadius: 8,
            backgroundColor: Colors.teal1,
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
        },
    },
    logoutBtn: {
        fontSize: "20px",
        color: Colors.black1,
        textTransform: "capitalize",
    },
}));

const Nav = ({ data }) => {
    const classes = useStyles();
    const history = useHistory();
    const { currentUser, isAuthenticate } = useSelector(
        (state: RootStateOrAny) => state.auth
    );
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logout(() => history.replace(LandingUrls.LOGIN)));
    };

    return (
        <List className={classes.list}>
            {data.map((item, i) => (
                <ListItem key={i} className={classes.listItem}>
                    <ListItemText className={classes.listItemText}>
                        <NavLink
                            activeClassName={classes.listItemTextActive}
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    </ListItemText>
                </ListItem>
            ))}
            {currentUser && isAuthenticate && (
                <ListItem className={classes.listItem}>
                    <Button
                        onClick={logOutHandler}
                        className={classes.logoutBtn}
                        variant="text"
                    >
                        LogOut
                    </Button>
                </ListItem>
            )}
        </List>
    );
};

export default Nav;
