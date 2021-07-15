import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ListContent from "../../../components/Dashboard/Customers/List/ListContent";
import Edit from "../../../components/Dashboard/Customers/List/ListItem/Edit";
import View from "../../../components/Dashboard/Customers/List/ListItem/View";
import CrudModal from "../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../components/Dashboard/shared/Paginate";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";
import { fetchCustomers } from "../../../store/actions/dashboard/customerActions";
import { toggleCrudDialog } from "../../../store/actions/siteAction";

const CustomerList = () => {
    const dispatch = useDispatch();
    const { customer, customers } = useSelector(
        (state: RootStateOrAny) => state.customers
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
        dispatch(fetchCustomers(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (customer) {
            setForm(customer);
        }
    }, [customer]);

    return (
        <DashboardCrudLayout
            title="Customer List"
            pagination={
                <Paginate
                    data={customers}
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
                    <Edit data={form} handler={setForm} />
                )}
            </CrudModal>
        </DashboardCrudLayout>
    );
};

export default CustomerList;
