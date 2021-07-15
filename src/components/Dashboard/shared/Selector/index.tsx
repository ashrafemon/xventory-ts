import {
    FormLabel,
    Grid,
    makeStyles,
    MenuItem,
    Select,
    Tooltip,
    Typography,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import React from "react";
import { BootstrapInput } from "../../../../styles/globalStyles";

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
}));

const Selector = ({
    label = "",
    required = false,
    options = [],
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
                <Select input={<BootstrapInput />} fullWidth {...props}>
                    {options &&
                        options.map((item) => (
                            <MenuItem value={item.value}>{item.text}</MenuItem>
                        ))}
                </Select>
            </Grid>
        </Grid>
    );
};

export default Selector;
