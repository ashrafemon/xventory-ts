import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../../../store/actions/dashboard/product/categoryAction";
import { updateProduct } from "../../../../../../store/actions/dashboard/product/productAction";
import { fetchSuppliers } from "../../../../../../store/actions/dashboard/product/supplierAction";
import { fetchBoxes } from "../../../../../../store/actions/dashboard/system/boxActions";
import { fetchBrands } from "../../../../../../store/actions/dashboard/system/brandActions";
import { fetchTaxRates } from "../../../../../../store/actions/dashboard/system/taxRateActions";
import { fetchUnites } from "../../../../../../store/actions/dashboard/system/unitActions";
import { toggleCrudDialog } from "../../../../../../store/actions/siteAction";
import { fetchStores } from "../../../../../../store/actions/storeAction";
import { SubmitButton } from "../../../../../../styles/globalStyles";
import { isRequiredValidate } from "../../../../../../utils/ValidateHelpers";
import CrudAutoCompleteTextBox from "../../../../shared/CrudAutoCompleteTextBox";
import CrudSelectBox from "../../../../shared/CrudSelectBox";
import CrudSelector from "../../../../shared/CrudSelector";
import CrudTextBox from "../../../../shared/CrudTextBox";

const Edit = ({ data, handler, errors, setErrors }) => {
    const dispatch = useDispatch();
    const { stores } = useSelector((state: RootStateOrAny) => state.stores);
    const { categories } = useSelector(
        (state: RootStateOrAny) => state.categories
    );
    const { suppliers } = useSelector(
        (state: RootStateOrAny) => state.suppliers
    );
    const { brands } = useSelector((state: RootStateOrAny) => state.brands);
    const { taxRates } = useSelector((state: RootStateOrAny) => state.taxRates);
    const { boxes } = useSelector((state: RootStateOrAny) => state.boxes);
    const { units } = useSelector((state: RootStateOrAny) => state.units);
    const [taxMethodOptions] = useState([
        { text: "Exclusive", value: "EXCLUSIVE" },
        { text: "Inclusive", value: "INCLUSIVE" },
    ]);
    const [productTypeOption] = useState([
        { text: "Standard", value: "STANDARD" },
        { text: "Service", value: "SERVICE" },
    ]);

    useEffect(() => {
        dispatch(fetchStores());
        dispatch(fetchCategories());
        dispatch(fetchSuppliers());
        dispatch(fetchBrands());
        dispatch(fetchTaxRates());
        dispatch(fetchBoxes());
        dispatch(fetchUnites());
    }, [dispatch]);

    const fieldChangeHandler = (field, value) => {
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
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(
            data.name,
            "name",
            setErrors,
            "Name field is required"
        );
        const codeValidate = isRequiredValidate(
            data.code,
            "code",
            setErrors,
            "Code field is required"
        );
        const expiredAtValidate = isRequiredValidate(
            data.expiredAt,
            "expiredAt",
            setErrors,
            "ExpiredAt field is required"
        );
        const categoryValidate = isRequiredValidate(
            data.category,
            "category",
            setErrors,
            "Category field is required"
        );
        const supplierValidate = isRequiredValidate(
            data.supplier,
            "supplier",
            setErrors,
            "Supplier field is required"
        );
        const barCodeValidate = isRequiredValidate(
            data.barcodeSymbology,
            "barcodeSymbology",
            setErrors,
            "Barcode Symbology field is required"
        );
        const unitValidate = isRequiredValidate(
            data.unit,
            "unit",
            setErrors,
            "Unit field is required"
        );
        const priceValidate = isRequiredValidate(
            data.price,
            "price",
            setErrors,
            "Price field is required"
        );
        const taxRateValidate = isRequiredValidate(
            data.taxRate,
            "taxRate",
            setErrors,
            "TaxRate field is required"
        );

        if (
            !nameValidate &&
            !codeValidate &&
            !expiredAtValidate &&
            !categoryValidate &&
            !supplierValidate &&
            !barCodeValidate &&
            !unitValidate &&
            !priceValidate &&
            !taxRateValidate
        ) {
            let formData = {
                ...data,
            };

            Object.keys(data).forEach((key) => {
                if (key === "box" && data["box"] !== null) {
                    formData["box"] = {
                        id: data["box"]["id"],
                    };
                }
                if (key === "brand" && data["brand"] !== null) {
                    formData["brand"] = {
                        id: data["brand"]["id"],
                    };
                }
                if (key === "category" && data["category"] !== null) {
                    formData["category"] = {
                        id: data["category"]["id"],
                    };
                }
                if (key === "category" && data["category"] !== null) {
                    formData["category"] = {
                        id: data["category"]["id"],
                    };
                }
                if (key === "supplier" && data["supplier"] !== null) {
                    formData["supplier"] = {
                        id: data["supplier"]["id"],
                    };
                }
                if (key === "taxRate" && data["taxRate"] !== null) {
                    formData["taxRate"] = {
                        id: data["taxRate"]["id"],
                    };
                }
                if (key === "unit" && data["unit"] !== null) {
                    formData["unit"] = {
                        id: data["unit"]["id"],
                    };
                }
                if (key === "storeList" && data["storeList"] !== null) {
                    formData["storeList"] = [];
                    data["storeList"].forEach((store) => {
                        formData["storeList"].push({ id: store.id });
                    });
                }
            });

            dispatch(
                updateProduct(formData, () =>
                    dispatch(toggleCrudDialog({ open: false, type: "" }))
                )
            );
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <Box mb={1}>
                <CrudSelector
                    options={productTypeOption}
                    label="Type"
                    value={data && data.type}
                    onChange={(e) => fieldChangeHandler("type", e.target.value)}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Name"
                    value={data && data.name}
                    onChange={(e) => fieldChangeHandler("name", e.target.value)}
                    error={errors.name.show}
                    helperText={errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Code"
                    value={data && data.code}
                    onChange={(e) => fieldChangeHandler("code", e.target.value)}
                    error={errors.code.show}
                    helperText={errors.code.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    multiple
                    label="Description"
                    value={data && data.description}
                    onChange={(e) =>
                        fieldChangeHandler("description", e.target.value)
                    }
                    error={errors.description.show}
                    helperText={errors.description.text}
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={categories && categories.categoryList}
                    optionLabel="name"
                    label="Category"
                    placeholder="Category"
                    required
                    value={data && data.category}
                    onChange={(e, data) => fieldChangeHandler("category", data)}
                    error={errors.category.show}
                    helperText={errors.category.text}
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={suppliers && suppliers.supplierList}
                    optionLabel="name"
                    label="Supplier"
                    placeholder="Supplier"
                    required
                    value={data && data.supplier}
                    onChange={(e, data) => fieldChangeHandler("supplier", data)}
                    error={errors.supplier.show}
                    helperText={errors.supplier.text}
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={brands && brands.brandList}
                    optionLabel="name"
                    label="Brand"
                    placeholder="Brand"
                    required
                    value={data && data.brand}
                    onChange={(e, data) => fieldChangeHandler("brand", data)}
                    error={errors.brand.show}
                    helperText={errors.brand.text}
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={taxRates && taxRates.taxRateList}
                    optionLabel="name"
                    label="Tax Rate"
                    placeholder="Tax Rate"
                    required
                    value={data && data.taxRate}
                    onChange={(e, data) => fieldChangeHandler("taxRate", data)}
                    error={errors.taxRate.show}
                    helperText={errors.taxRate.text}
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={boxes && boxes.boxList}
                    optionLabel="name"
                    label="Box"
                    placeholder="Box"
                    required
                    value={data && data.box}
                    onChange={(e, data) => fieldChangeHandler("box", data)}
                    error={errors.box.show}
                    helperText={errors.box.text}
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={units && units.unitList}
                    optionLabel="name"
                    label="Unit"
                    placeholder="Unit"
                    required
                    value={data && data.unit}
                    onChange={(e, data) => fieldChangeHandler("unit", data)}
                    error={errors.unit.show}
                    helperText={errors.unit.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={taxMethodOptions}
                    label="TaxMethod"
                    value={data && data.taxMethod}
                    onChange={(e) =>
                        fieldChangeHandler("taxMethod", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Alert Quantity"
                    value={data && data.alertQuantity}
                    onChange={(e) =>
                        fieldChangeHandler("alertQuantity", e.target.value)
                    }
                    error={errors.alertQuantity.show}
                    helperText={errors.alertQuantity.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Barcode Symbiology"
                    value={data && data.barcodeSymbology}
                    onChange={(e) =>
                        fieldChangeHandler("barcodeSymbology", e.target.value)
                    }
                    error={errors.barcodeSymbology.show}
                    helperText={errors.barcodeSymbology.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Price"
                    value={data && data.price}
                    onChange={(e) =>
                        fieldChangeHandler("price", e.target.value)
                    }
                    error={errors.price.show}
                    helperText={errors.price.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="date"
                    label="Expire At"
                    value={data && data.expiredAt}
                    onChange={(e) =>
                        fieldChangeHandler("expiredAt", e.target.value)
                    }
                    error={errors.expiredAt.show}
                    helperText={errors.expiredAt.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelectBox
                    label="Status"
                    value={data && data.status}
                    onChange={(e) =>
                        fieldChangeHandler("status", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={stores && stores.storeList}
                    optionLabel="name"
                    label="Store List"
                    placeholder="Store List"
                    required
                    multiple
                    value={data && data.storeList}
                    onChange={(e, data) =>
                        fieldChangeHandler("storeList", data)
                    }
                    error={errors.storeList.show}
                    helperText={errors.storeList.text}
                />
            </Box>

            <Box textAlign="center" mt={3}>
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
