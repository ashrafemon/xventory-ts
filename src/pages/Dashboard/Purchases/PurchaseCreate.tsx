import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import CreateContent from "../../../components/Dashboard/Purchases/Create/CreateContent";
import DetailContent from "../../../components/Dashboard/Purchases/Details/DetailContent";
import DashboardCrudLayout from "../../../layouts/DashboardCrudLayout";
import { fetchPurchase } from "../../../store/actions/dashboard/purchaseActions";
import { RESET_PURCHASE_FORM } from "../../../store/types";
import {fetchPaymentMethods} from "../../../store/actions/dashboard/system/paymentActions";

const PurchaseCreate = () => {
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
            dispatch(fetchPurchase(id));
            setEditStatus(true);
        } else {
            setEditStatus(false);
        }
    }, [dispatch, id]);

    useEffect(() => {
        return () => {
            dispatch({
                type: RESET_PURCHASE_FORM,
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

    useEffect(() => {
        dispatch(fetchPaymentMethods())
    }, [dispatch])

    return (
        <>
            <DashboardCrudLayout
                title={`Purchase ${editStatus ? "Edit" : "Create"}`}
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

export default PurchaseCreate;
