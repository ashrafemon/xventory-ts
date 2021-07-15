import {Box, Container} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fetchProductsBySupplierId} from "../../../../store/actions/dashboard/product/productAction";
import {fetchSuppliers} from "../../../../store/actions/dashboard/product/supplierAction";
import {fieldChangeHandler} from "../../../../store/actions/dashboard/purchaseActions";
import AutocompleteTextBox from "../../shared/AutocompleteTextBox";
import TextBox from "../../shared/TextBox";

const CreateContent = ({errors, setErrors}) => {
    const dispatch = useDispatch();
    const {purchaseForm} = useSelector(
        (state: RootStateOrAny) => state.purchases
    );
    const {suppliers} = useSelector(
        (state: RootStateOrAny) => state.suppliers
    );
    const {products} = useSelector((state: RootStateOrAny) => state.products);
    const [selectedProducts] = useState(null)

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
        const {purchaseCartInformationList} = purchaseForm;

        // const carts = [
        //     ...purchaseCartInformationList,
        //     {
        //         product: value,
        //         taxRate: 10,
        //         cost: value.price * 1 + 10,
        //         quantity: 1,
        //         sellPrice: value.price,
        //     },
        // ];

        let exists = {
            status: false,
            index: 0
        }
        let carts = []
        let cartItem = {}

        purchaseCartInformationList.forEach((item, index) => {
            if (item.product === value) {
                exists = {status: true, index}
                cartItem = {
                    product: item.product,
                    cost: item.product.purchasePrice || 0,
                    quantity: item.quantity + 1,
                    sellPrice: item.product.price,
                }
            }
        })

        if (exists.status) {
            carts = [
                ...purchaseCartInformationList.filter((item, i) => i !== exists.index),
                cartItem
            ]
        } else {
            carts = [
                ...purchaseCartInformationList,
                {
                    product: value,
                    cost: value.purchasePrice || 0,
                    quantity: 1,
                    sellPrice: value.price,
                },
            ]
        }

        console.log(carts)

        dispatch(fieldChangeHandler("purchaseCartInformationList", carts));
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const {supplier} = purchaseForm;

    useEffect(() => {
        dispatch(fetchSuppliers());

        if (supplier) {
            dispatch(fetchProductsBySupplierId(supplier.id));
        }
    }, [dispatch, supplier]);

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
                        value={purchaseForm.date}
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
                        value={purchaseForm.referenceNo}
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
                        value={purchaseForm.note}
                        error={errors.note.show}
                        helperText={errors.note.text}
                        onChange={(e) => changeHandler("note", e.target.value)}
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        options={suppliers && suppliers.supplierList}
                        optionLabel="name"
                        label="Suppliers"
                        placeholder="Suppliers"
                        value={purchaseForm.supplier}
                        error={errors.supplier.show}
                        helperText={errors.supplier.text}
                        onChange={(e, data) => changeHandler("supplier", data)}
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        options={products && products.productList}
                        clearOnBlur
                        optionLabel="name"
                        label="Add Product"
                        disabled={!purchaseForm.supplier}
                        placeholder="Add Product"
                        value={selectedProducts}
                        onChange={(e, data) => productChangeHandler(data)}
                    />
                </Box>
            </form>
        </Container>
    );
};

export default CreateContent;
