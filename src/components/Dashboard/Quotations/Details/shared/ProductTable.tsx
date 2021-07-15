import {IconButton, Table, TableBody, TableContainer, TableHead, Typography,} from "@material-ui/core";
import React from "react";
import {PurchaseTableCell, PurchaseTablePrimaryTextField, PurchaseTableRow,} from "../../../../../styles/globalStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fieldChangeHandler} from "../../../../../store/actions/dashboard/quotationActions";

const ProductTable = () => {
    const dispatch = useDispatch();
    const {quotationForm} = useSelector(
        (state: RootStateOrAny) => state.quotations
    );
    const {quotationCartInformationList} = quotationForm;

    const changeHandler = (field, value, itemIndex) => {
        let newCharts = [...quotationCartInformationList];

        newCharts[itemIndex] = {
            ...newCharts[itemIndex],
            [field]: value,

        };

        dispatch(fieldChangeHandler("quotationCartInformationList", newCharts));
    };

    const productDeleteHandler = (itemIndex) => {
        let newCharts = quotationCartInformationList.filter(
            (item, i) => i !== itemIndex
        );
        dispatch(fieldChangeHandler("quotationCartInformationList", newCharts));
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <PurchaseTableRow>
                        <PurchaseTableCell>Product Name</PurchaseTableCell>
                        <PurchaseTableCell>In Stock</PurchaseTableCell>
                        <PurchaseTableCell>Quantity</PurchaseTableCell>
                        <PurchaseTableCell>Sell Price</PurchaseTableCell>
                        <PurchaseTableCell>Item Tax</PurchaseTableCell>
                        <PurchaseTableCell>Subtotal</PurchaseTableCell>
                        <PurchaseTableCell>Delete</PurchaseTableCell>
                    </PurchaseTableRow>
                </TableHead>

                <TableBody>
                    {quotationCartInformationList &&
                    quotationCartInformationList.length > 0 ? (
                        quotationCartInformationList.map((item, i) => (
                            <PurchaseTableRow key={i}>
                                <PurchaseTableCell>
                                    <Typography>{item.product.name}</Typography>
                                    <Typography>
                                        SKU {item.product.code}
                                    </Typography>
                                </PurchaseTableCell>
                                <PurchaseTableCell>
                                    <Typography>
                                        {item.product.quantityInStock || 0}
                                    </Typography>
                                </PurchaseTableCell>
                                <PurchaseTableCell>
                                    <PurchaseTablePrimaryTextField
                                        variant="outlined"
                                        fullWidth
                                        value={item.quantity}
                                        onChange={(e) =>
                                            changeHandler(
                                                "quantity",
                                                e.target.value,
                                                i
                                            )
                                        }
                                        size="small"
                                    />
                                </PurchaseTableCell>
                                <PurchaseTableCell>
                                    <PurchaseTablePrimaryTextField
                                        variant="outlined"
                                        fullWidth
                                        value={item.sellPrice}
                                        onChange={(e) =>
                                            changeHandler(
                                                "sellPrice",
                                                e.target.value,
                                                i
                                            )
                                        }
                                        size="small"
                                    />
                                </PurchaseTableCell>
                                <PurchaseTableCell>
                                    <Typography>{item.product.taxRate.rate || 0}</Typography>
                                </PurchaseTableCell>
                                <PurchaseTableCell>
                                    <Typography>
                                        {
                                            item.product.taxMethod.toLowerCase() === 'exclusive'
                                                ? parseFloat(item.quantity) * parseFloat(item.sellPrice) + (parseFloat(item.product.taxRate.rate) * parseFloat(item.quantity))
                                                : parseFloat(item.quantity) * parseFloat(item.sellPrice)
                                        }
                                    </Typography>
                                </PurchaseTableCell>
                                <PurchaseTableCell>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => productDeleteHandler(i)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </PurchaseTableCell>
                            </PurchaseTableRow>
                        ))
                    ) : (
                        <PurchaseTableRow>
                            <PurchaseTableCell colSpan={7}>
                                No Data Found
                            </PurchaseTableCell>
                        </PurchaseTableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductTable;
