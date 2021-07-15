import {
    Box,
    Grid,
    Avatar,
    Typography,
    ListItemIcon,
    List,
    ListItem,
    ListItemText,
    Container,
} from "@material-ui/core";
import React, { useState } from "react";
import { Images } from "../../../../constants/themeData";
import { useStyles } from "./styled";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Tween } from "react-gsap";

const Feature = () => {
    const classes = useStyles();

    const [list] = useState([
        { title: "Lorem Ipsum Lorem" },
        { title: "nte ipsum primis in faucibus orci" },
        { title: "posuere cubilia curae; Aliquam erat volutpat." },
        { title: " No specific time limits." },
    ]);

    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="md">
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    spacing={5}
                >
                    <Tween
                        from={{ x: "-100%" }}
                        to={{
                            x: "0%",
                            scrollTrigger: {
                                trigger: ".animeBox",
                                start: "top center",
                                end: "bottom -=100",
                                scrub: 2,
                                markers: false,
                            },
                        }}
                    >
                        <Grid item md={6} sm={12} xs={12} className="animeBox">
                            <Avatar
                                src={Images.ProductFeature}
                                className={classes.featureImg}
                            />
                        </Grid>
                    </Tween>

                    <Tween
                        from={{ x: "100%" }}
                        to={{
                            x: "0%",
                            scrollTrigger: {
                                trigger: ".animeBox",
                                start: "top center",
                                end: "bottom -=100",
                                scrub: 2,
                                markers: false,
                            },
                        }}
                    >
                        <Grid item md={6} sm={12} xs={12}>
                            <Box mb={3}>
                                <Typography
                                    variant="h4"
                                    className={classes.title}
                                >
                                    Our Product Feature
                                </Typography>
                            </Box>

                            <Box mb={3}>
                                <Typography
                                    variant="body1"
                                    className={classes.text}
                                >
                                    You can explore the features that we provide
                                    with fun and have their own functions each
                                    feature.
                                </Typography>
                            </Box>

                            <List className={classes.list}>
                                {list.map((item, i) => (
                                    <ListItem
                                        key={i}
                                        className={classes.listItem}
                                    >
                                        <ListItemIcon
                                            className={classes.listItemIcon}
                                        >
                                            <CheckCircleIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.listItemText}
                                        >
                                            {item.title}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Tween>
                </Grid>
            </Container>
        </Box>
    );
};

export default Feature;
