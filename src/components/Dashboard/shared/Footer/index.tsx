import { Container, Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styled";
import {RootStateOrAny, useSelector} from "react-redux";

const Footer = () => {
    const classes = useStyles();
    const { sidebarShow } = useSelector((state:RootStateOrAny) => state.site);

    return (
        <Box
            className={`${classes.wrapper} ${
                !sidebarShow && classes.fullWidth
            }`}
            py={2}
        >
            <Container maxWidth="xl">
                <Grid container alignItems="center" justify="space-between">
                    <Grid item xs={12} sm={8} md={8}>
                        <Typography variant="h6" className={classes.text}>
                            Copyright @ 2021 | ProjectX.com.bd, All Right
                            Reserved
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography
                            variant="h6"
                            className={`${classes.text} ${classes.versionText}`}
                        >
                            Version 1.0.0
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
