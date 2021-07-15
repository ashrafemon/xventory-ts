import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "../styled";
import SummaryButton from "../../shared/SummaryButton";

const Summary = () => {
    const classes = useStyles();

    return (
        <Box className={classes.menuBox}>
            <Box className={classes.summaryItem}>
                <SummaryButton />
            </Box>
            <Box className={classes.summaryItem}>
                <SummaryButton />
            </Box>
            <Box className={classes.summaryItem}>
                <SummaryButton />
            </Box>
            <Box className={classes.summaryItem}>
                <SummaryButton />
            </Box>
        </Box>
    );
};

export default Summary;
