import {Box, Table, TableBody, TableContainer, TableRow,} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {
    CrudDialog,
    CrudDialogCloseBtn,
    CrudDialogContent,
    CrudDialogHeader,
    CrudDialogTitle,
    PurchaseSubmitButton,
    PurchaseTableColorCell,
    SubmitButton,
} from "../../../../../styles/globalStyles";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import PaymentItem from "./PaymentItem";
import CrudSelector from "../../../shared/CrudSelector";
import {fetchPaymentMethods} from "../../../../../store/actions/dashboard/system/paymentActions";
import {fieldChangeHandler} from "../../../../../store/actions/dashboard/purchaseActions";
import CrudTextBox from "../../../shared/CrudTextBox";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const PaymentTable = () => {
    const dispatch = useDispatch();
    const {purchaseForm} = useSelector(
        (state: RootStateOrAny) => state.purchases
    );
    const {paymentMethods} = useSelector(
        (state: RootStateOrAny) => state.paymentMethods
    );
    const [totalPayable, setTotalPayable] = useState(0);
    const [open, setOpen] = useState(false);
    const [paymentOptions, setPaymentOptions] = useState([]);
    const [newPayment, setNewPayment] = useState({
        paymentMethod: "",
        paidAmount: "0",
        note: "",
    });
    // const [selectedPayment, setSelectedPayment] = useState("");

    const {
        purchasePaymentInformationList,
        purchaseCartInformationList,
        orderTax,
        shippingCharge,
        othersCharge,
        discount,
    } = purchaseForm;
    const {paymentMethodList} = paymentMethods;

    const addPaymentModal = (value) => {
        setOpen(value);
        // if (value === true) {
        //     dispatch(fetchPaymentMethods());
        // }
    };

    const closePaymentModal = () => {
        setOpen(false);
    };

    const addPaymentHandler = () => {
        if (newPayment) {
            let paymentMethod;
            paymentMethodList.forEach(
                (item) =>
                    item.id === newPayment.paymentMethod &&
                    (paymentMethod = item)
            );

            let payments = [
                ...purchasePaymentInformationList,
                {
                    paymentMethod: paymentMethod,
                    paidAmount: newPayment.paidAmount,
                    note: newPayment.note,
                },
            ];

            dispatch(
                fieldChangeHandler("purchasePaymentInformationList", payments)
            );
            setOpen(false);
            setNewPayment({
                paymentMethod: "",
                paidAmount: "0",
                note: "",
            });
        }
    };

    const deletePaymentHandler = (itemIndex) => {
        let payments = [...purchasePaymentInformationList];
        payments = payments.filter((item, i) => i !== itemIndex);
        dispatch(
            fieldChangeHandler("purchasePaymentInformationList", payments)
        );
    };

    const paymentChangeHandler = (itemIndex, value) => {
        let payments = [...purchasePaymentInformationList];
        payments[itemIndex] = {
            ...payments[itemIndex],
            paymentMethod: value,
        };
        dispatch(
            fieldChangeHandler("purchasePaymentInformationList", payments)
        );
    };

    const payAmountChangeHandler = (itemIndex, value) => {
        let payments = [...purchasePaymentInformationList];
        payments[itemIndex] = {
            ...payments[itemIndex],
            paidAmount: value,
        };
        dispatch(
            fieldChangeHandler("purchasePaymentInformationList", payments)
        );
    };

    useEffect(() => {
        if (purchaseCartInformationList && purchaseCartInformationList.length) {
            let price = 0;
            purchaseCartInformationList.forEach((item) => {
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
        purchaseCartInformationList,
        shippingCharge,
    ]);

    useEffect(() => {
        if (paymentMethodList && paymentMethodList.length) {
            let payments = [];
            paymentMethodList.forEach((item) => {
                payments.push({text: item.name, value: item.id});
            });
            setPaymentOptions(payments);
        }
    }, [paymentMethodList]);

    return (
        <>
            <TableContainer>
                <Table
                    style={{
                        borderCollapse: "separate",
                        borderSpacing: "0 10px",
                    }}
                >
                    {purchaseCartInformationList &&
                    purchaseCartInformationList.length > 0 && (
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

                            {purchasePaymentInformationList &&
                            purchasePaymentInformationList.length > 0 &&
                            purchasePaymentInformationList.map(
                                (item, i) => (
                                    <>
                                        <PaymentItem
                                            index={i}
                                            item={item}
                                            deletePaymentHandler={
                                                deletePaymentHandler
                                            }
                                            paymentChangeHandler={
                                                paymentChangeHandler
                                            }
                                            // payAmountChangeHandler={
                                            //     payAmountChangeHandler
                                            // }
                                        />
                                    </>
                                )
                            )}

                            <TableRow>
                                <PurchaseTableColorCell colSpan={3}>
                                    <Box textAlign="right">
                                        <PurchaseSubmitButton
                                            type="button"
                                            onClick={() =>
                                                addPaymentModal(true)
                                            }
                                        >
                                            Add Payment
                                        </PurchaseSubmitButton>
                                    </Box>
                                </PurchaseTableColorCell>
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
            </TableContainer>

            <CrudDialog open={open} maxWidth="xs" fullWidth>
                <CrudDialogHeader>
                    <CrudDialogTitle>Add Payment</CrudDialogTitle>
                    <CrudDialogCloseBtn onClick={closePaymentModal}>
                        <CloseOutlinedIcon fontSize="large"/>
                    </CrudDialogCloseBtn>
                </CrudDialogHeader>
                <CrudDialogContent>
                    <Box mb={2}>
                        <CrudSelector
                            value={newPayment.paymentMethod}
                            options={paymentOptions}
                            label="Payment Method"
                            onChange={(e) =>
                                setNewPayment((prevState) => ({
                                    ...prevState,
                                    paymentMethod: e.target.value,
                                }))
                            }
                        />
                    </Box>

                    <Box mb={2}>
                        <CrudTextBox
                            type="number"
                            label="Paid Amount"
                            value={newPayment.paidAmount}
                            onChange={(e) =>
                                setNewPayment((prevState) => ({
                                    ...prevState,
                                    paidAmount: e.target.value,
                                }))
                            }
                        />
                    </Box>

                    <Box mb={2}>
                        <CrudTextBox
                            type="text"
                            multiline
                            label="Note"
                            value={newPayment.note}
                            onChange={(e) =>
                                setNewPayment((prevState) => ({
                                    ...prevState,
                                    note: e.target.value,
                                }))
                            }
                        />
                    </Box>

                    <Box textAlign="center" mt={2}>
                        <SubmitButton onClick={addPaymentHandler}>
                            Add Payment
                        </SubmitButton>
                    </Box>
                </CrudDialogContent>
            </CrudDialog>
        </>
    );
};

export default PaymentTable;
