import { Box } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import SaveIcon from "@material-ui/icons/Save";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DashboardUrls } from "../../../../constants/urls";
import {
    createPurchase,
    updatePurchase,
} from "../../../../store/actions/dashboard/purchaseActions";
import { RESET_PURCHASE_FORM } from "../../../../store/types";
import {
    PurchaseResetButton,
    PurchaseSubmitButton,
} from "../../../../styles/globalStyles";
import DueTable from "./shared/DueTable";
import PaymentTable from "./shared/PaymentTable";
import PricingTable from "./shared/PricingTable";
import ProductTable from "./shared/ProductTable";
import {isRequiredValidate} from "../../../../utils/ValidateHelpers";

const DetailContent = ({errors, setErrors}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { storeId, id } = useParams<{ storeId: string; id: string }>();

    const [editForm, setEditForm] = useState(false);

    const { purchaseForm } = useSelector(
        (state: RootStateOrAny) => state.purchases
    );

    const resetPurchaseForm = () => {
        dispatch({
            type: RESET_PURCHASE_FORM,
        });

        if (editForm) {
            const path = DashboardUrls.PURCHASE.index.replace(
                ":storeId",
                storeId
            );
            history.push(path);
        }
    };

    const submitHandler = () => {
        console.log(purchaseForm);


        const dateValidate = isRequiredValidate(purchaseForm.date, 'date', setErrors, "Date field is required")
        const referenceNoValidate = isRequiredValidate(purchaseForm.referenceNo, 'referenceNo', setErrors, "referenceNo field is required")
        const noteValidate = isRequiredValidate(purchaseForm.note, 'note', setErrors, "note field is required")
        const supplierValidate = isRequiredValidate(purchaseForm.supplier, 'supplier', setErrors, "supplier field is required")

        if (dateValidate) {
            toast.error("Date field is required");
        }
        if (referenceNoValidate) {
            toast.error("referenceNo field is required");
        }
        if (noteValidate) {
            toast.error("note field is required");
        }
        if (supplierValidate) {
            toast.error("supplier field is required");
        }

        if (
            !purchaseForm.purchaseCartInformationList ||
            purchaseForm.purchaseCartInformationList.length === 0
        ) {
            toast.error("Purchase Cart InformationList field is required");
        }

        if (
            !dateValidate &&
            !referenceNoValidate &&
            !noteValidate &&
            !supplierValidate &&
            purchaseForm.purchaseCartInformationList.length > 0
        ) {
            let formData = {
                ...purchaseForm,
            };

            Object.keys(purchaseForm).forEach((key) => {
                if (key === "supplier" && purchaseForm["supplier"] !== null) {
                    formData["supplier"] = {
                        id: purchaseForm["supplier"]["id"],
                    };
                }

                if (
                    key === "purchaseCartInformationList" &&
                    purchaseForm["purchaseCartInformationList"].length > 0
                ) {
                    let products = [];

                    purchaseForm["purchaseCartInformationList"].forEach(
                        (item) => {
                            console.log('item',item)
                            products.push({
                                product: { id: item.product.id },
                                quantity: parseFloat(item.quantity),
                                sellPrice: parseFloat(item.sellPrice),
                                cost: parseFloat(item.cost)
                                // taxRate: parseFloat(item.taxRate),
                                // subTotal: parseFloat(item.subTotal),
                            });
                        }
                    );

                    formData["purchaseCartInformationList"] = [...products];
                }

                if (
                    key === "purchasePaymentInformationList" &&
                    purchaseForm["purchasePaymentInformationList"].length > 0
                ) {
                    let payments = [];

                    purchaseForm["purchasePaymentInformationList"].forEach(
                        (item) => {
                            payments.push({
                                paymentMethod: { id: item.paymentMethod.id },
                                paidAmount: parseFloat(item.paidAmount),
                                note: item.note,
                            });
                        }
                    );

                    formData["purchasePaymentInformationList"] = [...payments];
                }
            });

            console.log(formData);

            if (editForm) {
                dispatch(updatePurchase(formData, resetPurchaseForm));
            } else {
                dispatch(createPurchase(formData, resetPurchaseForm));
            }
        }
    };

    useEffect(() => {
        if (id) {
            setEditForm(true);
        }
    }, [id]);

    return (
        <Box>
            <Box mb={2}>
                <ProductTable />
            </Box>

            <Box mb={2}>
                <PricingTable />
            </Box>

            <Box mb={2}>
                <PaymentTable />
            </Box>

            <Box mb={4}>
                <DueTable />
            </Box>

            {editForm ? (
                <Box textAlign="center">
                    <PurchaseSubmitButton
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={submitHandler}
                    >
                        Update
                    </PurchaseSubmitButton>
                </Box>
            ) : (
                <Box textAlign="center">
                    <PurchaseResetButton
                        variant="outlined"
                        startIcon={<ReplayIcon />}
                    >
                        Reset All
                    </PurchaseResetButton>
                    <PurchaseSubmitButton
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={submitHandler}
                    >
                        Add Now
                    </PurchaseSubmitButton>
                </Box>
            )}
        </Box>
    );
};

export default DetailContent;
