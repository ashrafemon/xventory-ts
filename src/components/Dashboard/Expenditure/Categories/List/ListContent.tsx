import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteExpenseCategory,
    fetchExpenseCategory,
} from "../../../../../store/actions/dashboard/expenditure/expenseCategoryActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTableData } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { expenseCategories } = useSelector(
        (state: RootStateOrAny) => state.expenseCategories
    );
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteExpenseCategory(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchExpenseCategory(id, () =>
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
            expenseCategories &&
            expenseCategories.expenseCategoryList &&
            expenseCategories.expenseCategoryList.length > 0
        ) {
            const rows = generateTableData(
                expenseCategories.expenseCategoryList,
                tableHeaders
            );

            setData(rows);
        } else {
            setData([]);
        }
    }, [expenseCategories, tableHeaders]);

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
