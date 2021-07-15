import {
    Box,
    IconButton,
    Popover,
    Typography,
    Grid,
    TextField,
    InputAdornment,
} from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import React from "react";
import { useStyles } from "./styled";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const PageTitle = ({ title }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Box pb={5}>
            <Grid container spacing={2}>
                <Grid item md={8} sm={6} xs={12}>
                    <Typography variant="h4" className={classes.pageTitle}>
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.pageSubTitle}
                    >
                        Thursday, 21 Nov, 2021{" "}
                        <IconButton
                            className={classes.pageSubTitleCollapsibleBtn}
                            onClick={handleClick}
                        >
                            <ArrowDropDownOutlinedIcon />
                        </IconButton>
                    </Typography>
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
                    >
                        <Box p={2}>
                            <Typography>
                                The content of the Popover.
                            </Typography>
                        </Box>
                    </Popover>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        className={classes.searchField}
                        placeholder="Search for invoice, order, name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    className={classes.searchFieldIcon}
                                >
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PageTitle;
