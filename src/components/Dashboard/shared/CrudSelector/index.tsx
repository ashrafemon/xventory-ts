import {
    Box,
    FormHelperText,
    Grid,
    makeStyles,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import React from "react";
import { BootstrapDarkInputWithoutBorder } from "../../../../styles/globalStyles";

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
    errorText: {
        color: 'crimson'
    }
}));

type IProps = {
    label: string;
    value: string;
    onChange?: (e) => void;
    multiple?: boolean;
    type?: string;
    readonly?: boolean;
    options: any;
    error?: boolean;
    helperText?: string;
};

const CrudSelector = ({ label, options = [], ...props }: IProps) => {
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
                    <Select
                        {...props}
                        input={<BootstrapDarkInputWithoutBorder />}
                        fullWidth
                        // value={value}
                    >
                        {options &&
                            options.map((item) => (
                                <MenuItem value={item.value}>
                                    {item.text}
                                </MenuItem>
                            ))}
                    </Select>
                    {props.error && (
                        <FormHelperText className={classes.errorText}>{props.helperText}</FormHelperText>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(CrudSelector);
