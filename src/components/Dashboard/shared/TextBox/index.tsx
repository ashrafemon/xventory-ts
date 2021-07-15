import {
    Typography,
    Tooltip,
    makeStyles,
    Grid,
    FormLabel,
    TextField,
} from "@material-ui/core";
import React from "react";
import HelpIcon from "@material-ui/icons/Help";

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
        "& MuiInputBase-root": {
            padding: 15,
        },
        "& .MuiInputBase-input": {
            backgroundColor: "#fff",
            borderRadius: 8,
        },
        "& .MuiOutlinedInput-root": {
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
        "& .MuiOutlinedInput-multiline": {
            padding: 0,

            "& .MuiOutlinedInput-input": {
                padding: 15,
            },
        },
    },
}));

const TextBox = ({
    label = "",
    required = false,
    tooltipText = "",
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
                <TextField
                    className={classes.inputField}
                    fullWidth
                    variant="outlined"
                    size="small"
                    {...props}
                />
            </Grid>
        </Grid>
    );
};

export default TextBox;
