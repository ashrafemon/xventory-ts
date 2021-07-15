import { Grid, IconButtonProps, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import ContentShowSelectBox from "./ContentShowSelectBox";

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

type IProps = {
    data?: any;
    paginate?: any;
    handler?: () => {};
};

const Paginate = ({ data, paginate, handler }) => {
    const classes = useStyles();

    const fieldChangeHandler = (field, value) => {
        handler((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <Grid container justify="space-between">
            <Grid item xs={12} sm={4}>
                <ContentShowSelectBox
                    value={paginate.rowsPerPage}
                    fieldChangeHandler={fieldChangeHandler}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Pagination
                    onChange={(e, value) => {
                        fieldChangeHandler("page", value - 1);
                        console.log(value);
                    }}
                    count={data && data.totalPages}
                    variant="outlined"
                    shape="rounded"
                    className={classes.paginate}
                    page={paginate.page + 1}
                />
            </Grid>
        </Grid>
    );
};

export default Paginate;
