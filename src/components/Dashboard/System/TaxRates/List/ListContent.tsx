import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteTaxRate,
    fetchTaxRate,
} from "../../../../../store/actions/dashboard/system/taxRateActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { taxRates } = useSelector((state: RootStateOrAny) => state.taxRates);
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteTaxRate(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(fetchTaxRate(id, () => dispatch(
            toggleCrudDialog({
                open: true,
                type:type,
            })
        )));

    };

    useEffect(() => {
        if (taxRates && taxRates.taxRateList) {
            // setTableHeaders(generateTableHeader(taxRates.taxRateList[0]));
            const { headers, rows } = generateTable(taxRates.taxRateList);

            setTableHeaders(headers);
            setData(rows);
        }
    }, [taxRates]);

    // useEffect(() => {
    //     if (taxRates && taxRates.boxList && tableHeaders) {
    //         setData(generateTableData(taxRates.taxRateList, tableHeaders));
    //     }
    // }, [taxRates, tableHeaders]);

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
