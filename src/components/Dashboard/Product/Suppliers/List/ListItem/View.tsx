import { Box } from "@material-ui/core";
import React from "react";
import CrudLabelBox from "../../../../shared/CrudLabelBox";

const View = ({ data }) => {
    return (
        <>
            {/* <Box mb={1}>
                <CrudLabelBox label="ID" value={data && data.id} />
            </Box> */}
            <Box mb={1}>
                <CrudLabelBox label="Name" value={data && data.name} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Code" value={data && data.code} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Phone" value={data && data.phone} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Email" value={data && data.email} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Details" value={data && data.details} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Street Address"
                    value={data && data.address && data.address.streetAddress}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="District"
                    value={
                        data &&
                        data.address &&
                        data.address.district &&
                        data.address.district.name
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="SubDistrict"
                    value={
                        data &&
                        data.address &&
                        data.address.subDistrict &&
                        data.address.subDistrict.name
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Post office"
                    value={
                        data &&
                        data.address &&
                        data.address.postOffice &&
                        data.address.postOffice.name
                    }
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
