import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {toggleCrudDialog} from "../../../../../store/actions/siteAction";
import {deleteStore, fetchStore} from "../../../../../store/actions/storeAction";
import {generateTableData} from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

const ListContent = () => {
    const dispatch = useDispatch();
    const {storeId} = useParams<{ storeId: string }>()
    const {stores} = useSelector((state: RootStateOrAny) => state.stores);
    const [tableHeaders] = useState(["name", "code", "phone", "email"]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        if(id !== storeId){
            dispatch(deleteStore(id));
        }else{
            toast.error("You can't delete this store because you logged in with this store")
        }
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchStore(id, () =>
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
        if (stores && stores.storeList) {
            const rows = generateTableData(stores.storeList, tableHeaders);

            setData(rows);
        }
    }, [stores, tableHeaders]);

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
