import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteCustomer,
    fetchCustomer,
} from "../../../../store/actions/dashboard/customerActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";
import { generateTableData } from "../../../../utils/helpers";
import SectionTable from "../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { customers } = useSelector(
        (state: RootStateOrAny) => state.customers
    );
    const [tableHeaders, setTableHeaders] = useState([
        "name",
        "creditBalance",
        "phone",
        "email",
        "gender",
        "status",
    ]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteCustomer(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchCustomer(id, () =>
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
            customers &&
            customers.customerList &&
            customers.customerList.length > 0
        ) {
            const rows = generateTableData(
                customers.customerList,
                tableHeaders
            );

            setData(rows);
        }
    }, [customers, tableHeaders]);

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
