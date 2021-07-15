import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteUnit,
    fetchUnit,
} from "../../../../../store/actions/dashboard/system/unitActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { units } = useSelector((state: RootStateOrAny) => state.units);
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteUnit(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(fetchUnit(id, () => dispatch(
            toggleCrudDialog({
                open: true,
                type: type,
            })
        )));

    };

    useEffect(() => {
        if (units && units.unitList) {
            const { headers, rows } = generateTable(units.unitList);
            setTableHeaders(headers);
            setData(rows);
        }
    }, [units]);

    // useEffect(() => {
    //     if (units && units.unitList) {
    //         setData(generateTableData(units.unitList, tableHeaders));
    //     }
    // }, [tableHeaders, units]);

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
