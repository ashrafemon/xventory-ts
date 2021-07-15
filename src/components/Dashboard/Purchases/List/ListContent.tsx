import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { DashboardUrls } from "../../../../constants/urls";
import { deleteCustomer } from "../../../../store/actions/dashboard/customerActions";
import {
    deletePurchase,
    fetchPurchase,
} from "../../../../store/actions/dashboard/purchaseActions";
import { toggleCrudDialog } from "../../../../store/actions/siteAction";
import { generateTableData } from "../../../../utils/helpers";
import SectionTable from "../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { storeId } = useParams<{ storeId: string }>();
    const { purchases } = useSelector(
        (state: RootStateOrAny) => state.purchases
    );
    const [tableHeaders, setTableHeaders] = useState([
        "referenceNo",
        "invoiceId",
        "invoiceType",
        // "email",
        // "gender",
        "paymentStatus",
    ]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deletePurchase(id));
    };

    const editHandler = (id) => {
        let path = DashboardUrls.PURCHASE.edit.replace(":storeId", storeId);
        path = path.replace(":id", id);
        history.push(path);
    };

    const itemFetchHandler = (id, type) => {
        if (type === "Edit") {
            editHandler(id);
        } else {
            dispatch(
                fetchPurchase(id, () =>
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

    useEffect(() => {
        if (
            purchases &&
            purchases.purchaseList &&
            purchases.purchaseList.length > 0
        ) {
            const rows = generateTableData(
                purchases.purchaseList,
                tableHeaders
            );

            setData(rows);
        }
    }, [purchases, tableHeaders]);

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
