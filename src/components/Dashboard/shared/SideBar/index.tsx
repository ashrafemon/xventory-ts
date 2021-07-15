import { Avatar, Box, Hidden, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Images } from "../../../../constants/themeData";
import { TOGGLE_SIDEBAR } from "../../../../store/types";
import SideBarNav from "./SideBarNav";
import { useStyles } from "./styled";

const SideBar = () => {
    const classes = useStyles();
    const { menuList, stores } = useSelector(
        (state: RootStateOrAny) => state.site
    );
    const dispatch = useDispatch();

    const collapseHandler = (state) => {
        dispatch({
            type: TOGGLE_SIDEBAR,
            payload: state,
        });
    };

    return (
        <Box className={classes.wrapper}>
            <Hidden lgUp>
                <IconButton
                    className={classes.closeBtn}
                    onClick={() => collapseHandler(false)}
                >
                    <CloseIcon />
                </IconButton>
            </Hidden>

            <Box className={classes.logoContainer}>
                <Avatar className={classes.logo} src={Images.XventoryLogo} />
            </Box>

            <Box className={classes.storeFieldContainer}>
                <Typography variant="body1" className={classes.storeFieldLabel}>
                    Shop Name
                </Typography>
                {/*<Autocomplete*/}
                {/*    closeIcon={false}*/}
                {/*    className={classes.storeField}*/}
                {/*    fullWidth*/}
                {/*    options={stores}*/}
                {/*    getOptionLabel={(option) => option.name}*/}
                {/*    renderInput={(params) => (*/}
                {/*        <CustomTextField*/}
                {/*            {...params}*/}
                {/*            fullWidth*/}
                {/*            variant="outlined"*/}
                {/*        />*/}
                {/*    )}*/}
                {/*/>*/}
            </Box>

            <Box>
                <Typography variant="body1" className={classes.storeFieldLabel}>
                    General
                </Typography>

                <SideBarNav list={menuList} />
            </Box>
        </Box>
    );
};

export default SideBar;
