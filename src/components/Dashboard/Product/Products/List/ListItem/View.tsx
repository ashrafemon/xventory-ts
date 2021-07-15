import { Box } from "@material-ui/core";
import React from "react";
import CrudLabelBox from "../../../../shared/CrudLabelBox";

const View = ({ data }) => {
    return (
        <>
            <Box mb={1}>
                <CrudLabelBox label="Type" value={data && data.type} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Name" value={data && data.name} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Code" value={data && data.code} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Description"
                    value={data && data.description}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Category"
                    value={data && data.category && data.category.name}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Supplier"
                    value={data && data.supplier && data.supplier.name}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Box"
                    value={data && data.box && data.box.name}
                />
            </Box>

            <Box mb={1}>
                <CrudLabelBox
                    label="Brand"
                    value={data && data.brand && data.brand.name}
                />
            </Box>

            <Box mb={1}>
                <CrudLabelBox
                    label="Unit"
                    value={data && data.unit && data.unit.name}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="TaxRate"
                    value={data && data.taxRate && data.taxRate.name}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="TaxMethod"
                    value={data && data.taxMethod}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Barcode Symbology"
                    value={data && data.barcodeSymbology}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Expired At"
                    value={data && data.expiredAt}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Price" value={data && data.price} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Alert Quantity"
                    value={data && data.alertQuantity}
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
