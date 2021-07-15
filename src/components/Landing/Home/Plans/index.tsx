import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React, { useState } from "react";
import { useStyles } from "./styled";

const Plans = () => {
    const classes = useStyles();

    const [plans] = useState([
        {
            title: "Basic License",
            type: "basic",
            price: "৳ 5000",
            duration: "2 month",
            description:
                "luctus dapibus sapien. Vestibulum a Suspendisse cursus mattis orci.",
            features: [
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
            ],
        },
        {
            title: "Basic License",
            type: "pro",
            price: "৳ 5000",
            duration: "2 month",
            description:
                "luctus dapibus sapien. Vestibulum a Suspendisse cursus mattis orci.",
            features: [
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
            ],
        },
        {
            title: "Basic License",
            type: "moderate",
            price: "৳ 5000",
            duration: "2 month",
            description:
                "luctus dapibus sapien. Vestibulum a Suspendisse cursus mattis orci.",
            features: [
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
                {
                    title: "Suspendisse cursus mattis orci. ",
                },
            ],
        },
    ]);

    const renderBgClass = (type) => {
        if (type === "basic") {
            return classes.basicCard;
        } else if (type === "pro") {
            return classes.proCard;
        } else if (type === "moderate") {
            return classes.moderateCard;
        }
    };

    const renderBtnClass = (type) => {
        if (type === "basic") {
            return classes.basicBtn;
        } else if (type === "pro") {
            return classes.proBtn;
        } else if (type === "moderate") {
            return classes.moderateBtn;
        }
    };

    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="lg">
                <Grid
                    container
                    justify="center"
                    alignItems="stretch"
                    spacing={5}
                    style={{ overflow: "hidden" }}
                >
                    {plans.map((item, i) => (
                        <Grid
                            key={i}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            className="planBox"
                        >
                            <Card
                                elevation={6}
                                className={`${classes.itemCard} ${renderBgClass(
                                    item.type
                                )}`}
                            >
                                <CardContent
                                    className={classes.itemCardContent}
                                >
                                    <Box className={classes.textContent}>
                                        <Typography
                                            variant="h4"
                                            className={classes.price}
                                        >
                                            {item.price}{" "}
                                            <Typography
                                                variant="caption"
                                                className={classes.duration}
                                            >
                                                {item.duration}
                                            </Typography>
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            className={classes.title}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className={classes.description}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>

                                    <Box className={classes.featureBox}>
                                        <List className={classes.list}>
                                            {item.features.map((item, i) => (
                                                <ListItem
                                                    key={i}
                                                    className={classes.listItem}
                                                >
                                                    <ListItemIcon
                                                        className={
                                                            classes.listItemIcon
                                                        }
                                                    >
                                                        <CheckIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        className={
                                                            classes.listItemText
                                                        }
                                                    >
                                                        {item.title}
                                                    </ListItemText>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className={`${
                                            classes.purchaseBtn
                                        } ${renderBtnClass(item.type)}`}
                                    >
                                        Purchase Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Plans;
