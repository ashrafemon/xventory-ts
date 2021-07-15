import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import CrudSelector from "../../../../../shared/CrudSelector";
import CrudTextBox from "../../../../../shared/CrudTextBox";

const StorePreference = ({ data, storeFieldChangeHandler, errors }) => {
    const { timeZones } = useSelector((state: RootStateOrAny) => state.site);
    const [selectorOptions] = useState([
        { text: "Active", value: true },
        { text: "In-Active", value: false },
    ]);
    const [unitOptions] = useState([
        { text: "Minute", value: "Minute" },
        { text: "Second", value: "Second" },
    ]);
    const [afterSellOption] = useState([
        { text: "POS", value: "POS" },
        { text: "Invoice", value: "INVOICE" },
    ]);

    return (
        <>
            <Box mb={1}>
                <CrudSelector
                    options={timeZones}
                    label="TimeZone"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.timezone
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler("timezone", e.target.value)
                    }
                    error={errors && errors.timezone.show}
                    helperText={errors && errors.timezone.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Invoice Edit LifeSpan"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceEditLifeSpan
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler(
                            "invoiceEditLifeSpan",
                            e.target.value
                        )
                    }
                    error={errors && errors.invoiceEditLifeSpan.show}
                    helperText={errors && errors.invoiceEditLifeSpan.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={unitOptions}
                    label="Invoice Edit LifeSpan Unit"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceEditLifeSpanUnit
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler(
                            "invoiceEditLifeSpanUnit",
                            e.target.value
                        )
                    }
                    error={errors && errors.invoiceEditLifeSpanUnit.show}
                    helperText={errors && errors.invoiceEditLifeSpanUnit.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Invoice Delete LifeSpan"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceDeleteLifeSpan
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler(
                            "invoiceDeleteLifeSpan",
                            e.target.value
                        )
                    }
                    error={errors && errors.invoiceDeleteLifeSpan.show}
                    helperText={errors && errors.invoiceDeleteLifeSpan.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={unitOptions}
                    label="Invoice Delete LifeSpan Unit"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceDeleteLifeSpanUnit
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler(
                            "invoiceDeleteLifeSpanUnit",
                            e.target.value
                        )
                    }
                    error={errors && errors.invoiceDeleteLifeSpanUnit.show}
                    helperText={errors && errors.invoiceDeleteLifeSpanUnit.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={afterSellOption}
                    label="After Sell Page"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.afterSellPage
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler("afterSellPage", e.target.value)
                    }
                    error={errors && errors.afterSellPage.show}
                    helperText={errors && errors.afterSellPage.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={selectorOptions}
                    label="Auto Print Receipt"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.autoPrintReceipt
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler(
                            "autoPrintReceipt",
                            e.target.value
                        )
                    }
                    error={errors && errors.autoPrintReceipt.show}
                    helperText={errors && errors.autoPrintReceipt.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Stock Alert Quantity"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.stockAlertQuantity
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler(
                            "stockAlertQuantity",
                            e.target.value
                        )
                    }
                    error={errors && errors.stockAlertQuantity.show}
                    helperText={errors && errors.stockAlertQuantity.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Table Item Limit"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.tableItemLimit
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler(
                            "tableItemLimit",
                            e.target.value
                        )
                    }
                    error={errors && errors.tableItemLimit.show}
                    helperText={errors && errors.tableItemLimit.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    multiline
                    label="Invoice Footer"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.invoiceFooter
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler("invoiceFooter", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Tax"
                    value={
                        data && data.storePreference && data.storePreference.tax
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler("tax", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={selectorOptions}
                    label="soundEffect"
                    value={
                        data &&
                        data.storePreference &&
                        data.storePreference.soundEffect
                    }
                    onChange={(e) =>
                        storeFieldChangeHandler("soundEffect", e.target.value)
                    }
                />
            </Box>
        </>
    );
};

export default React.memo(StorePreference);
