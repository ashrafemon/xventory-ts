import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import CrudLabelBox from "../../../shared/CrudLabelBox";

const View = ({data}) => {
    const [products, setProducts] = useState([])
    const [payments, setPayments] = useState([])

    const {purchaseCartInformationList, purchasePaymentInformationList} = data

    useEffect(() => {
        if (purchaseCartInformationList && purchaseCartInformationList.length) {
            let cartProducts = []
            purchaseCartInformationList.forEach((item) => {
                cartProducts.push({name: item.product.name})
            })
            setProducts(cartProducts)
        }
    }, [purchaseCartInformationList])

    useEffect(() => {
        if (purchasePaymentInformationList && purchasePaymentInformationList.length) {
            let cartPayments = []
            purchasePaymentInformationList.forEach((item) => {
                cartPayments.push({name: item.paymentMethod.name + ' (' + item.paidAmount + ')'})
            })
            setPayments(cartPayments)
        }
    }, [purchasePaymentInformationList])

    return (
        <>
            <Box mb={1}>
                <CrudLabelBox label="Invoice Id" value={data && data.invoiceId}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Reference No"
                    value={data && data.referenceNo}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Invoice Type" value={data && data.invoiceType}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="PaymentStatus" value={data && data.paymentStatus}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="shippingStatus" value={data && data.shippingStatus}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="note" value={data && data.note}/>
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    multiple
                    label="Products"
                    value={products}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    multiple
                    label="Payments"
                    value={payments}
                />
            </Box>
        </>
    );
};

export default View;
