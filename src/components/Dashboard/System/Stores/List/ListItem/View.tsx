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
                <CrudLabelBox label="Store Category" value={data && data.storeCategory} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Vat Registration Number"
                    value={data && data.vatRegistrationNumber}
                />
            </Box>

            {/* Store Preference */}
            <Box mb={1}>
                <CrudLabelBox
                    label="Timezone"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.timezone
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Invoice Edit LifeSpan"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceEditLifeSpan
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Invoice Edit LifeSpan Unit"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceEditLifeSpanUnit
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Invoice Delete LifeSpan"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceDeleteLifeSpan
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Invoice Delete LifeSpan Unit"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceDeleteLifeSpanUnit
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="After Sell Page"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.afterSellPage
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Auto Print Receipt"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.autoPrintReceipt
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Stock Alert Quantity"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.stockAlertQuantity
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Table Item Limit"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.tableItemLimit
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Invoice Footer"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceFooter
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Tax"
                    value={
                        data && data.storePreference && data.storePreference.tax
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Sound Effect"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.soundEffect
                    }
                />
            </Box>

            {/* Store Address */}
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
                    label="Post Office"
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
        </>
    );
};

export default View;
