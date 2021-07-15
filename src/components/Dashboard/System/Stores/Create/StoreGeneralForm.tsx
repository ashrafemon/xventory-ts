import { Container, Box } from "@material-ui/core";
import React, { useState } from "react";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import TextBox from "../../../shared/TextBox";
import DualTextBox from "../../../shared/TextBox/DualTextBox";

const StoreGeneralForm = () => {
    const [form] = useState({
        name: "",
        code: "",
        storeCategory: {},
        address: {
            streetAddress: "flsdkjflsdkfjlsdkf",
            postOffice: { id: "1" },
            subDistrict: { id: "1" },
            district: { id: "34" },
            country: "Bangladesh",
        },
        phone: "01302950019",
        email: "shihabhossian22@projectx.app",
        vatRegistrationNumber: "fdslkfjsdlk",
        cashier: { id: "60df00f222ef6b9af6fd8d4c" },
        storePreference: {
            timezone: "Asia/Dhaka",
            invoiceEditLifeSpan: 11,
            invoiceEditLifeSpanUnit: "Minute",
            invoiceDeleteLifeSpan: 11,
            invoiceDeleteLifeSpanUnit: "Minute",
            afterSellPage: "POS",
            autoPrintReceipt: true,
            stockAlertQuantity: 2,
            tableItemLimit: 25,
            invoiceFooter: "flksdjflskjflskjfslfkj",
            tax: 15.0,
            soundEffect: true,
        },
    });

    return (
        <Container maxWidth="md">
            <form>
                <Box mb={2}>
                    <TextBox
                        label="Name"
                        placeholder="Name"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Code"
                        placeholder="Code"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="Store Category"
                        placeholder="Vat Reg No"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Address"
                        placeholder="Address"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="Division"
                        placeholder="Division"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="District"
                        placeholder="District"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="SubDistrict"
                        placeholder="SubDistrict"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="Post Office"
                        placeholder="Post Office"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>

                <Box mb={2}>
                    <TextBox
                        label="Mobile"
                        placeholder="Mobile"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Email"
                        placeholder="Email"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Vat Reg No"
                        placeholder="Vat Reg No"
                        onChange={() => console.log("ok")}
                    />
                </Box>

                {/* <Box mb={2}>
                                <TextBox
                                    label="Zip Code"
                                    placeholder="Zip Code"
                                    onChange={() => console.log("ok")}
                                    required
                                />
                            </Box> */}

                <Box mb={2}>
                    <AutocompleteTextBox
                        label="Cashier"
                        placeholder="0"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="Timezone"
                        placeholder="0"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <DualTextBox
                        label="Invoice Edit Lifespan"
                        onChange={() => console.log("ok")}
                        required
                        tooltipText="Invoice Edit Lifespan"
                    />
                </Box>
                <Box mb={2}>
                    <DualTextBox
                        label="Invoice Delete Lifespan"
                        onChange={() => console.log("ok")}
                        required
                        tooltipText="Invoice Delete Lifespan"
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="After Sell Page"
                        placeholder="0"
                        onChange={() => console.log("ok")}
                        required
                        tooltipText="After Sell Page"
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        label="Pos Printing"
                        placeholder="0"
                        onChange={() => console.log("ok")}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Stock Alert Quantity"
                        placeholder="0"
                        type="number"
                        onChange={() => console.log("ok")}
                        required
                        tooltipText="Stock Alert Quantity"
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Datable Item Limit"
                        placeholder="0"
                        type="number"
                        onChange={() => console.log("ok")}
                        required
                        tooltipText="Datable Item Limit"
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Invoice Footer"
                        placeholder="Invoice Footer"
                        onChange={() => console.log("ok")}
                        tooltipText="Invoice Footer"
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Tax"
                        placeholder="0"
                        type="number"
                        onChange={() => console.log("ok")}
                        tooltipText="Tax"
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        label="Sound Effect"
                        placeholder="Vat Reg No"
                        onChange={() => console.log("ok")}
                    />
                </Box>
            </form>
        </Container>
    );
};

export default StoreGeneralForm;
