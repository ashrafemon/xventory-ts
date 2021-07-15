import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import AddIcon from "@material-ui/icons/Add";
import { ResetButton, SubmitButton } from "../../../../styles/globalStyles";

const useStyles = makeStyles(() => ({
    btn: {
        marginRight: 10,
        "&:last-child": {
            marginRight: 0,
        },
    },
}));

const FormAction = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={3}/>
            <Grid item xs={12} sm={9}>
                <ResetButton
                    className={classes.btn}
                    variant="contained"
                    startIcon={<ReplayIcon />}
                >
                    Reset All
                </ResetButton>
                <SubmitButton
                    type="submit"
                    className={classes.btn}
                    variant="contained"
                    startIcon={<AddIcon />}
                >
                    Add Now
                </SubmitButton>
            </Grid>
        </Grid>
    );
};

export default FormAction;
