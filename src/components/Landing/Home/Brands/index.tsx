import { Avatar, Box, Grid } from "@material-ui/core";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Images } from "../../../../constants/themeData";
import { useStyles } from "./styled";

const Brands = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box py={4} className={classes.container}>
                <Grid container justify="center">
                    <Grid item xs={11}>
                        <OwlCarousel
                            className={`${classes.brandCarousel} owl-theme`}
                            items={5}
                            loop
                            margin={10}
                            autoplay
                            nav={true}
                            dots={false}
                            responsive={{
                                0: { items: 2 },
                                700: { items: 3 },
                                1000: { items: 5 },
                            }}
                        >
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand1}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand2}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand3}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand4}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand5}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand1}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand2}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand3}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand4}
                                    className={classes.brand}
                                />
                            </Box>
                            <Box className="item">
                                <Avatar
                                    src={Images.Brand5}
                                    className={classes.brand}
                                />
                            </Box>
                        </OwlCarousel>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Brands;
