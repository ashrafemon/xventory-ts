import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deletePaymentMethod,
    fetchPaymentMethod,
} from "../../../../../store/actions/dashboard/system/paymentActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { paymentMethods } = useSelector(
        (state: RootStateOrAny) => state.paymentMethods
    );
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deletePaymentMethod(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(fetchPaymentMethod(id, () => dispatch(
            toggleCrudDialog({
                open: true,
                type: type,
            })
        )));

    };

    useEffect(() => {
        if (paymentMethods && paymentMethods.paymentMethodList) {
            // setTableHeaders(generateTableHeader(paymentMethods.paymentMethodList[0]));

            const { headers, rows } = generateTable(
                paymentMethods.paymentMethodList
            );

            setTableHeaders(headers);
            setData(rows);
        }
    }, [paymentMethods]);

    // useEffect(() => {
    //     if (paymentMethods && paymentMethods.paymentMethodList && tableHeaders) {
    //         setData(generateTableData(paymentMethods.paymentMethodList, tableHeaders));
    //     }
    // }, [paymentMethods, tableHeaders]);

    return (
        <SectionTable
            headers={tableHeaders}
            data={data}
            itemDeleteHandler={itemDeleteHandler}
            itemFetchHandler={itemFetchHandler}
        />
    );
};

export default ListContent;
