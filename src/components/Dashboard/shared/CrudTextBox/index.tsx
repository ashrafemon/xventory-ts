import React from "react";
import {Box, Grid, makeStyles, TextField, Typography,} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    labelBox: {
        padding: "5px 15px 5px 5px ",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: "#272934",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    label: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
        textAlign: "right",
    },
    fieldBox: {
        padding: 5,
        backgroundColor: "#1F2129",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    inputField: {
        backgroundColor: "transparent",
        "& .MuiInput-underline:after": {
            border: 0,
        },
        "& MuiInputBase-root": {
            // padding: 15,
        },
        "& .MuiInputBase-input": {
            color: "#fff",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: 0,
            },
            "&:hover fieldset": {
                border: 0,
            },
            "&.Mui-focused fieldset": {
                border: 0,
            },
        },
    },
}));

type IProps = {
    label: string;
    value: string;
    onChange?: (e) => void;
    multiple?: boolean;
    multiline?: boolean;
    type?: string;
    readonly?: boolean;
    error?: boolean;
    helperText?: string;
    InputProps?: any
};

const CrudTextBox = ({label, value, onChange, ...props}: IProps) => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={4} className={classes.labelBox}>
                    <Typography variant="body1" className={classes.label}>
                        {label} :
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.fieldBox}>
                    <TextField
                        {...props}
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={value}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(CrudTextBox);
