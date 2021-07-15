import React from "react";
import {
    Box,
    Grid,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

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
    value: any;
    multiple?: boolean;
    type?: string;
    required?: boolean;
    tooltipText?: string;
    placeholder?: string;
    options: any;
    optionLabel: string;
    onChange?: (e: any, data: any) => void;
    error?: boolean;
    helperText?: string;
};

const CrudAutoCompleteTextBox = ({
    label,
    options = [],
    optionLabel = "title",
    onChange,
    error,
    helperText,
    ...props
}: IProps) => {
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
                    <Autocomplete
                        options={options}
                        getOptionLabel={(option) => option[optionLabel]}
                        fullWidth
                        onChange={onChange}
                        className={classes.inputField}
                        size="small"
                        {...props}
                        renderInput={(params) => (
                            <TextField
                                error={error && error}
                                helperText={helperText && helperText}
                                fullWidth
                                variant="outlined"
                                {...params}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(CrudAutoCompleteTextBox);
