import {
    Box,
    makeStyles,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import React from "react";
import { BootstrapDarkInput } from "./../../../../styles/globalStyles";

const useStyles = makeStyles(() => ({
    selectBox: {
        border: "2px solid #60D1F6",
        backgroundColor: "#272934",
        padding: "15px 25px",
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
    },
    label: {
        fontSize: 16,
        color: "#60D1F6",
        flex: 3,
    },
    select: {
        flex: 1,
    },
}));

const ContentShowSelectBox = ({
    value = 10,
    fieldChangeHandler = (rows, value) => {},
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.selectBox}>
            <Typography className={classes.label} variant="h6">
                Content in Each Page :
            </Typography>
            <Select
                className={classes.select}
                input={<BootstrapDarkInput />}
                fullWidth
                value={value}
                onChange={(e) =>
                    fieldChangeHandler("rowsPerPage", e.target.value)
                }
            >
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="25">25</MenuItem>
                <MenuItem value="50">50</MenuItem>
                <MenuItem value="100">100</MenuItem>
            </Select>
        </Box>
    );
};

export default ContentShowSelectBox;
