import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ListContent from "../../../../components/Dashboard/Expenditure/Categories/List/ListContent";
import Edit from "../../../../components/Dashboard/Expenditure/Categories/List/ListItem/Edit";
import View from "../../../../components/Dashboard/Expenditure/Categories/List/ListItem/View";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchExpenseCategories } from "../../../../store/actions/dashboard/expenditure/expenseCategoryActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const ExpenseCategoryList = () => {
    const dispatch = useDispatch();
    const { expenseCategory, expenseCategories } = useSelector(
        (state: RootStateOrAny) => state.expenseCategories
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
        slug: { text: "", show: false },
        details: { text: "", show: false },
        status: { text: "", show: false },
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
        dispatch(fetchExpenseCategories(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (expenseCategory) {
            setForm(expenseCategory);
        }
    }, [expenseCategory]);

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
            title="Expense Category List"
            pagination={
                <Paginate
                    data={expenseCategories}
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

export default ExpenseCategoryList;
