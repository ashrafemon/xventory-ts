import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteCategory,
    fetchCategory,
} from "../../../../../store/actions/dashboard/product/categoryAction";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTable } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(
        (state: RootStateOrAny) => state.categories
    );
    const [tableHeaders, setTableHeaders] = useState([]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteCategory(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchCategory(id, () =>
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
            categories &&
            categories.categoryList &&
            categories.categoryList.length > 0
        ) {
            const { headers, rows } = generateTable(categories.categoryList);

            setTableHeaders(headers);
            setData(rows);
        }
    }, [categories]);

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
