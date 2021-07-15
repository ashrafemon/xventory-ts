import { Box } from "@material-ui/core";
import React from "react";
import CrudLabelBox from "../../../../shared/CrudLabelBox";

const View = ({ data }) => {
    return (
        <>
            <Box mb={1}>
                <CrudLabelBox label="ID" value={data && data.id} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Title" value={data && data.title} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Code" value={data && data.code} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Symbol Left"
                    value={data && data.symbolLeft}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Symbol Right"
                    value={data && data.symbolRight}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Decimal Place"
                    value={data && data.decimalPlace}
                />
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
