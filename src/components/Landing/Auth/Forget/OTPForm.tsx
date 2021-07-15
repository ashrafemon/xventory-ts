import { Box } from "@material-ui/core";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { verifyResetOTP } from "../../../../store/actions/authAction";
import AuthButton from "../../shared/AuthButton";
import SectionTitle from "../../shared/SectionTitle";
import { useStyles } from "./styled";

const OTPForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [verifyOtp, setVerifyOtp] = useState("");

    const verifyOtpChangeHandler = (otp) => {
        setVerifyOtp(otp);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (verifyOtp && verifyOtp.length >= 6) {
            dispatch(verifyResetOTP(verifyOtp));
        }
    };

    return (
        <Box className={classes.formBox}>
            <form onSubmit={submitHandler}>
                <Box mb={5}>
                    <SectionTitle title="We Have Sent A Code To Your Email. Enter The Code" />
                </Box>

                <Box mb={4}>
                    <OtpInput
                        containerStyle={classes.otpInputContainer}
                        inputStyle={classes.otpInput}
                        value={verifyOtp}
                        onChange={verifyOtpChangeHandler}
                        numInputs={6}
                    />
                </Box>

                <AuthButton type="submit" text="Submit" />
            </form>
        </Box>
    );
};

export default OTPForm;
