import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
    deleteProduct,
    fetchProduct,
} from "../../../../../store/actions/dashboard/product/productAction";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { generateTableData } from "../../../../../utils/helpers";
import SectionTable from "../../../shared/SectionTable";

const ListContent = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootStateOrAny) => state.products);
    const [tableHeaders, setTableHeaders] = useState([
        "name",
        "code",
        "price",
        "status",
    ]);
    const [data, setData] = useState([]);

    const itemDeleteHandler = (id) => {
        dispatch(deleteProduct(id));
    };

    const itemFetchHandler = (id, type) => {
        dispatch(
            fetchProduct(id, () =>
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
            products &&
            products.productList &&
            products.productList.length > 0
        ) {
            // const { headers, rows } = generateTable(products.productList);
            const rows = generateTableData(products.productList, tableHeaders);

            // setTableHeaders(headers);
            setData(rows);
        }
    }, [products, tableHeaders]);

    console.log(products);

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
