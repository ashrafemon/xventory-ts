import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { DashboardUrls } from "../../../../constants/urls";
import {
    deleteQuotation,
    fetchQuotation,
} from "../../../../store/actions/dashboard/quotationActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";
import { generateTableData } from "../../../../utils/helpers";
import SectionTable from "../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { storeId } = useParams<{ storeId: string }>();
    const { quotations } = useSelector(
        (state: RootStateOrAny) => state.quotations
    );
    const [tableHeaders, setTableHeaders] = useState([
        "referenceNo",
        "quotationStatus",
        "grandTotal",
        "status",
    ]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteQuotation(id));
    };

    const editHandler = (id) => {
        let path = DashboardUrls.QUOTATION.edit.replace(":storeId", storeId);
        path = path.replace(":id", id);
        history.push(path);
    };

    const itemFetchHandler = (id, type) => {
        if (type === "Edit") {
            editHandler(id);
        } else {
            dispatch(
                fetchQuotation(id, () =>
                    dispatch(
                        toggleCrudDialog({
                            open: true,
                            type: type,
                        })
                    )
                )
            );
        }
    };

    console.log(quotations);

    useEffect(() => {
        if (
            quotations &&
            quotations.quotationList &&
            quotations.quotationList.length > 0
        ) {
            const rows = generateTableData(
                quotations.quotationList,
                tableHeaders
            );

            setData(rows);
        }
    }, [quotations, tableHeaders]);

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
