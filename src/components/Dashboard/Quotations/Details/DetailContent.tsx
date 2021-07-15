import {Box} from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import SaveIcon from "@material-ui/icons/Save";
import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {DashboardUrls} from "../../../../constants/urls";
import {createQuotation, updateQuotation,} from "../../../../store/actions/dashboard/quotationActions";
import {RESET_QUOTATION_FORM} from "../../../../store/types";
import {PurchaseResetButton, PurchaseSubmitButton,} from "../../../../styles/globalStyles";
import PaymentTable from "./shared/PaymentTable";
import PricingTable from "./shared/PricingTable";
import ProductTable from "./shared/ProductTable";
import {isRequiredValidate} from "../../../../utils/ValidateHelpers";

const DetailContent = ({errors, setErrors}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {storeId, id} = useParams<{ storeId: string; id: string }>();

    const [editForm, setEditForm] = useState(false);

    const {quotationForm} = useSelector(
        (state: RootStateOrAny) => state.quotations
    );

    const resetQuotationForm = () => {
        dispatch({
            type: RESET_QUOTATION_FORM,
        });

        if (editForm) {
            const path = DashboardUrls.QUOTATION.index.replace(
                ":storeId",
                storeId
            );
            history.push(path);
        }
    };

    const submitHandler = () => {

        const dateValidate = isRequiredValidate(quotationForm.date, 'date', setErrors, "Date field is required")
        const referenceNoValidate = isRequiredValidate(quotationForm.referenceNo, 'referenceNo', setErrors, "referenceNo field is required")
        const noteValidate = isRequiredValidate(quotationForm.note, 'note', setErrors, "note field is required")
        const supplierValidate = isRequiredValidate(quotationForm.supplier, 'supplier', setErrors, "supplier field is required")
        const customerValidate = isRequiredValidate(quotationForm.customer, 'customer', setErrors, "customer field is required")

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
        if (customerValidate) {
            toast.error("customer field is required");
        }
        if (
            !quotationForm.quotationCartInformationList ||
            quotationForm.quotationCartInformationList.length === 0
        ) {
            toast.error("quotationCartInformationList field is required");
        }

        if (
            !dateValidate &&
            !referenceNoValidate &&
            !noteValidate &&
            !supplierValidate &&
            !customerValidate &&
            quotationForm.quotationCartInformationList.length > 0
        ) {
            let formData = {
                ...quotationForm,
            };

            Object.keys(quotationForm).forEach((key) => {
                if (key === "supplier" && quotationForm["supplier"] !== null) {
                    formData["supplier"] = {
                        id: quotationForm["supplier"]["id"],
                    };
                }

                if (key === "customer" && quotationForm["customer"] !== null) {
                    formData["customer"] = {
                        id: quotationForm["customer"]["id"],
                    };
                }

                if (
                    key === "quotationCartInformationList" &&
                    quotationForm["quotationCartInformationList"].length > 0
                ) {
                    let products = [];

                    quotationForm["quotationCartInformationList"].forEach(
                        (item) => {
                            products.push({
                                product: {id: item.product.id},
                                quantity: parseFloat(item.quantity),
                                sellPrice: parseFloat(item.sellPrice),
                                itemTax: 10,
                                subTotal:
                                    parseFloat(item.quantity) *
                                    parseFloat(item.sellPrice) +
                                    10,
                            });
                        }
                    );

                    formData["quotationCartInformationList"] = [...products];
                }
            });

            if (editForm) {
                dispatch(updateQuotation(formData, resetQuotationForm));
            } else {
                dispatch(createQuotation(formData, resetQuotationForm));
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
                <ProductTable/>
            </Box>

            <Box mb={2}>
                <PricingTable/>
            </Box>

            <Box mb={2}>
                <PaymentTable/>
            </Box>

            {editForm ? (
                <Box textAlign="center">
                    <PurchaseSubmitButton
                        variant="contained"
                        startIcon={<SaveIcon/>}
                        onClick={submitHandler}
                    >
                        Update
                    </PurchaseSubmitButton>
                </Box>
            ) : (
                <Box textAlign="center">
                    <PurchaseResetButton
                        variant="outlined"
                        startIcon={<ReplayIcon/>}
                    >
                        Reset All
                    </PurchaseResetButton>
                    <PurchaseSubmitButton
                        variant="contained"
                        startIcon={<SaveIcon/>}
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
