import {Box, Container} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fetchCustomers} from "../../../../store/actions/dashboard/customerActions";
import {fetchProductsBySupplierId} from "../../../../store/actions/dashboard/product/productAction";
import {fetchSuppliers} from "../../../../store/actions/dashboard/product/supplierAction";
import {fieldChangeHandler} from "../../../../store/actions/dashboard/quotationActions";
import AutocompleteTextBox from "../../shared/AutocompleteTextBox";
import Selector from "../../shared/Selector";
import TextBox from "../../shared/TextBox";
import {toast} from "react-toastify";

const CreateContent = ({errors, setErrors}) => {
    const dispatch = useDispatch();
    const {quotationForm} = useSelector(
        (state: RootStateOrAny) => state.quotations
    );
    const {suppliers} = useSelector(
        (state: RootStateOrAny) => state.suppliers
    );
    const {customers} = useSelector(
        (state: RootStateOrAny) => state.customers
    );
    const {products} = useSelector((state: RootStateOrAny) => state.products);
    const [selectedProduct] = useState(null)

    const [quotationStatusOptions] = useState([
        {text: "Sent", value: "SENT"},
        {text: "Pending", value: "PENDING"},
        {text: "Complete", value: "COMPLETE"},
        {text: "Draft", value: "DRAFT"},
    ]);

    const changeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
        dispatch(fieldChangeHandler(field, value));
    };

    const productChangeHandler = (value) => {
        if (value.quantityInStock === null || value.quantityInStock <= 0) {
            toast.error('This product is not available in stock...')
        } else {
            const {quotationCartInformationList} = quotationForm;
            let exists = {
                status: false,
                index: 0
            }
            let carts = []
            let cartItem = {}

            quotationCartInformationList.forEach((item, index) => {
                if (item.product === value) {
                    exists = {status: true, index}
                    cartItem = {
                        product: item.product,
                        quantity: item.quantity + 1,
                        sellPrice: item.product.price,
                    }
                }
            })

            if (exists.status) {
                carts = [
                    ...quotationCartInformationList.filter((item, i) => i !== exists.index),
                    cartItem
                ]
            } else {
                carts = [
                    ...quotationCartInformationList,
                    {
                        product: value,
                        quantity: 1,
                        sellPrice: value.price,
                    },
                ]
            }

            // const carts = [
            //     ...quotationCartInformationList,
            //     // {
            //     //     product: value,
            //     //     // taxRate: 10,
            //     //     // cost: value.price * 1 + 10,
            //     //     quantity: 1,
            //     //     sellPrice: value.price,
            //     // },
            //     cartItem
            // ];

            dispatch(fieldChangeHandler("quotationCartInformationList", carts));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const {supplier} = quotationForm;

    useEffect(() => {
        dispatch(fetchSuppliers());

        if (supplier) {
            dispatch(fetchProductsBySupplierId(supplier.id));
            // dispatch(fieldChangeHandler("quotationCartInformationList", []));
        }
    }, [dispatch, supplier]);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    return (
        <Container maxWidth="md">
            <form onSubmit={submitHandler}>
                <Box mb={2}>
                    <TextBox
                        label="Date"
                        placeholder="Date"
                        required
                        type="date"
                        error={errors.date.show}
                        helperText={errors.date.text}
                        value={quotationForm.date}
                        onChange={(e) => changeHandler("date", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Reference No"
                        placeholder="Reference No"
                        required
                        type="text"
                        error={errors.referenceNo.show}
                        helperText={errors.referenceNo.text}
                        value={quotationForm.referenceNo}
                        onChange={(e) =>
                            changeHandler("referenceNo", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Note"
                        placeholder="Note"
                        required
                        value={quotationForm.note}
                        error={errors.note.show}
                        helperText={errors.note.text}
                        onChange={(e) => changeHandler("note", e.target.value)}
                    />
                </Box>

                <Box mb={2}>
                    <Selector
                        options={quotationStatusOptions}
                        label="Status"
                        placeholder="Status"
                        required
                        value={quotationForm.quotationStatus}
                        // error={errors.note.show}
                        // helperText={errors.note.text}
                        onChange={(e) =>
                            changeHandler("quotationStatus", e.target.value)
                        }
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        options={customers && customers.customerList}
                        optionLabel="name"
                        label="Customer"
                        placeholder="Customer"
                        value={quotationForm.customer}
                        error={errors.customer.show}
                        helperText={errors.customer.text}
                        onChange={(e, data) => changeHandler("customer", data)}
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        options={suppliers && suppliers.supplierList}
                        optionLabel="name"
                        label="Suppliers"
                        placeholder="Suppliers"
                        closeIcon={false}
                        value={quotationForm.supplier}
                        error={errors.supplier.show}
                        helperText={errors.supplier.text}
                        onChange={(e, data) => changeHandler("supplier", data)}
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        options={products && products.productList}
                        clearOnBlur
                        closeIcon={false}
                        optionLabel="name"
                        disabled={!quotationForm.supplier}
                        filterSelectedOptions
                        label="Add Product"
                        placeholder="Add Product"
                        value={selectedProduct}
                        onChange={(e, data) => productChangeHandler(data)}
                    />
                </Box>

                {/* <Box mb={2}>
                    <FormActions />
                </Box> */}
            </form>
        </Container>
    );
};

export default CreateContent;
