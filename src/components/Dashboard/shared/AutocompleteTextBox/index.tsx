import {
    FormLabel,
    Grid,
    makeStyles,
    TextField,
    Tooltip,
    Typography,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles(() => ({
    inputLabel: {
        color: "#fff",
        paddingTop: 5,
        display: "block",
        textAlign: "right",
    },
    requiredStar: {
        color: "#EB5757",
        fontSize: 16,
    },
    tooltipIcon: {
        position: "relative",
        top: 5,
    },
    inputField: {
        "& .MuiInput-underline:after": {
            border: 0,
        },
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#fff",
            borderRadius: 8,
            "& fieldset": {
                // border: 0,
            },
            "&:hover fieldset": {
                // border: 0,
            },
            "&.Mui-focused fieldset": {
                // border: 0,
            },
        },
    },
}));

const AutocompleteTextBox = ({
    label = "",
    required = false,
    tooltipText = "",
    placeholder,
    options = [],
    error = false,
    helperText = "",
    optionLabel = "title",
    onChange = (e, data) => {},
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid
            container
            alignItems="stretch"
            justify="space-between"
            spacing={3}
        >
            <Grid item xs={12} sm={3}>
                <FormLabel className={classes.inputLabel}>
                    {label}
                    {required && (
                        <Typography
                            variant="caption"
                            className={classes.requiredStar}
                        >
                            *
                        </Typography>
                    )}{" "}
                    :{" "}
                    {tooltipText && (
                        <Tooltip title={tooltipText} placement="top">
                            <HelpIcon
                                fontSize="small"
                                className={classes.tooltipIcon}
                            />
                        </Tooltip>
                    )}
                </FormLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
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
                            fullWidth
                            variant="outlined"
                            {...params}
                            error={error}
                            helperText={helperText}
                        />
                    )}
                />
            </Grid>
        </Grid>
    );
};

export default AutocompleteTextBox;
