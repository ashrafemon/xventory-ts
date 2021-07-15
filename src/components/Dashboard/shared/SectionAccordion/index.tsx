import {Accordion, AccordionDetails, AccordionSummary, makeStyles,} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import React from "react";

const useStyles = makeStyles(() => ({
    accordion: {
        backgroundColor: "#1F2129",
        padding: "10px 15px",
        borderRadius: "8px !important",
        marginBottom: 20,
    },
    accordionSummary: {
        justifyContent: "flex-start",
        "& .MuiAccordionSummary-content": {
            flexGrow: "initial",
        },
        "& .MuiAccordionSummary-expandIcon.Mui-expanded": {
            transform: "rotate(90deg)",
        },
        "& .MuiIconButton-root": {
            color: "#fff",
        },

        "& .MuiTypography-root": {
            color: "#fff",
            fontWeight: 600,

            "& .MuiSvgIcon-root": {
                position: "relative",
                top: 2,
            },
        },
    },
}));

const SectionAccordion = ({title, children}) => {
    const classes = useStyles();
    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ArrowRightIcon fontSize="large"/>}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
};

export default SectionAccordion;
