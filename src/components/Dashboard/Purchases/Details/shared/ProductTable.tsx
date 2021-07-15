import {
    IconButton,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Typography,
} from "@material-ui/core";
import React from "react";
import {
    PurchaseTableCell,
    PurchaseTablePrimaryTextField,
    PurchaseTableRow,
} from "../../../../../styles/globalStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fieldChangeHandler } from "../../../../../store/actions/dashboard/purchaseActions";

const ProductTable = () => {
    const dispatch = useDispatch();
    const { purchaseForm } = useSelector(
        (state: RootStateOrAny) => state.purchases
    );
    const { purchaseCartInformationList } = purchaseForm;

    const changeHandler = (field, value, itemIndex) => {
        let newCharts = [...purchaseCartInformationList];

        newCharts[itemIndex] = {
            ...newCharts[itemIndex],
            [field]: value,
        };

        dispatch(fieldChangeHandler("purchaseCartInformationList", newCharts));
    };

    const productDeleteHandler = (itemIndex) => {
        let newCharts = purchaseCartInformationList.filter(
            (item, i) => i !== itemIndex
        );
        dispatch(fieldChangeHandler("purchaseCartInformationList", newCharts));
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <PurchaseTableRow>
                        <PurchaseTableCell>Product Name</PurchaseTableCell>
                        <PurchaseTableCell>In Stock</PurchaseTableCell>
                        <PurchaseTableCell>Quantity</PurchaseTableCell>
                        <PurchaseTableCell>Cost</PurchaseTableCell>
                        <PurchaseTableCell>Sell Price</PurchaseTableCell>
                        <PurchaseTableCell>Item Tax</PurchaseTableCell>
                        <PurchaseTableCell>Subtotal</PurchaseTableCell>
                        <PurchaseTableCell>Delete</PurchaseTableCell>
                    </PurchaseTableRow>
                </TableHead>

                <TableBody>
                    {purchaseCartInformationList &&
                    purchaseCartInformationList.length > 0 ? (
                        purchaseCartInformationList.map((item, i) => (
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
                                        value={item.cost}
                                        onChange={(e) =>
                                            changeHandler(
                                                "cost",
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
                                    <Typography>{
                                        item.product.taxMethod.toLowerCase() === 'exclusive'
                                            ? parseFloat(item.quantity) * parseFloat(item.sellPrice) + (parseFloat(item.product.taxRate.rate) * parseFloat(item.quantity))
                                            : parseFloat(item.quantity) * parseFloat(item.sellPrice)
                                    }</Typography>
                                </PurchaseTableCell>
                                <PurchaseTableCell>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => productDeleteHandler(i)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </PurchaseTableCell>
                            </PurchaseTableRow>
                        ))
                    ) : (
                        <PurchaseTableRow>
                            <PurchaseTableCell colSpan={8}>
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
