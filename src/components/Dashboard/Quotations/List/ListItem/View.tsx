import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import CrudLabelBox from "../../../shared/CrudLabelBox";

const View = ({ data }) => {
    const [products, setProducts] = useState([]);

    const { quotationCartInformationList } = data;

    useEffect(() => {
        if (
            quotationCartInformationList &&
            quotationCartInformationList.length > 0
        ) {
            let formatProduct = [];
            quotationCartInformationList.forEach((item) => {
                formatProduct.push(item.product);
            });

            setProducts(formatProduct);
        }
    }, [quotationCartInformationList]);

    return (
        <>
            <Box mb={1}>
                <CrudLabelBox
                    label="Reference No"
                    value={data && data.referenceNo}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Note" value={data && data.note} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Customer"
                    value={data && data.customer && data.customer.name}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Sub Total" value={data && data.subTotal} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Order Tax" value={data && data.orderTax} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Shipping Charge"
                    value={data && data.shippingCharge}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Others Charge"
                    value={data && data.othersCharge}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Discount" value={data && data.discount} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Grand Total"
                    value={data && data.grandTotal}
                />
            </Box>

            <Box mb={1}>
                <CrudLabelBox multiple label="Products" value={products} />
            </Box>
        </>
    );
};

export default View;
