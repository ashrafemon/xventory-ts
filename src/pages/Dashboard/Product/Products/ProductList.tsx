import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ListContent from "../../../../components/Dashboard/Product/Products/List/ListContent";
import Edit from "../../../../components/Dashboard/Product/Products/List/ListItem/Edit";
import View from "../../../../components/Dashboard/Product/Products/List/ListItem/View";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchProducts } from "../../../../store/actions/dashboard/product/productAction";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const BoxList = () => {
    const dispatch = useDispatch();
    const { product, products } = useSelector(
        (state: RootStateOrAny) => state.products
    );
    const { crudDialog, validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [paginate, setPaginate] = useState({
        page: 0,
        rowsPerPage: 5,
    });

    const [form, setForm] = useState({});

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

    const closeDialog = () => {
        dispatch(
            toggleCrudDialog({
                open: false,
                type: "",
            })
        );
    };

    useEffect(() => {
        dispatch(fetchProducts(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (product) {
            setForm(product);
        }
    }, [product]);

    useEffect(() => {
        if (validateErrors) {
            validateErrors.forEach((item) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [item.field]: {
                        show: true,
                        text: item.message,
                    },
                }));
            });
        }
    }, [validateErrors, setErrors]);

    return (
        <DashboardCrudLayout
            title="Product List"
            pagination={
                <Paginate
                    data={products}
                    paginate={paginate}
                    handler={setPaginate}
                />
            }
        >
            <ListContent />

            <CrudModal
                open={crudDialog.open}
                type={crudDialog.type}
                close={closeDialog}
            >
                {crudDialog.type === "Details" && <View data={form} />}
                {crudDialog.type === "Edit" && (
                    <Edit
                        data={form}
                        handler={setForm}
                        errors={errors}
                        setErrors={setErrors}
                    />
                )}
            </CrudModal>
        </DashboardCrudLayout>
    );
};

export default BoxList;
