import {Box, Button, Card, CardContent, Grid, makeStyles, Typography,} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom";
import {Colors} from "../../../../constants/themeData";
import {LandingUrls} from "../../../../constants/urls";

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: 8,
        position: "relative",
    },
    basic: {
        backgroundColor: Colors.white4,
    },
    advanced: {
        backgroundColor: Colors.teal2,
    },
    premium: {
        backgroundColor: Colors.yellow1,
    },

    bar: {
        width: 10,
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },
    basicBar: {
        backgroundColor: Colors.black1,
    },
    advancedBar: {
        backgroundColor: Colors.teal1,
    },
    premiumBar: {
        backgroundColor: Colors.yellow2,
    },

    planName: {
        fontWeight: 300,
        fontSize: 30,
    },
    planCost: {
        fontWeight: 600,
        fontSize: 30,
        textAlign: "right",
    },
    buyBtn: {
        textTransform: "capitalize",
        fontSize: 18,
        fontWeight: 600,
    },

    basicBtn: {
        backgroundColor: Colors.black1 + " !important",
        color: Colors.white1,
    },
    advancedBtn: {
        backgroundColor: Colors.teal1 + " !important",
        color: Colors.white1,
    },
    premiumBtn: {
        backgroundColor: Colors.yellow2 + " !important",
        color: Colors.white1,
    },
}));

const PackagePlanSM = ({plan}) => {
    const classes = useStyles();
    const history = useHistory();

    const renderBgClass = (type) => {
        if (type.toLowerCase() === "basic") {
            return classes.basic;
        } else if (type.toLowerCase() === "advance") {
            return classes.advanced;
        } else if (type.toLowerCase() === "premium") {
            return classes.premium;
        }
    };

    const renderBarClass = (type) => {
        if (type.toLowerCase() === "basic") {
            return classes.basicBar;
        } else if (type.toLowerCase() === "advance") {
            return classes.advancedBar;
        } else if (type.toLowerCase() === "premium") {
            return classes.premiumBar;
        }
    };

    const renderBtnClass = (type) => {
        if (type.toLowerCase() === "basic") {
            return classes.basicBtn;
        } else if (type.toLowerCase() === "advance") {
            return classes.advancedBtn;
        } else if (type.toLowerCase() === "premium") {
            return classes.premiumBtn;
        }
    };

    const buyPlanHandler = () => {
        localStorage.setItem('buyPackage', JSON.stringify(plan))
        history.push(LandingUrls.REGISTER)
    }

    return (
        <Card
            elevation={8}
            className={`${classes.card} ${renderBgClass(plan.planMode)}`}
        >
            <Box
                className={`${classes.bar} ${renderBarClass(plan.planMode)}`}
            />
            <CardContent>
                <Box pl={3} mb={3}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography
                                variant="h4"
                                className={classes.planName}
                            >
                                {plan.planMode}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="h4"
                                className={classes.planCost}
                            >
                                {plan.price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box textAlign="right">
                    <Button
                        className={`${classes.buyBtn} ${renderBtnClass(
                            plan.planMode
                        )}`}
                        variant="contained"
                        onClick={buyPlanHandler}
                    >
                        Buy Now
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PackagePlanSM;
