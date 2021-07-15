import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ListContent from "../../../../components/Dashboard/Product/Suppliers/List/ListContent";
import Edit from "../../../../components/Dashboard/Product/Suppliers/List/ListItem/Edit";
import View from "../../../../components/Dashboard/Product/Suppliers/List/ListItem/View";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchSuppliers } from "../../../../store/actions/dashboard/product/supplierAction";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const SupplierList = () => {
    const dispatch = useDispatch();
    const { supplier, suppliers } = useSelector(
        (state: RootStateOrAny) => state.suppliers
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
        phone: { text: "", show: false },
        email: { text: "", show: false },
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
        dispatch(fetchSuppliers(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (supplier) {
            setForm(supplier);
        }
    }, [supplier]);

    return (
        <DashboardCrudLayout
            title="Supplier List"
            pagination={
                <Paginate
                    data={suppliers}
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

export default SupplierList;
