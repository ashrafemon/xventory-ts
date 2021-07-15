import {
    Avatar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Popover,
    Typography,
} from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import LockIcon from "@material-ui/icons/Lock";
import OpenWithIcon from "@material-ui/icons/OpenWith";
import React from "react";
import { Images } from "./../../../../constants/themeData";
import { useStyles } from "./styled";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useHistory } from "react-router-dom";
import { logout } from "../../../../store/actions/authAction";
import { LandingUrls } from "../../../../constants/urls";
import { useDispatch } from "react-redux";

const HeaderOptions = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const logoutHandler = () => {
        dispatch(logout(() => history.replace(LandingUrls.LOGIN)));
    };

    return (
        <Box className={classes.headerOptionContainer}>
            <Box>
                <IconButton className={classes.btn}>
                    <OpenWithIcon />
                </IconButton>

                <IconButton className={classes.btn}>
                    <LockIcon />
                </IconButton>

                <IconButton className={classes.btn}>
                    <InfoOutlinedIcon />
                </IconButton>

                <IconButton className={classes.btn}>
                    <HelpOutlineOutlinedIcon />
                </IconButton>
            </Box>

            <Box className={classes.avatarContainer} onClick={handleClick}>
                <Avatar src={Images.AvatarIcon} />
                <Box>
                    <Typography className={classes.name} variant="body1">
                        John Doe
                    </Typography>
                    <Typography className={classes.role} variant="body2">
                        Admin
                    </Typography>
                </Box>
                <Box className={classes.iconContent}>
                    <ArrowDropDownOutlinedIcon />
                </Box>
            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                className={classes.popOver}
            >
                <Box className={classes.popOverContainer}>
                    <Box textAlign="center" mb={5}>
                        <Avatar
                            src={Images.AvatarIcon}
                            className={classes.popOverAvatar}
                        />
                        <Typography
                            variant="body1"
                            className={classes.userName}
                        >
                            John Doe
                        </Typography>
                        <Typography
                            variant="body2"
                            className={classes.userEmail}
                        >
                            xyz@gmail.com
                        </Typography>
                    </Box>

                    <Box mb={3}>
                        <Typography className={classes.type}>
                            General
                        </Typography>
                    </Box>

                    <List>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <PersonOutlineIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                Profile
                            </ListItemText>
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                Settings
                            </ListItemText>
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                Users
                            </ListItemText>
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <PersonOutlineIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                Upgrade Plan
                            </ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.listItem}
                            onClick={logoutHandler}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <PowerSettingsNewIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                Log Out
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Popover>
        </Box>
    );
};

export default HeaderOptions;
