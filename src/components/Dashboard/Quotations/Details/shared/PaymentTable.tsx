import {Box, Table, TableBody, TableContainer, TableRow,} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {RootStateOrAny, useSelector} from "react-redux";
import {PurchaseTableColorCell} from "../../../../../styles/globalStyles";

const PaymentTable = () => {
    const {quotationForm} = useSelector(
        (state: RootStateOrAny) => state.quotations
    );
    const [totalPayable, setTotalPayable] = useState(0);

    const {
        quotationCartInformationList,
        orderTax,
        shippingCharge,
        othersCharge,
        discount,
    } = quotationForm;

    useEffect(() => {
        if (
            quotationCartInformationList &&
            quotationCartInformationList.length
        ) {
            let price = 0;
            quotationCartInformationList.forEach((item) => {
                let itemSubTotal = 0
                if (item.product.taxMethod.toLowerCase() === 'exclusive') {
                    itemSubTotal = parseFloat(item.quantity) * parseFloat(item.sellPrice) + (parseFloat(item.product.taxRate.rate) * parseFloat(item.quantity))
                } else {
                    itemSubTotal = parseFloat(item.quantity) * parseFloat(item.sellPrice)
                }
                price += itemSubTotal;
                // price += parseFloat(item.cost);
            });

            if (orderTax) {
                price += parseFloat(orderTax);
            }
            if (shippingCharge) {
                price += parseFloat(shippingCharge);
            }

            if (othersCharge) {
                price += parseFloat(othersCharge);
            }

            if (discount) {
                price -= parseFloat(discount);
            }

            setTotalPayable(price);
        }
    }, [
        discount,
        orderTax,
        othersCharge,
        quotationCartInformationList,
        shippingCharge,
    ]);

    return (
        <>
            <TableContainer>
                <Table
                    style={{
                        borderCollapse: "separate",
                        borderSpacing: "0 10px",
                    }}
                >
                    {quotationCartInformationList &&
                    quotationCartInformationList.length > 0 && (
                        <TableBody>
                            <TableRow>
                                <PurchaseTableColorCell
                                    style={{backgroundColor: "#F3BB4D"}}
                                >
                                    <Box textAlign="right">
                                        Total Payable :
                                    </Box>
                                </PurchaseTableColorCell>
                                <PurchaseTableColorCell
                                    style={{backgroundColor: "#F3BB4D"}}
                                >
                                    <Box textAlign="right">
                                        {totalPayable}
                                    </Box>
                                </PurchaseTableColorCell>
                                <PurchaseTableColorCell
                                    style={{backgroundColor: "#F3BB4D"}}
                                />
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </>
    );
};

export default PaymentTable;
