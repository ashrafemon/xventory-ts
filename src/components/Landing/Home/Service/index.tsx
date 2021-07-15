import { Box, Grid, Typography, Avatar, Container } from "@material-ui/core";
import React from "react";
import { Images } from "../../../../constants/themeData";
import { useStyles } from "./styled";

const Service = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="lg">
                <Grid container justify="space-between" alignItems="center">
                    <Grid
                        item
                        xs={12}
                        sm={5}
                        md={4}
                        className={classes.relativePosition}
                    >
                        <Avatar
                            src={Images.Service24}
                            className={classes.image}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h5" className={classes.title}>
                            We Will Provide You support For
                        </Typography>
                        <Typography variant="h2" className={classes.time}>
                            24*7
                        </Typography>
                        <Typography variant="h6" className={classes.text}>
                            Aliquam elementum felis massa, ac efficitur tortor
                            tempus et.. Aliquam elementum felis massa, ac
                            efficitur tortor tempus et..Aliquam elementum felis
                            massa, ac efficitur tortor tempus et.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Service;
