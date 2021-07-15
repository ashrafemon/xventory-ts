import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteExpense,
    fetchExpense,
} from "../../../../../store/actions/dashboard/expenditure/expenseActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTableData } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { expenses } = useSelector((state: RootStateOrAny) => state.expenses);
    const [tableHeaders, setTableHeaders] = useState([
        "referenceNo",
        "expenseReason",
        "amount",
        "returnable",
    ]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteExpense(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchExpense(id, () =>
                dispatch(
                    toggleCrudDialog({
                        open: true,
                        type: type,
                    })
                )
            )
        );
    };

    useEffect(() => {
        if (
            expenses &&
            expenses.expenseList &&
            expenses.expenseList.length > 0
        ) {
            const rows = generateTableData(expenses.expenseList, tableHeaders);

            setData(rows);
        } else {
            setData([]);
        }
    }, [expenses, tableHeaders]);

    return (
        <SectionTable
            headers={tableHeaders}
            data={data}
            itemDeleteHandler={itemDeleteHandler}
            itemFetchHandler={itemFetchHandler}
            // itemEditHandler={itemEditHandler}
        />
    );
};

export default ListContent;
