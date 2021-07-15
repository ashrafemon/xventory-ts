import {Box, Table, TableBody, TableContainer} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fieldChangeHandler} from "../../../../../store/actions/dashboard/quotationActions";
import {PurchaseTablePricingCell, PurchaseTableRow, PurchaseTableTextField,} from "../../../../../styles/globalStyles";

const PricingTable = () => {
    const dispatch = useDispatch();
    const {quotationForm} = useSelector(
        (state: RootStateOrAny) => state.quotations
    );
    const [subTotalPrice, setSubTotalPrice] = useState(0);

    const changeHandler = (field, value) => {
        dispatch(fieldChangeHandler(field, value));
    };

    const {quotationCartInformationList} = quotationForm;

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
            });
            setSubTotalPrice(price);
        } else {
            setSubTotalPrice(0);
        }
    }, [quotationCartInformationList]);

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <PurchaseTableRow>
                        <PurchaseTablePricingCell>
                            <Box textAlign="right">Subtotal :</Box>
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell>
                            {subTotalPrice}
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell/>
                    </PurchaseTableRow>
                    <PurchaseTableRow>
                        <PurchaseTablePricingCell>
                            <Box textAlign="right">Order Tax (%) :</Box>
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell>
                            <PurchaseTableTextField
                                disabled={!quotationCartInformationList.length}
                                type="number"
                                size="small"
                                variant="outlined"
                                InputProps={{inputProps: {min: 0}}}
                                fullWidth
                                value={quotationForm.orderTax}
                                onChange={(e) =>
                                    changeHandler("orderTax", e.target.value)
                                }
                            />
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell/>
                    </PurchaseTableRow>
                    <PurchaseTableRow>
                        <PurchaseTablePricingCell>
                            <Box textAlign="right">Shipping Charge :</Box>
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell>
                            <PurchaseTableTextField
                                disabled={!quotationCartInformationList.length}
                                type="number"
                                size="small"
                                variant="outlined"
                                InputProps={{inputProps: {min: 0}}}
                                fullWidth
                                value={quotationForm.shippingCharge}
                                onChange={(e) =>
                                    changeHandler(
                                        "shippingCharge",
                                        e.target.value
                                    )
                                }
                            />
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell></PurchaseTablePricingCell>
                    </PurchaseTableRow>
                    <PurchaseTableRow>
                        <PurchaseTablePricingCell>
                            <Box textAlign="right">Others Charge :</Box>
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell>
                            <PurchaseTableTextField
                                disabled={!quotationCartInformationList.length}
                                type="number"
                                size="small"
                                variant="outlined"
                                InputProps={{inputProps: {min: 0}}}
                                fullWidth
                                value={quotationForm.othersCharge}
                                onChange={(e) =>
                                    changeHandler(
                                        "othersCharge",
                                        e.target.value
                                    )
                                }
                            />
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell></PurchaseTablePricingCell>
                    </PurchaseTableRow>
                    <PurchaseTableRow>
                        <PurchaseTablePricingCell>
                            <Box textAlign="right">Discount Amount :</Box>
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell>
                            <PurchaseTableTextField
                                disabled={!quotationCartInformationList.length}
                                type="number"
                                size="small"
                                variant="outlined"
                                InputProps={{inputProps: {min: 0}}}
                                fullWidth
                                value={quotationForm.discount}
                                onChange={(e) =>
                                    changeHandler("discount", e.target.value)
                                }
                            />
                        </PurchaseTablePricingCell>
                        <PurchaseTablePricingCell></PurchaseTablePricingCell>
                    </PurchaseTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PricingTable;
