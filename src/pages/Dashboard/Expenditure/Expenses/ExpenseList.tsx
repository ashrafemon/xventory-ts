import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ListContent from "../../../../components/Dashboard/Expenditure/Expenses/List/ListContent";
import Edit from "../../../../components/Dashboard/Expenditure/Expenses/List/ListItem/Edit";
import View from "../../../../components/Dashboard/Expenditure/Expenses/List/ListItem/View";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchExpenses } from "../../../../store/actions/dashboard/expenditure/expenseActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const ExpenseList = () => {
    const dispatch = useDispatch();
    const { expense, expenses } = useSelector(
        (state: RootStateOrAny) => state.expenses
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
        referenceNo: { text: "", show: false },
        expenseCategory: { text: "", show: false },
        expenseReason: { text: "", show: false },
        amount: { text: "", show: false },
        returnable: { text: "", show: false },
        note: { text: "", show: false },
        attachmentList: { text: "", show: false },
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
        dispatch(fetchExpenses(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (expense) {
            setForm(expense);
        }
    }, [expense]);

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
            title="Expense List"
            pagination={
                <Paginate
                    data={expenses}
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

export default ExpenseList;
