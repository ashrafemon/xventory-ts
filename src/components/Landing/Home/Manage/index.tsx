import { Box, Grid, Typography, Avatar, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import { Images } from "../../../../constants/themeData";
import { useStyles } from "./styled";

const Manage = () => {
    const classes = useStyles();

    const [leftItems] = useState([
        {
            title: "Lorem Ipsum",
            text: "luctus dapibus sapien. Vestibulum a Suspendisse cursus mattis orci. ",
        },
        {
            title: "Lorem Ipsum",
            text: "luctus dapibus sapien. Vestibulum a Suspendisse cursus mattis orci. ",
        },
        {
            title: "Lorem Ipsum",
            text: "luctus dapibus sapien. Vestibulum a Suspendisse cursus mattis orci. ",
        },
    ]);

    return (
        <Box className={classes.wrapper}>
            <Box textAlign="center" mb={5}>
                <Typography variant="h5" className={classes.sectionTitle}>
                    You can manage
                </Typography>
            </Box>

            <Grid container justify="center">
                <Grid item xs={11}>
                    <Grid container alignItems="stretch">
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className={classes.fullWidth}
                        >
                            <Box className={classes.items}>
                                {leftItems.map((item, i) => (
                                    <Box className={classes.item} key={i}>
                                        <Typography
                                            variant="h5"
                                            className={classes.itemTitle}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className={classes.itemText}
                                        >
                                            {item.text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Hidden smDown>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                className={classes.fullWidth}
                            >
                                <Avatar
                                    src={Images.Manage}
                                    className={classes.manageImg}
                                />
                            </Grid>
                        </Hidden>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className={classes.fullWidth}
                        >
                            <Box className={classes.items}>
                                {leftItems.map((item, i) => (
                                    <Box
                                        key={i}
                                        className={`${classes.item} ${classes.rightSideItem}`}
                                    >
                                        <Typography
                                            variant="h5"
                                            className={classes.itemTitle}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className={classes.itemText}
                                        >
                                            {item.text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Manage;
