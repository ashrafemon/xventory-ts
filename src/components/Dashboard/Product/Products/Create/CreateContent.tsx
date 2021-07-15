import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../../../../../store/actions/dashboard/product/categoryAction";
import { createProduct } from "../../../../../store/actions/dashboard/product/productAction";
import { fetchSuppliers } from "../../../../../store/actions/dashboard/product/supplierAction";
import {
    createBox,
    fetchBoxes,
} from "../../../../../store/actions/dashboard/system/boxActions";
import { fetchBrands } from "../../../../../store/actions/dashboard/system/brandActions";
import { fetchTaxRates } from "../../../../../store/actions/dashboard/system/taxRateActions";
import { fetchUnites } from "../../../../../store/actions/dashboard/system/unitActions";
import { fetchStores } from "../../../../../store/actions/storeAction";
import { isRequiredValidate } from "../../../../../utils/ValidateHelpers";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FormActions from "../../../shared/FormActions";
import SelectBox from "../../../shared/SelectBox";
import Selector from "../../../shared/Selector";
import TextBox from "../../../shared/TextBox";

const CreateContent = () => {
    const dispatch = useDispatch();
    const { storeId } = useParams<{ storeId: string }>();
    const { stores } = useSelector((state: RootStateOrAny) => state.stores);
    const { validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );
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

    const [form, setForm] = useState({
        type: "STANDARD",
        name: "",
        code: "",
        description: "",
        status: "ACTIVE",
        storeList: [],
        category: null,
        supplier: null,
        brand: null,
        taxRate: null,
        taxMethod: "EXCLUSIVE",
        barcodeSymbology: "",
        box: null,
        expiredAt: "",
        unit: null,
        price: 0,
        alertQuantity: 0,
    });

    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        code: { text: "", show: false },
        description: { text: "", show: false },
        status: { text: "", show: false },
        storeList: { text: "", show: false },
        category: { text: "", show: false },
        supplier: { text: "", show: false },
        brand: { text: "", show: false },
        taxRate: { text: "", show: false },
        taxMethod: { text: "", show: false },
        box: { text: "", show: false },
        unit: { text: "", show: false },
        alertQuantity: { text: "", show: false },
        expiredAt: { text: "", show: false },
        price: { text: "", show: false },
        barcodeSymbology: { text: "", show: false },
    });

    const changeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const resetForm = () => {
        setForm((prevState) => ({
            ...prevState,
            type: "STANDARD",
            name: "",
            code: "",
            description: "",
            status: "ACTIVE",
            storeList: [],
            category: null,
            supplier: null,
            brand: null,
            taxRate: null,
            taxMethod: "EXCLUSIVE",
            barcodeSymbology: "",
            box: null,
            expiredAt: "",
            unit: null,
            price: 0,
            alertQuantity: 0,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(
            form.name,
            "name",
            setErrors,
            "Name field is required"
        );
        const codeValidate = isRequiredValidate(
            form.code,
            "code",
            setErrors,
            "Code field is required"
        );
        const expiredAtValidate = isRequiredValidate(
            form.expiredAt,
            "expiredAt",
            setErrors,
            "ExpiredAt field is required"
        );
        const categoryValidate = isRequiredValidate(
            form.category,
            "category",
            setErrors,
            "Category field is required"
        );
        const supplierValidate = isRequiredValidate(
            form.supplier,
            "supplier",
            setErrors,
            "Supplier field is required"
        );
        const barCodeValidate = isRequiredValidate(
            form.barcodeSymbology,
            "barcodeSymbology",
            setErrors,
            "Barcode Symbology field is required"
        );
        const unitValidate = isRequiredValidate(
            form.unit,
            "unit",
            setErrors,
            "Unit field is required"
        );
        const priceValidate = isRequiredValidate(
            form.price,
            "price",
            setErrors,
            "Price field is required"
        );
        const taxRateValidate = isRequiredValidate(
            form.taxRate,
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
                ...form,
            };

            Object.keys(form).forEach((key) => {
                if (key === "box" && form["box"] !== null) {
                    formData["box"] = {
                        id: form["box"]["id"],
                    };
                }
                if (key === "brand" && form["brand"] !== null) {
                    formData["brand"] = {
                        id: form["brand"]["id"],
                    };
                }
                if (key === "category" && form["category"] !== null) {
                    formData["category"] = {
                        id: form["category"]["id"],
                    };
                }
                if (key === "category" && form["category"] !== null) {
                    formData["category"] = {
                        id: form["category"]["id"],
                    };
                }
                if (key === "supplier" && form["supplier"] !== null) {
                    formData["supplier"] = {
                        id: form["supplier"]["id"],
                    };
                }
                if (key === "taxRate" && form["taxRate"] !== null) {
                    formData["taxRate"] = {
                        id: form["taxRate"]["id"],
                    };
                }
                if (key === "unit" && form["unit"] !== null) {
                    formData["unit"] = {
                        id: form["unit"]["id"],
                    };
                }
                if (key === "storeList" && form["storeList"] !== null) {
                    formData["storeList"] = [];
                    form["storeList"].forEach((store) => {
                        formData["storeList"].push({ id: store.id });
                    });
                }
            });

            dispatch(createProduct(formData, resetForm));
        }
    };

    useEffect(() => {
        dispatch(fetchStores());
        dispatch(fetchCategories());
        dispatch(fetchSuppliers());
        dispatch(fetchBrands());
        dispatch(fetchTaxRates());
        dispatch(fetchBoxes());
        dispatch(fetchUnites());
    }, [dispatch]);

    useEffect(() => {
        if (storeId && stores && stores.storeList) {
            let selectedStore = {};
            stores.storeList.forEach((item) => {
                if (item.id === storeId) {
                    selectedStore = item;
                }
            });
            setForm((prevState) => ({
                ...prevState,
                storeList: [selectedStore],
            }));
        }
    }, [storeId, stores]);

    useEffect(() => {
        if (validateErrors) {
            validateErrors.forEach((item) => {
                console.log(item);
                setErrors((prevState) => ({
                    ...prevState,
                    [item.field]: {
                        text: item.description,
                        show: true,
                    },
                }));
            });
        }
    }, [validateErrors, setErrors]);

    return (
        <Container maxWidth="md">
            <form onSubmit={submitHandler}>
                <Box mb={2}>
                    <Selector
                        label="Type"
                        placeholder="Type"
                        options={productTypeOption}
                        required
                        onChange={(e) => changeHandler("type", e.target.value)}
                        value={form.type}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Name"
                        placeholder="Name"
                        required
                        type="text"
                        error={errors.name.show}
                        helperText={errors.name.text}
                        value={form.name}
                        onChange={(e) => changeHandler("name", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Code"
                        placeholder="Code"
                        required
                        value={form.code}
                        error={errors.code.show}
                        helperText={errors.code.text}
                        onChange={(e) => changeHandler("code", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Description"
                        placeholder="Description"
                        required
                        type="text"
                        error={errors.description.show}
                        helperText={errors.description.text}
                        value={form.description}
                        onChange={(e) =>
                            changeHandler("description", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={categories && categories.categoryList}
                        optionLabel="name"
                        label="Category"
                        placeholder="Category"
                        required
                        value={form.category}
                        onChange={(e, data) => changeHandler("category", data)}
                        error={errors.category.show}
                        helperText={errors.category.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={suppliers && suppliers.supplierList}
                        optionLabel="name"
                        label="Supplier"
                        placeholder="Supplier"
                        required
                        value={form.supplier}
                        onChange={(e, data) => changeHandler("supplier", data)}
                        error={errors.supplier.show}
                        helperText={errors.supplier.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={brands && brands.brandList}
                        optionLabel="name"
                        label="Brand"
                        placeholder="Brand"
                        required
                        value={form.brand}
                        onChange={(e, data) => changeHandler("brand", data)}
                        error={errors.brand.show}
                        helperText={errors.brand.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={taxRates && taxRates.taxRateList}
                        optionLabel="name"
                        label="TaxRate"
                        placeholder="TaxRate"
                        required
                        value={form.taxRate}
                        onChange={(e, data) => changeHandler("taxRate", data)}
                        error={errors.taxRate.show}
                        helperText={errors.taxRate.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={boxes && boxes.boxList}
                        optionLabel="name"
                        label="Box"
                        placeholder="Box"
                        required
                        value={form.box}
                        onChange={(e, data) => changeHandler("box", data)}
                        error={errors.box.show}
                        helperText={errors.box.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={units && units.unitList}
                        optionLabel="name"
                        label="Unit"
                        placeholder="Unit"
                        required
                        value={form.unit}
                        onChange={(e, data) => changeHandler("unit", data)}
                        error={errors.unit.show}
                        helperText={errors.unit.text}
                    />
                </Box>

                <Box mb={2}>
                    <Selector
                        label="TaxMethod"
                        placeholder="TaxMethod"
                        options={taxMethodOptions}
                        required
                        onChange={(e) =>
                            changeHandler("taxMethod", e.target.value)
                        }
                        value={form.taxMethod}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Alert Quantity"
                        placeholder="Alert Quantity"
                        type="number"
                        required
                        value={form.alertQuantity}
                        error={errors.alertQuantity.show}
                        helperText={errors.alertQuantity.text}
                        onChange={(e) =>
                            changeHandler("alertQuantity", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Barcode Symbiology"
                        placeholder="Barcode Symbiology"
                        required
                        value={form.barcodeSymbology}
                        error={errors.barcodeSymbology.show}
                        helperText={errors.barcodeSymbology.text}
                        onChange={(e) =>
                            changeHandler("barcodeSymbology", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Expire At"
                        placeholder="Expire At"
                        type="date"
                        required
                        value={form.expiredAt}
                        error={errors.expiredAt.show}
                        helperText={errors.expiredAt.text}
                        onChange={(e) =>
                            changeHandler("expiredAt", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Price"
                        placeholder="Price"
                        type="number"
                        required
                        value={form.price}
                        error={errors.price.show}
                        helperText={errors.price.text}
                        onChange={(e) => changeHandler("price", e.target.value)}
                    />
                </Box>

                <Box mb={2}>
                    <SelectBox
                        label="Status"
                        placeholder="Status"
                        required
                        onChange={(e) =>
                            changeHandler("status", e.target.value)
                        }
                        value={form.status}
                        error={errors.status.show}
                        helperText={errors.status.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={stores && stores.storeList}
                        optionLabel="name"
                        label="Store List"
                        placeholder="Store List"
                        required
                        multiple
                        value={form.storeList}
                        onChange={(e, data) => changeHandler("storeList", data)}
                        error={errors.storeList.show}
                        helperText={errors.storeList.text}
                    />
                </Box>

                <Box mb={2}>
                    <FormActions />
                </Box>
            </form>
        </Container>
    );
};

export default CreateContent;
