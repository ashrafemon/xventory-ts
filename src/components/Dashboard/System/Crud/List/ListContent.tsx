import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import CrudLayout from "../../../../../layouts/CrudLayout";
import {
    DashboardPageContent,
    DashboardPageTitle,
} from "../../../../../styles/globalStyles";
import PageTitle from "../../../shared/PageTitle";
import ContentShowSelectBox from "../../../shared/Paginate/ContentShowSelectBox";
import SectionTable from "../../../shared/SectionTable";

const useStyles = makeStyles(() => ({
    paginate: {
        "& .MuiPagination-ul": {
            justifyContent: "flex-end",
        },
        "& .MuiPaginationItem-root": {
            backgroundColor: "#1F2129",
            color: "#BDBDBD",
            height: 51,
            minWidth: 51,
            fontSize: 16.5,
            fontWeight: 800,
        },
        "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#60D1F6",
            color: "#1F2129",
            height: 51,
            minWidth: 51,
        },
    },
}));

const CrudListContent = () => {
    const classes = useStyles();
    const [tableHeaders] = useState(["ID", "Name", "Total Product", "Status"]);
    const [brands] = useState([
        { id: 1, name: "Test Brand", totalProduct: 2, status: "ACTIVE" },
        { id: 1, name: "Test Brand 2", totalProduct: 2, status: "ACTIVE" },
        { id: 1, name: "Test Brand 3", totalProduct: 2, status: "ACTIVE" },
        { id: 1, name: "Test Brand 4", totalProduct: 2, status: "ACTIVE" },
        { id: 1, name: "Test Brand 5", totalProduct: 2, status: "ACTIVE" },
        { id: 1, name: "Test Brand 6", totalProduct: 2, status: "ACTIVE" },
    ]);

    return (
        <CrudLayout>
            <SectionTable headers={tableHeaders} data={brands} />

            <Box py={2}>
                <Grid container justify="space-between">
                    <Grid item xs={12} sm={3}>
                        <ContentShowSelectBox />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Pagination
                            count={5}
                            variant="outlined"
                            shape="rounded"
                            className={classes.paginate}
                        />
                    </Grid>
                </Grid>
            </Box>
        </CrudLayout>
    );
};

export default CrudListContent;
