import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import CrudModal from "../../../components/Dashboard/shared/CrudModal";
import Paginate from "../../../components/Dashboard/shared/Paginate";
import ListContent from "../../../components/Dashboard/Loans/List/ListContent";
import Edit from "../../../components/Dashboard/Loans/List/ListItem/Edit";
import View from "../../../components/Dashboard/Loans/List/ListItem/View";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";
import {toggleCrudDialog} from "../../../store/actions/siteAction";
import {fetchLoans} from "../../../store/actions/dashboard/loanAction";

const LoanList = () => {
    const dispatch = useDispatch();
    const {loan, loans} = useSelector((state: RootStateOrAny) => state.loans);
    const {crudDialog, validateErrors} = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [paginate, setPaginate] = useState({
        page: 0,
        rowsPerPage: 5,
    });

    const [form, setForm] = useState({});

    const [errors, setErrors] = useState({
        date: {text: "", show: false},
        loanFrom: {text: "", show: false},
        referenceNo: {text: "", show: false},
        loadHeadline: {text: "", show: false},
        amount: {text: "", show: false},
        interest: {text: "", show: false},
        details: {text: "", show: false},
        attachmentList: {text: "", show: false},
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
        dispatch(fetchLoans(paginate.rowsPerPage, paginate.page));
    }, [dispatch, paginate.page, paginate.rowsPerPage]);

    useEffect(() => {
        if (loan) {
            setForm(loan);
        }
    }, [loan]);

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
            title="Loan List"
            pagination={
                <Paginate
                    data={loans}
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
                    <Edit data={form} handler={setForm} errors={errors} setErrors={setErrors}/>
                )}
            </CrudModal>
        </DashboardCrudLayout>
    );
};

export default LoanList;
