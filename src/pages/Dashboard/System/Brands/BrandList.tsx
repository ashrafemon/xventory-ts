import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../../components/Dashboard/System/Brands/List/ListContent";
import Edit from "../../../../components/Dashboard/System/Brands/List/ListItem/Edit";
import View from "../../../../components/Dashboard/System/Brands/List/ListItem/View";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchBrands } from "../../../../store/actions/dashboard/system/brandActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const BrandList = () => {
    const dispatch = useDispatch();
    const { brand, brands } = useSelector(
        (state: RootStateOrAny) => state.brands
    );
    const { crudDialog, validateErrors } = useSelector((state: RootStateOrAny) => state.site);

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        code: { text: "", show: false },
        details: { text: "", show: false },
        status: { text: "", show: false },
        storeList: { text: "", show: false },
    });

    const [paginate, setPaginate] = useState({
        page: 0,
        rowsPerPage: 5,
    });

    useEffect(() => {
        if (brand) {
            setForm(brand);
        }
    }, [brand]);

    const closeDialog = () => {
        dispatch(
            toggleCrudDialog({
                open: false,
                type: "",
            })
        );
    };

    useEffect(() => {
        dispatch(fetchBrands(paginate.rowsPerPage, paginate.page));
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
            title="Brand List"
            pagination={
                <Paginate
                    data={brands}
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

export default BrandList;
