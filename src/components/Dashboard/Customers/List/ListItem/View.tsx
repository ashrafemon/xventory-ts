import { Box } from "@material-ui/core";
import React from "react";
import CrudLabelBox from "../../../shared/CrudLabelBox";

const View = ({ data }) => {
    return (
        <>
            <Box mb={1}>
                <CrudLabelBox label="Name" value={data && data.name} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Credit Balance"
                    value={data && data.creditBalance}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Phone" value={data && data.phone} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Email" value={data && data.email} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Gender" value={data && data.gender} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Status" value={data && data.status} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    multiple
                    label="Store List"
                    value={data && data.storeList}
                />
            </Box>
        </>
    );
};

export default View;
