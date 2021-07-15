import { Avatar, Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import {RootStateOrAny, useSelector} from "react-redux";
import { Images } from "../../../../constants/themeData";
import ForgetForm from "./ForgetForm";
import NewPasswordForm from "./NewPasswordForm";
import OTPForm from "./OTPForm";
import { useStyles } from "./styled";

const ForgetContent = () => {
    const classes = useStyles();
    const { resetOTPForm, newPasswordForm } = useSelector(
        (state:RootStateOrAny) => state.auth
    );

    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="lg">
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    spacing={5}
                >
                    <Hidden smDown>
                        <Grid item xs={12} sm={12} md={5}>
                            <Avatar
                                src={Images.Forget}
                                className={classes.avatar}
                            />
                        </Grid>
                    </Hidden>

                    <Grid item xs={12} sm={12} md={6}>
                        {newPasswordForm ? (
                            <NewPasswordForm />
                        ) : resetOTPForm ? (
                            <OTPForm />
                        ) : (
                            <ForgetForm />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ForgetContent;
