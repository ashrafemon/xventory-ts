import {Box} from "@material-ui/core";
import React from "react";
import CrudLabelBox from "../../../shared/CrudLabelBox";

const View = ({data}) => {
    return (
        <>
            <Box mb={1}>
                <CrudLabelBox label="Date" value={data && data.date}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Loan From" value={data && data.loanFrom}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="ReferenceNo" value={data && data.referenceNo}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Load Headline" value={data && data.loadHeadline}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Amount" value={data && data.amount}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Interest" value={data && data.interest}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Details" value={data && data.details}/>
            </Box>
        </>
    );
};

export default View;
