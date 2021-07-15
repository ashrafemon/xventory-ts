import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import CrudModal from "../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../components/Dashboard/Quotations/List/ListContent";
import Edit from "../../../components/Dashboard/Quotations/List/ListItem/Edit";
import View from "../../../components/Dashboard/Quotations/List/ListItem/View";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";
import {toggleCrudDialog} from "../../../store/actions/siteAction";
import {fetchQuotations} from "../../../store/actions/dashboard/quotationActions";

const QuotationList = () => {
    const dispatch = useDispatch();
    const {quotation, quotations} = useSelector(
        (state: RootStateOrAny) => state.quotations
    );
    const {crudDialog, validateErrors} = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [paginate, setPaginate] = useState({
        page: 0,
        rowsPerPage: 5,
    });

    const [form, setForm] = useState({});

    const [errors, setErrors] = useState({
        name: {text: "", show: false},
        code: {text: "", show: false},
        details: {text: "", show: false},
        status: {text: "", show: false},
        storeList: {text: "", show: false},
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
        dispatch(fetchQuotations(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (quotation) {
            setForm(quotation);
        }
    }, [quotation]);

    return (
        <DashboardCrudLayout
            title="Quotation List"
            pagination={
                <Paginate
                    data={quotations}
                    paginate={paginate}
                    handler={setPaginate}
                />
            }
        >
            <ListContent/>

            <CrudModal
                open={crudDialog.open}
                type={crudDialog.type}
                close={closeDialog}
            >
                {crudDialog.type === "Details" && <View data={form}/>}
                {crudDialog.type === "Edit" && (
                    <Edit data={form} handler={setForm}/>
                )}
            </CrudModal>
        </DashboardCrudLayout>
    );
};

export default QuotationList;
