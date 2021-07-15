import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../../components/Dashboard/System/Stores/List/ListContent";
import Edit from "../../../../components/Dashboard/System/Stores/List/ListItem/Edit";
import View from "../../../../components/Dashboard/System/Stores/List/ListItem/View";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import {
    fetchTimeZones,
    toggleCrudDialog,
} from "../../../../store/actions/siteAction";
import { fetchStoresWithPaginate } from "../../../../store/actions/storeAction";

const StoreList = () => {
    const dispatch = useDispatch();
    const { store, stores } = useSelector(
        (state: RootStateOrAny) => state.stores
    );
    const { crudDialog, validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [paginate, setPaginate] = useState({
        page: 0,
        rowsPerPage: 5,
    });

    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        code: { text: "", show: false },
        phone: { text: "", show: false },
        email: { text: "", show: false },
        cashier: { text: "", show: false },
        timezone: { text: "", show: false },
        invoiceEditLifeSpan: { text: "", show: false },
        invoiceEditLifeSpanUnit: { text: "", show: false },
        invoiceDeleteLifeSpan: { text: "", show: false },
        invoiceDeleteLifeSpanUnit: { text: "", show: false },
        afterSellPage: { text: "", show: false },
        autoPrintReceipt: { text: "", show: false },
        stockAlertQuantity: { text: "", show: false },
        tableItemLimit: { text: "", show: false },
    });

    const [form, setForm] = useState({});

    useEffect(() => {
        if (store) {
            setForm(store);
        }
    }, [store]);

    const closeDialog = () => {
        dispatch(
            toggleCrudDialog({
                open: false,
                type: "",
            })
        );
    };

    useEffect(() => {
        dispatch(fetchStoresWithPaginate(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        dispatch(fetchTimeZones());
    }, [dispatch]);

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
            title="Store List"
            pagination={
                <Paginate
                    data={stores}
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

export default StoreList;
