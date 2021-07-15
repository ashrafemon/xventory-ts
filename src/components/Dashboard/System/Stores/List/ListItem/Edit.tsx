import { AccordionSummary, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCrudDialog } from "../../../../../../store/actions/siteAction";
import { updateStore } from "../../../../../../store/actions/storeAction";
import {
    CrudAccordion,
    CrudAccordionDetails,
    CrudAccordionTitle,
    SubmitButton,
} from "../../../../../../styles/globalStyles";
import { typeNamePropertySlicer } from "../../../../../../utils/helpers";
import { isRequiredValidate } from "../../../../../../utils/ValidateHelpers";
import AddressInfo from "./shared/AddressInfo";
import GeneralInfo from "./shared/GeneralInfo";
import StorePreference from "./shared/StorePreference";
import {toast} from "react-toastify";

const Edit = ({ data, handler, errors, setErrors }) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const fieldChangeHandler = useCallback(
        (field, value) => {
            setErrors((prevState) => ({
                ...prevState,
                [field]: {
                    text: "",
                    show: false,
                },
            }));
            handler((prevState) => ({
                ...prevState,
                [field]: value,
            }));
        },
        [handler, setErrors]
    );

    const addressFieldChangeHandler = useCallback(
        (field, value) => {
            // setErrors((prevState) => ({
            //     ...prevState,
            //     [field]: {
            //         text: "",
            //         show: false,
            //     },
            // }));
            handler((prevState) => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [field]: value,
                },
            }));
        },
        [handler]
    );

    const storeFieldChangeHandler = useCallback(
        (field, value) => {
            handler((prevState) => ({
                ...prevState,
                storePreference: {
                    ...prevState.storePreference,
                    [field]: value,
                },
            }));
        },
        [handler]
    );

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidated = isRequiredValidate(
            data.name,
            "name",
            setErrors,
            "Name field is required"
        );
        if(nameValidated){
            toast.error("Name field is required")
        }

        const codeValidated = isRequiredValidate(
            data.code,
            "code",
            setErrors,
            "Code field is required"
        );
        if(codeValidated){
            toast.error("Code field is required")
        }

        const phoneValidated = isRequiredValidate(
            data.phone,
            "phone",
            setErrors,
            "Phone field is required"
        )
        if(phoneValidated){
            toast.error("Phone field is required")
        }

        const emailValidated = isRequiredValidate(
            data.email,
            "email",
            setErrors,
            "Email field is required"
        );
        if(emailValidated){
            toast.error("Email field is required")
        }

        const cashierValidated = isRequiredValidate(
            data.cashier,
            "cashier",
            setErrors,
            "Cashier field is required"
        );
        if(cashierValidated){
            toast.error("Cashier field is required")
        }

        const timezoneValidated = isRequiredValidate(
            data.storePreference.timezone,
            "timezone",
            setErrors,
            "Timezone field is required"
        );
        if(timezoneValidated){
            toast.error("Timezone field is required")
        }

        const invoiceEditLifeSpanValidated = isRequiredValidate(
            data.storePreference.invoiceEditLifeSpan,
            "invoiceEditLifeSpan",
            setErrors,
            "Invoice Edit LifeSpan field is required"
        );
        if(invoiceEditLifeSpanValidated){
            toast.error("Invoice Edit LifeSpan field is required")
        }

        const invoiceEditLifeSpanUnitValidated = isRequiredValidate(
            data.storePreference.invoiceEditLifeSpanUnit,
            "invoiceEditLifeSpanUnit",
            setErrors,
            "Invoice Edit LifeSpan Unit field is required"
        );
        if(invoiceEditLifeSpanUnitValidated){
            toast.error("Invoice Edit LifeSpan Unit field is required")
        }

        const invoiceDeleteLifeSpanValidated = isRequiredValidate(
            data.storePreference.invoiceDeleteLifeSpan,
            "invoiceDeleteLifeSpan",
            setErrors,
            "Invoice Delete LifeSpan field is required"
        );
        if(invoiceDeleteLifeSpanValidated){
            toast.error("Invoice Delete LifeSpan field is required")
        }

        const invoiceDeleteLifeSpanUnitValidated = isRequiredValidate(
            data.storePreference.invoiceDeleteLifeSpanUnit,
            "invoiceDeleteLifeSpanUnit",
            setErrors,
            "Invoice Delete LifeSpan Unit field is required"
        );
        if(invoiceDeleteLifeSpanUnitValidated){
            toast.error("Invoice Delete LifeSpan Unit field is required")
        }

        const afterSellValidated = isRequiredValidate(
            data.storePreference.afterSellPage,
            "afterSellPage",
            setErrors,
            "After SellPage field is required"
        );
        if(afterSellValidated){
            toast.error("After SellPage field is required")
        }

        const autoPrintReceiptValidated = isRequiredValidate(
            data.storePreference.autoPrintReceipt,
            "autoPrintReceipt",
            setErrors,
            "Auto Print Receipt field is required"
        )
        if(autoPrintReceiptValidated){
            toast.error("Auto Print Receipt field is required")
        }

        const stockAlertQuantityValidated = isRequiredValidate(
            data.storePreference.stockAlertQuantity,
            "stockAlertQuantity",
            setErrors,
            "Stock Alert Quantity field is required"
        );
        if(stockAlertQuantityValidated){
            toast.error("Stock Alert Quantity field is required")
        }

        const tableItemLimitValidated = isRequiredValidate(
            data.storePreference.tableItemLimit,
            "tableItemLimit",
            setErrors,
            "Table Item Limit field is required"
        );
        if(tableItemLimitValidated){
            toast.error("Table Item Limit field is required")
        }

        if (
            !nameValidated &&
            !codeValidated &&
            !phoneValidated &&
            !emailValidated &&
            !cashierValidated &&
            !timezoneValidated &&
            !invoiceEditLifeSpanValidated &&
            !invoiceEditLifeSpanUnitValidated &&
            !invoiceDeleteLifeSpanValidated &&
            !invoiceDeleteLifeSpanUnitValidated &&
            !afterSellValidated &&
            !autoPrintReceiptValidated &&
            !stockAlertQuantityValidated &&
            !tableItemLimitValidated
        ) {
            let formData = {
                ...data,
            };

            let address = {
                ...data.address,
            };

            let storePreference = {
                ...data.storePreference,
            };

            Object.keys(data).forEach((key) => {
                if (key === "cashier" && data["cashier"] !== null) {
                    formData["cashier"] = {
                        id: data["cashier"]["id"],
                    };
                }
            })

            if(data && data.storePreference){
                Object.keys(data.storePreference).forEach((storeKey) => {
                    if (
                        storeKey === "__typename"
                    ) {
                        delete storePreference["__typename"];
                    }
                })
            }

            if (data && data.address) {
                Object.keys(data.address).forEach((addressKey) => {
                    if (
                        addressKey === "__typename"
                    ) {
                        delete address["__typename"];
                    }
                    if (
                        addressKey === "district" &&
                        data.address["district"] !== null
                    ) {
                        address["district"] = {
                            id: data.address["district"]["id"],
                        };
                    }
                    if (
                        addressKey === "subDistrict" &&
                        data["address"]["subDistrict"] !== null
                    ) {
                        address["subDistrict"] = {
                            id: data["address"]["subDistrict"]["id"],
                        };
                    }
                    if (
                        addressKey === "postOffice" &&
                        data["address"]["postOffice"] !== null
                    ) {
                        address["postOffice"] = {
                            id: data["address"]["postOffice"]["id"],
                        };
                    }
                    if (
                        addressKey === "country" &&
                        data["address"]["country"] !== null
                    ) {
                        address["country"] = data["address"]["country"];
                    }
                });
            }

            formData = {
                ...formData,
                address,
                storePreference
            };

            console.log(formData);

            dispatch(
                updateStore(formData, () =>
                    dispatch(toggleCrudDialog({ open: false, type: "" }))
                )
            );
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <CrudAccordion
                elevation={5}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <CrudAccordionTitle>General Information</CrudAccordionTitle>
                </AccordionSummary>
                <CrudAccordionDetails>
                    <GeneralInfo
                        data={data}
                        fieldChangeHandler={fieldChangeHandler}
                        errors={errors}
                    />
                </CrudAccordionDetails>
            </CrudAccordion>

            <CrudAccordion
                elevation={5}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <CrudAccordionTitle>Address Information</CrudAccordionTitle>
                </AccordionSummary>
                <CrudAccordionDetails>
                    <AddressInfo
                        data={data}
                        addressFieldChangeHandler={addressFieldChangeHandler}
                    />
                </CrudAccordionDetails>
            </CrudAccordion>

            <CrudAccordion
                elevation={5}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <CrudAccordionTitle>Store Preference</CrudAccordionTitle>
                </AccordionSummary>
                <CrudAccordionDetails>
                    <StorePreference
                        data={data}
                        storeFieldChangeHandler={storeFieldChangeHandler}
                        errors={errors}
                    />
                </CrudAccordionDetails>
            </CrudAccordion>

            <Box textAlign="center">
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};
export default Edit;
