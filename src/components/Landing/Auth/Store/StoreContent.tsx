import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    List,
    ListItem,
    Typography,
} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import React, { useCallback, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Images } from "../../../../constants/themeData";
import { DashboardUrls } from "../../../../constants/urls";
import { fetchStores } from "../../../../store/actions/storeAction";
import { SET_STORE } from "../../../../store/types";
import { useStyles } from "./styled";
import { loginWithStore } from "../../../../store/actions/authAction";

const StoreContent = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { stores, selectedStore } = useSelector(
        (state: RootStateOrAny) => state.stores
    );

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    const setStoreHandler = useCallback(
        (item) => {
            let path = DashboardUrls.HOME.replace(":storeId", item.id);
            dispatch({ type: SET_STORE, payload: item });
            dispatch(
                loginWithStore(() => {
                    history.replace(path);
                })
            );
        },
        [dispatch, history]
    );

    useEffect(() => {
        if (stores && stores.storeList && stores.storeList.length === 1) {
            dispatch({ type: SET_STORE, payload: stores.storeList[0] });
            setStoreHandler(stores.storeList[0]);
        }
    }, [dispatch, setStoreHandler, stores]);

    // useEffect(() => {
    //     if (selectedStore) {
    //         dispatch(
    //             loginWithStore(() => {
    //                 history.replace(selectedStore.code + DashboardUrls.HOME);
    //             })
    //         );
    //     }
    // }, [dispatch, history, selectedStore]);

    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="lg">
                <Grid container justifyContent="center">
                    <Grid item md={6} sm={12}>
                        <Box>
                            <Typography
                                className={classes.greetingTitle}
                                variant="h5"
                            >
                                Good Morning ,
                            </Typography>
                            <Typography
                                className={classes.selectText}
                                variant="h6"
                            >
                                Select a shop which you want to view
                            </Typography>

                            <List>
                                {stores &&
                                    stores.storeList &&
                                    stores.storeList.map((item, i) => (
                                        <ListItem
                                            className={classes.listItem}
                                            key={i}
                                        >
                                            <Button
                                                className={classes.storeItemBtn}
                                                startIcon={<StorefrontIcon />}
                                                endIcon={
                                                    <Avatar
                                                        src={
                                                            Images.RightArrowIcon
                                                        }
                                                    />
                                                }
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                onClick={() =>
                                                    setStoreHandler(item)
                                                }
                                            >
                                                {item.name}
                                            </Button>
                                        </ListItem>
                                    ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default StoreContent;
