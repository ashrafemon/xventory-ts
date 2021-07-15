import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteCurrency,
    fetchCurrency,
} from "../../../../../store/actions/dashboard/system/currencyActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { currencies } = useSelector(
        (state: RootStateOrAny) => state.currencies
    );
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteCurrency(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(fetchCurrency(id, () => dispatch(
            toggleCrudDialog({
                open: true,
                type: type,
            })
        )));

    };

    useEffect(() => {
        if (currencies && currencies.currencyList) {
            // setTableHeaders(generateTableHeader(currencies.currencyList[0]));
            const { headers, rows } = generateTable(currencies.currencyList);

            setTableHeaders(headers);
            setData(rows);
        }
    }, [currencies]);

    // useEffect(() => {
    //     if (currencies && currencies.currencyList && tableHeaders) {
    //         setData(generateTableData(currencies.currencyList, tableHeaders));
    //     }
    // }, [currencies, tableHeaders]);

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
