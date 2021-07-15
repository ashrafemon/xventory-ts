import {Box, IconButton, TableRow} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {
    PurchaseTableAutocomplete,
    PurchaseTableColorCell,
    PurchaseTableTextField,
} from "../../../../../styles/globalStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import {RootStateOrAny, useSelector} from "react-redux";

const PaymentItem = ({
                         item,
                         deletePaymentHandler,
                         paymentChangeHandler,
                         // payAmountChangeHandler,
                         index,
                     }) => {
    const {paymentMethods} = useSelector(
        (state: RootStateOrAny) => state.paymentMethods
    );

    const [selectedPayment, setSelectedPayment] = useState({});

    let payment = item.paymentMethod;
    const {paymentMethodList} = paymentMethods;

    useEffect(() => {
        if (paymentMethodList && paymentMethodList.length) {
            let selectPayment = {};
            paymentMethodList.forEach((paymentItem) => {
                if (paymentItem.id === payment.id) selectPayment = paymentItem;
            });

            setSelectedPayment((prevState) => selectPayment);
        }
    }, [payment.id, paymentMethodList]);

    return (
        <>
            <TableRow>
                <PurchaseTableColorCell style={{backgroundColor: "#60D1F6"}}>
                    <Box textAlign="right">Payment Method :</Box>
                </PurchaseTableColorCell>
                <PurchaseTableColorCell style={{backgroundColor: "#60D1F6"}}>
                    <Box textAlign="right">{item.paymentMethod.name}</Box>
                </PurchaseTableColorCell>
                <PurchaseTableColorCell style={{backgroundColor: "#60D1F6"}}>
                    <IconButton
                        color="secondary"
                        onClick={() => deletePaymentHandler(index)}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </PurchaseTableColorCell>
            </TableRow>
            <TableRow>
                <PurchaseTableColorCell style={{backgroundColor: "#60D1F6"}}>
                    <Box textAlign="right">Choose Another Method :</Box>
                </PurchaseTableColorCell>
                <PurchaseTableColorCell style={{backgroundColor: "#60D1F6"}}>
                    <PurchaseTableAutocomplete
                        options={
                            paymentMethods && paymentMethods.paymentMethodList
                        }
                        getOptionLabel={(option) => option["name"]}
                        fullWidth
                        size="small"
                        value={selectedPayment}
                        onChange={(e, data) =>
                            paymentChangeHandler(index, data)
                        }
                        closeIcon={false}
                        renderInput={(params) => (
                            <PurchaseTableTextField
                                fullWidth
                                variant="outlined"
                                {...params}
                            />
                        )}
                    />
                </PurchaseTableColorCell>
                <PurchaseTableColorCell
                    style={{backgroundColor: "#60D1F6"}}
                />
            </TableRow>
            <TableRow>
                <PurchaseTableColorCell style={{backgroundColor: "#63F58C"}}>
                    <Box textAlign="right">Paid Amount :</Box>
                </PurchaseTableColorCell>
                <PurchaseTableColorCell style={{backgroundColor: "#63F58C"}}>
                    <PurchaseTableTextField
                        variant="outlined"
                        fullWidth
                        value={item.paidAmount}
                        size="small"
                        // onChange={(e) =>
                        //     payAmountChangeHandler(index, e.target.value)
                        // }
                    />
                </PurchaseTableColorCell>
                <PurchaseTableColorCell
                    style={{backgroundColor: "#63F58C"}}
                ></PurchaseTableColorCell>
            </TableRow>
        </>
    );
};

export default PaymentItem;
