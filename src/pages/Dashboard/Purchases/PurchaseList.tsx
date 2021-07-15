import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CrudModal from "../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../components/Dashboard/Purchases/List/ListContent";
import Edit from "../../../components/Dashboard/Purchases/List/ListItem/Edit";
import View from "../../../components/Dashboard/Purchases/List/ListItem/View";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";
import { fetchBoxes } from "../../../store/actions/dashboard/system/boxActions";
import { toggleCrudDialog } from "../../../store/actions/siteAction";
import { fetchCustomers } from "../../../store/actions/dashboard/customerActions";
import { fetchPurchases } from "../../../store/actions/dashboard/purchaseActions";

const PurchaseList = () => {
    const dispatch = useDispatch();
    const { purchase, purchases } = useSelector(
        (state: RootStateOrAny) => state.purchases
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
        details: { text: "", show: false },
        status: { text: "", show: false },
        storeList: { text: "", show: false },
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
        dispatch(fetchPurchases(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (purchase) {
            setForm(purchase);
        }
    }, [purchase]);

    return (
        <DashboardCrudLayout
            title="Purchase List"
            pagination={
                <Paginate
                    data={purchases}
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
                {/* {crudDialog.type === "Edit" && (
                    <Edit data={form} handler={setForm} />
                )} */}
            </CrudModal>
        </DashboardCrudLayout>
    );
};

export default PurchaseList;
