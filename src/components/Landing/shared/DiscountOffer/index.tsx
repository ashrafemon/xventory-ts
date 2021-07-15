import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styled";

const DiscountOffer = () => {
    const classes = useStyles();

    return (
        <Box textAlign="center" py={2} className={classes.box}>
            <Typography variant="body1" className={classes.text}>
                To support businesses affected by the COVID lockdown, we are
                offering a special package with{" "}
                <span className={classes.discountText}>50% Discount .</span>
                <Link to="/">Click here to learn more</Link>
            </Typography>
        </Box>
    );
};

export default DiscountOffer;
