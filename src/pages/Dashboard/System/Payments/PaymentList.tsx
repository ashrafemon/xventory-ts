import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../../components/Dashboard/System/Payments/List/ListContent";
import Edit from "../../../../components/Dashboard/System/Payments/List/ListItem/Edit";
import View from "../../../../components/Dashboard/System/Payments/List/ListItem/View";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchPaymentMethods } from "../../../../store/actions/dashboard/system/paymentActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const PaymentList = () => {
    const dispatch = useDispatch();
    const { paymentMethod, paymentMethods } = useSelector(
        (state: RootStateOrAny) => state.paymentMethods
    );
    const { crudDialog, validateErrors } = useSelector((state: RootStateOrAny) => state.site);

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

    useEffect(() => {
        if (paymentMethod) {
            setForm(paymentMethod);
        }
    }, [paymentMethod]);

    const closeDialog = () => {
        dispatch(
            toggleCrudDialog({
                open: false,
                type: "",
            })
        );
    };

    useEffect(() => {
        dispatch(fetchPaymentMethods(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

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
        <DashboardCrudLayout
            title="Payment Gateway List"
            pagination={
                <Paginate
                    data={paymentMethods}
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
                    <Edit data={form} handler={setForm} errors={errors} setErrors={setErrors}/>
                )}
            </CrudModal>
        </DashboardCrudLayout>
    );
};

export default PaymentList;
