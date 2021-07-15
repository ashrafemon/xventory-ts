import { Box, Chip, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    labelBox: {
        padding: "10px 15px 10px 5px",
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
    value: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
    },
    fieldBox: {
        padding: "10px 5px 10px 15px",
        backgroundColor: "#1F2129",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    chip: {
        color: "#fff",
        marginRight: 5,
        "&:last-child": {
            marginRight: 0,
        },
    },
}));

type IProps = {
    label: string;
    value: string | any;
    multiple?: boolean;
};

const CrudLabelBox = ({ label, value, multiple, ...props }: IProps) => {
    console.log(value);
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
                    {multiple ? (
                        value &&
                        value.length > 0 &&
                        value.map((item, i) => (
                            <Chip
                                key={i}
                                label={item.name}
                                variant="outlined"
                                className={classes.chip}
                            />
                        ))
                    ) : (
                        <Typography variant="body1" className={classes.value}>
                            {value ? value : "N/A"}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CrudLabelBox;
