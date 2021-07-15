import {
    Container,
    Grid,
    Avatar,
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
    Box,
    Typography,
} from "@material-ui/core";
import React from "react";
import { Images } from "../../../../constants/themeData";
import { useStyles } from "./styled";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useHistory } from "react-router-dom";

const Footer = () => {
    const classes = useStyles();
    const history = useHistory();

    const routeChangeHandler = (path) => {
        history.push(path);
    };

    return (
        <Box py={5} className={classes.wrapper}>
            <Container>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12} sm={4} md={3}>
                        <Box mb={5}>
                            <Avatar
                                src={Images.CompanyLogo}
                                className={classes.logo}
                            />
                        </Box>

                        <Box mb={3}>
                            <Typography
                                variant="body1"
                                className={classes.textWhite}
                            >
                                House: 22, Road: 4, Nikunja 2, Khilkhet, Dhaka -
                                1229, Bangladesh.
                            </Typography>
                        </Box>

                        <Typography
                            variant="body1"
                            className={classes.textWhite}
                        >
                            hello@projectx.com.bd
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.textWhite}
                        >
                            projectx.com.bd@gmail.com
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.textWhite}
                        >
                            +8801886012021
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <List>
                            <ListItem
                                button
                                className={classes.listItem}
                                onClick={() => routeChangeHandler("/")}
                            >
                                <ListItemText className={classes.listItemText}>
                                    Home
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                button
                                className={classes.listItem}
                                onClick={() => routeChangeHandler("/terms")}
                            >
                                <ListItemText className={classes.listItemText}>
                                    Terms & Conditions
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                button
                                className={classes.listItem}
                                onClick={() => routeChangeHandler("/policy")}
                            >
                                <ListItemText className={classes.listItemText}>
                                    Privacy & Policies
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                button
                                className={classes.listItem}
                                onClick={() => routeChangeHandler("/faq")}
                            >
                                <ListItemText className={classes.listItemText}>
                                    FAQ
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <List>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <FacebookIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.listItemText}>
                                    Facebook
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <TwitterIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.listItemText}>
                                    Twitter
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <InstagramIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.listItemText}>
                                    Instagram
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
