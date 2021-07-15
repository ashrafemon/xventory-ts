import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteSupplier,
    fetchSupplier,
} from "../../../../../store/actions/dashboard/product/supplierAction";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { suppliers } = useSelector(
        (state: RootStateOrAny) => state.suppliers
    );
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteSupplier(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchSupplier(id, () =>
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
            suppliers &&
            suppliers.supplierList &&
            suppliers.supplierList.length > 0
        ) {
            const { headers, rows } = generateTable(suppliers.supplierList);

            setTableHeaders(headers);
            setData(rows);
        }
    }, [suppliers]);

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
