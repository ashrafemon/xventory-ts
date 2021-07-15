import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
} from "@material-ui/core";
import React from "react";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useStyles } from "./styled";

const ContactInfo = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h6" className={classes.queryText}>
                If you Have Any Quaires or anything you want to know from us
                fell free fill up the contact feilds
            </Typography>
            <Typography variant="h4" className={classes.orText}>
                Or
            </Typography>

            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <EmailIcon fontSize="large" />
                    </ListItemIcon>
                    <Box>
                        <Typography
                            variant="body2"
                            className={classes.listItemText}
                        >
                            Hello@projectx.com.bd
                        </Typography>
                        <Typography
                            variant="body2"
                            className={classes.listItemText}
                        >
                            Projectx.com.bd@gmail.com
                        </Typography>
                    </Box>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <CallIcon fontSize="large" />
                    </ListItemIcon>
                    <Box>
                        <Typography
                            variant="body2"
                            className={classes.listItemText}
                        >
                            +88 01886012021
                        </Typography>
                    </Box>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <LocationOnIcon fontSize="large" />
                    </ListItemIcon>
                    <Box>
                        <Typography
                            variant="body2"
                            className={classes.listItemText}
                        >
                            House No: 22 , Road No: 4 , Nikunjo 2 Khilkhet,
                            Dhaka -1229 , Bangladesh
                        </Typography>
                    </Box>
                </ListItem>
            </List>
        </Box>
    );
};

export default ContactInfo;
