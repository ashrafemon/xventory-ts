import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import CrudModal from "../../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../../components/Dashboard/System/Currencies/List/ListContent";
import Edit from "../../../../components/Dashboard/System/Currencies/List/ListItem/Edit";
import View from "../../../../components/Dashboard/System/Currencies/List/ListItem/View";
import DashboardCrudLayout from "../../../../layouts/DashboardCrudLayout";
import { fetchCurrencies } from "../../../../store/actions/dashboard/system/currencyActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";

const CurrencyList = () => {
    const dispatch = useDispatch();

    const { currency, currencies } = useSelector(
        (state: RootStateOrAny) => state.currencies
    );
    const { crudDialog, validateErrors } = useSelector((state: RootStateOrAny) => state.site);

    const [paginate, setPaginate] = useState({
        page: 0,
        rowsPerPage: 5,
    });

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({
        title: {text: "", show: false},
        code: {text: "", show: false},
        symbolLeft: {text: "", show: false},
        symbolRight: {text: "", show: false},
        decimalPlace: {text: "", show: false},
        status: {text: "", show: false},
        storeList: {text: "", show: false},
    });

    useEffect(() => {
        if (currency) {
            setForm(currency);
        }
    }, [currency]);

    const closeDialog = () => {
        dispatch(
            toggleCrudDialog({
                open: false,
                type: "",
            })
        );
    };

    useEffect(() => {
        dispatch(fetchCurrencies(paginate.rowsPerPage, paginate.page));
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
            title="Currency List"
            pagination={
                <Paginate
                    data={currencies}
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
                    <Edit data={form} handler={setForm} errors={errors} setErrors={setErrors} />
                )}
            </CrudModal>
        </DashboardCrudLayout>
    );
};

export default CurrencyList;
