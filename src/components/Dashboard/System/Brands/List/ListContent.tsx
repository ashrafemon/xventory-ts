import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteBrand,
    fetchBrand,
} from "../../../../../store/actions/dashboard/system/brandActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { brands } = useSelector((state: RootStateOrAny) => state.brands);
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteBrand(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(fetchBrand(id, () => dispatch(
            toggleCrudDialog({
                open: true,
                type: type,
            })
        )));
    };

    useEffect(() => {
        if (brands && brands.brandList) {
            // setTableHeaders(generateTableHeader(brands.boxList[0]));
            const { headers, rows } = generateTable(brands.brandList);

            setTableHeaders(headers);
            setData(rows);
        }
    }, [brands]);

    // useEffect(() => {
    //     if (brands && brands.brandList && tableHeaders) {
    //         setData(generateTableData(brands.brandList, tableHeaders));
    //     }
    // }, [brands, tableHeaders]);

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
