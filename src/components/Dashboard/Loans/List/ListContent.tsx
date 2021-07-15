import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";
import { generateTableData } from "../../../../utils/helpers";
import SectionTable from "../../shared/SectionTable";
import {
    deleteLoan,
    fetchLoan,
} from "../../../../store/actions/dashboard/loanAction";

const ListContent = () => {
    const dispatch = useDispatch();
    const { loans } = useSelector((state: RootStateOrAny) => state.loans);
    const [tableHeaders, setTableHeaders] = useState([
        "loanFrom",
        "referenceNo",
        "amount",
        "interest",
        "paymentStatus",
    ]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteLoan(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchLoan(id, () =>
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
        if (loans && loans.loanList && loans.loanList.length > 0) {
            const rows = generateTableData(loans.loanList, tableHeaders);

            setData(rows);
        } else {
            setData([]);
        }
    }, [loans, tableHeaders]);

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
