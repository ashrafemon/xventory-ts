import {
    AppBar,
    Avatar,
    Box,
    Container,
    Grid,
    Hidden,
    IconButton,
    SwipeableDrawer,
    Toolbar,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Images } from "../../../../constants/themeData";
import { LandingUrls } from "../../../../constants/urls";
import Nav from "./Nav";
import { useStyles } from "./styled";

const Navbar = () => {
    const classes = useStyles();
    const { currentUser, isAuthenticate } = useSelector(
        (state: RootStateOrAny) => state.auth
    );

    const [navList, setNavList] = useState([
        { name: "About Us", path: LandingUrls.ABOUT },
        { name: "Contact Us", path: LandingUrls.CONTACT },
        { name: "Product & Pricing", path: LandingUrls.PRICING },
        { name: "Login", path: LandingUrls.LOGIN },
    ]);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawerHandler = (state) => {
        setDrawerOpen(state);
    };

    useEffect(() => {
        if (currentUser && isAuthenticate) {
            let newNavList = navList;
            newNavList.pop();
            setNavList(newNavList);
        }
    }, [currentUser, isAuthenticate, navList]);

    return (
        <AppBar position="sticky" className={classes.appBar} elevation={2}>
            <Toolbar>
                <Container maxWidth="xl">
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={3} sm={3} md={3}>
                            <Link to={LandingUrls.HOME}>
                                <Avatar
                                    src={Images.ProductLogo}
                                    className={classes.logo}
                                />
                            </Link>
                        </Grid>

                        <Grid item xs={9} sm={9} md={8}>
                            <Hidden mdUp>
                                <Box textAlign="right">
                                    <IconButton
                                        onClick={() => drawerHandler(true)}
                                    >
                                        <MenuIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SwipeableDrawer
                                    className={classes.drawer}
                                    anchor="right"
                                    open={drawerOpen}
                                    onClose={() => drawerHandler(false)}
                                    onOpen={() => drawerHandler(true)}
                                >
                                    <IconButton
                                        onClick={() => drawerHandler(false)}
                                        className={classes.drawerCloseBtn}
                                    >
                                        <CloseIcon fontSize="large" />
                                    </IconButton>

                                    <Nav data={navList} />
                                </SwipeableDrawer>
                            </Hidden>
                            <Hidden smDown>
                                <Nav data={navList} />
                            </Hidden>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
