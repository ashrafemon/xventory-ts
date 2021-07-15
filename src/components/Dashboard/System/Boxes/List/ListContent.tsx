import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteBox,
    fetchBox,
} from "../../../../../store/actions/dashboard/system/boxActions";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { boxes } = useSelector((state: RootStateOrAny) => state.boxes);
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteBox(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchBox(id, () =>
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
        if (boxes && boxes.boxList && boxes.boxList.length > 0) {
            // setTableHeaders(generateTableHeader(boxes.boxList[0]));
            const { headers, rows } = generateTable(boxes.boxList);

            setTableHeaders(headers);
            setData(rows);
        }
    }, [boxes]);

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
