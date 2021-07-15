import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../../components/Dashboard/System/Units/List/ListContent";
import Edit from "../../../../components/Dashboard/System/Units/List/ListItem/Edit";
import View from "../../../../components/Dashboard/System/Units/List/ListItem/View";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchUnites } from "../../../../store/actions/dashboard/system/unitActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const UnitList = () => {
    const dispatch = useDispatch();
    const { unit, units } = useSelector((state: RootStateOrAny) => state.units);
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
        if (unit) {
            setForm(unit);
        }
    }, [unit]);

    const closeDialog = () => {
        dispatch(
            toggleCrudDialog({
                open: false,
                type: "",
            })
        );
    };

    useEffect(() => {
        dispatch(fetchUnites(paginate.rowsPerPage, paginate.page));
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
            title="Unit List"
            pagination={
                <Paginate
                    data={units}
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

export default UnitList;
