import {
    AppBar,
    Avatar,
    Box,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Images } from "../../../../constants/themeData";
import HeaderOptions from "./HeaderOptions";
import { useStyles } from "./styled";
import { TOGGLE_SIDEBAR } from "../../../../store/types";
import HomeIcon from "@material-ui/icons/Home";

const PosHeader = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const { sidebarShow } = useSelector((state: RootStateOrAny) => state.site);

    // const collapseHandler = () => {
    //     dispatch({
    //         type: TOGGLE_SIDEBAR,
    //         payload: !sidebarShow,
    //     });
    // };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            // className={`${sidebarShow ? classes.sizedAppBar : classes.appBar}`}
        >
            <Toolbar className={classes.toolbar}>
                <Box className={classes.collapsibleOption}>
                    <Box className={classes.logoWrapper}>
                        <Avatar
                            src={Images.XventoryLogo}
                            className={classes.logo}
                        />
                    </Box>
                    <IconButton
                        className={classes.collapseBtn}
                        // onClick={collapseHandler}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Hidden mdDown>
                        <List className={classes.headerList}>
                            <ListItem button className={classes.headerListItem}>
                                <ListItemAvatar>
                                    <Avatar
                                        src={Images.ShopifyIcon}
                                        className={classes.headerListItemIcon}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.headerListItemText}
                                    primary="POS"
                                />
                            </ListItem>
                            <ListItem button className={classes.headerListItem}>
                                <ListItemAvatar>
                                    <Avatar
                                        src={Images.CashBookIcon}
                                        className={classes.headerListItemIcon}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.headerListItemText}
                                    primary="Cash Book"
                                />
                            </ListItem>
                            <ListItem button className={classes.headerListItem}>
                                <ListItemAvatar>
                                    <Avatar
                                        src={Images.FileIcon}
                                        className={classes.headerListItemIcon}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.headerListItemText}
                                    primary="Invoices"
                                />
                            </ListItem>
                        </List>
                    </Hidden>
                </Box>

                <HeaderOptions />
            </Toolbar>
        </AppBar>
    );
};

export default PosHeader;
