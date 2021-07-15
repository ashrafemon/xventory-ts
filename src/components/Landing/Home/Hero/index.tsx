import React from "react";
import {
    Avatar,
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Hidden,
} from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useStyles } from "./styled";
import { Images } from "./../../../../constants/themeData";

import { Tween } from "react-gsap";

const Hero = () => {
    const classes = useStyles();

    return (
        <Box py={5} className={classes.wrapper}>
            <Container maxWidth="xl">
                <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={5}
                >
                    <Tween
                        from={{ y: "-100%" }}
                        to={{ y: "0%" }}
                        ease="back.out(0.5)"
                        duration={3}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            className={`${classes.fullWidth} contentBox`}
                        >
                            <Box mb={4}>
                                <Avatar
                                    src={Images.ProductLogo}
                                    className={classes.logo}
                                />
                            </Box>

                            <Box className={classes.textContent}>
                                <Box mb={2}>
                                    <Typography
                                        variant="h6"
                                        className={classes.title}
                                    >
                                        Is a POS for your business that can make
                                        your life easy
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body2"
                                    className={classes.text}
                                >
                                    Morbi nec mauris velit. Vivamus suscipit
                                    consequat velit gravida semper. Etiam erat
                                    ex, sagittis vitae sem ut,
                                </Typography>
                            </Box>
                            <Box>
                                <Button
                                    variant="outlined"
                                    className={`${classes.btn} ${classes.outlineBtn}`}
                                >
                                    Learn More
                                </Button>
                                <Button
                                    className={`${classes.btn} ${classes.fillBtn}`}
                                    variant="contained"
                                    startIcon={<PlayCircleFilledIcon />}
                                >
                                    Watch Video
                                </Button>
                            </Box>
                        </Grid>
                    </Tween>
                    <Hidden smDown>
                        <Tween
                            from={{ y: "100%" }}
                            to={{ y: "0%" }}
                            ease="back.out(0.5)"
                            duration={3}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                className={classes.fullWidth}
                            >
                                <Avatar
                                    src={Images.HeroImg}
                                    className={classes.heroImg}
                                />
                            </Grid>
                        </Tween>
                    </Hidden>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
