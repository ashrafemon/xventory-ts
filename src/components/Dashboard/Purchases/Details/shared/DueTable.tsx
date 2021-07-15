import {Box, Table, TableBody, TableContainer, TableRow,} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {RootStateOrAny, useSelector} from "react-redux";
import {PurchaseTableColorCell} from "../../../../../styles/globalStyles";

const DueTable = () => {
    const {purchaseForm} = useSelector(
        (state: RootStateOrAny) => state.purchases
    );
    const [dueAmount, setDueAmount] = useState(0);
    const [changeAmount, setChangeAmount] = useState(0);
    const {
        purchasePaymentInformationList, purchaseCartInformationList, orderTax,
        shippingCharge,
        othersCharge,
        discount,
    } =
        purchaseForm;

    useEffect(() => {
        let totalPaid = 0;
        let totalPayable = 0;
        let totalDue = 0;
        let totalChange = 0;

        if (purchaseCartInformationList && purchaseCartInformationList.length) {
            purchaseCartInformationList.forEach((item) => {
                let itemSubTotal = 0
                if (item.product.taxMethod.toLowerCase() === 'exclusive') {
                    itemSubTotal = parseFloat(item.quantity) * parseFloat(item.sellPrice) + (parseFloat(item.product.taxRate.rate) * parseFloat(item.quantity))
                } else {
                    itemSubTotal = parseFloat(item.quantity) * parseFloat(item.sellPrice)
                }
                totalPayable += itemSubTotal;
            });

            if (orderTax) {
                totalPayable += parseFloat(orderTax);
            }
            if (shippingCharge) {
                totalPayable += parseFloat(shippingCharge);
            }

            if (othersCharge) {
                totalPayable += parseFloat(othersCharge);
            }

            if (discount) {
                totalPayable -= parseFloat(discount);
            }
        }

        if (
            purchasePaymentInformationList &&
            purchasePaymentInformationList.length
        ) {
            purchasePaymentInformationList.forEach((item) => {
                totalPaid += parseFloat(item.paidAmount);
            });
        }

        if (totalPayable < totalPaid) {
            totalChange = totalPaid - totalPayable;
            totalDue = 0;
        } else {
            totalDue = totalPayable - totalPaid;
        }

        setDueAmount(totalDue);
        setChangeAmount(totalChange);
    }, [purchaseCartInformationList, purchasePaymentInformationList]);

    return (
        <TableContainer>
            <Table
                style={{
                    borderCollapse: "separate",
                    borderSpacing: "0 10px",
                }}
            >
                <TableBody>
                    <TableRow>
                        <PurchaseTableColorCell
                            style={{
                                backgroundColor: "#313442",
                                color: "#EB5757",
                            }}
                        >
                            <Box textAlign="right">Due :</Box>
                        </PurchaseTableColorCell>
                        <PurchaseTableColorCell
                            style={{
                                backgroundColor: "#313442",
                                color: "#63F58C",
                            }}
                        >
                            {dueAmount}
                        </PurchaseTableColorCell>
                        <PurchaseTableColorCell
                            style={{backgroundColor: "#313442"}}
                        />
                    </TableRow>
                    <TableRow>
                        <PurchaseTableColorCell
                            style={{
                                backgroundColor: "#313442",
                                color: "#63F58C",
                            }}
                        >
                            <Box textAlign="right">Change :</Box>
                        </PurchaseTableColorCell>
                        <PurchaseTableColorCell
                            style={{
                                backgroundColor: "#313442",
                                color: "#63F58C",
                            }}
                        >
                            {changeAmount}
                        </PurchaseTableColorCell>
                        <PurchaseTableColorCell
                            style={{backgroundColor: "#313442"}}
                        ></PurchaseTableColorCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DueTable;
