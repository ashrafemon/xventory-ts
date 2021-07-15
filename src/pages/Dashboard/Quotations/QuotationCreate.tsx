import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import CreateContent from "../../../components/Dashboard/Quotations/Create/CreateContent";
import DetailContent from "../../../components/Dashboard/Quotations/Details/DetailContent";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";
import { fetchQuotation } from "../../../store/actions/dashboard/quotationActions";
import { RESET_QUOTATION_FORM } from "../../../store/types";

const QuotationCreate = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ storeId: string; id: string }>();
    const {validateErrors} = useSelector((state:RootStateOrAny) => state.site)

    const [editStatus, setEditStatus] = useState(false);

    const [errors, setErrors] = useState({
        date: {text: '', show: false},
        referenceNo: {text: '', show: false},
        note: {text: '', show: false},
        supplier: {text: '', show: false},
        customer: {text: '', show: false},
    })

    useEffect(() => {
        if (id) {
            dispatch(fetchQuotation(id));
            setEditStatus(true);
        } else {
            setEditStatus(false);
        }
    }, [dispatch, id]);

    useEffect(() => {
        return () => {
            dispatch({
                type: RESET_QUOTATION_FORM,
            });
        };
    }, [dispatch]);

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
        <>
            <DashboardCrudLayout
                title={`Quotation ${editStatus ? "Edit" : "Create"}`}
            >
                <CreateContent errors={errors} setErrors={setErrors}/>
            </DashboardCrudLayout>

            <Box mt={3}>
                <DashboardCrudLayout title="Details">
                    <DetailContent errors={errors} setErrors={setErrors}/>
                </DashboardCrudLayout>
            </Box>
        </>
    );
};

export default QuotationCreate;
