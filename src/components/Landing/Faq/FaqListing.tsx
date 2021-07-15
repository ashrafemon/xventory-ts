import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { useStyles } from "./styled";

const FaqListing = ({ data = [] }) => {
    const classes = useStyles();
    return (
        <>
            {data.map((item, i) => (
                <Box className={classes.accordionItem} key={i}>
                    <Accordion className={classes.accordion} elevation={0}>
                        <AccordionSummary
                            className={classes.accordionHeader}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography
                                variant="h6"
                                className={classes.accordionHeading}
                            >
                                {item.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <Typography
                                variant="h6"
                                className={classes.accordionDescription}
                            >
                                {item.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </>
    );
};

export default FaqListing;
