import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ListContent from "../../../../components/Dashboard/Product/Categories/List/ListContent";
import Edit from "../../../../components/Dashboard/Product/Categories/List/ListItem/Edit";
import View from "../../../../components/Dashboard/Product/Categories/List/ListItem/View";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchCategories } from "../../../../store/actions/dashboard/product/categoryAction";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const CategoryList = () => {
    const dispatch = useDispatch();
    const { category, categories } = useSelector(
        (state: RootStateOrAny) => state.categories
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
        dispatch(fetchCategories(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (category) {
            setForm(category);
        }
    }, [category]);

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
            title="Category List"
            pagination={
                <Paginate
                    data={categories}
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

export default CategoryList;
