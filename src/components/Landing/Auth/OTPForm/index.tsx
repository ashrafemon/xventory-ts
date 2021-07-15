import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Typography,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { verifyOTP } from "../../../../store/actions/authAction";
import { useStyles } from "./styled";

const OTPForm = ({ open }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const otpInputRef = useRef(null);
    const verifyBtnRef = useRef(null);
    const [value, setValue] = useState("");

    const handleChange = (otp) => setValue(otp);
    const handleSubmit = () => {
        dispatch(verifyOTP(value));
    };

    return (
        <Dialog open={open} maxWidth="md" fullWidth className={classes.dialog}>
            <DialogContent className={classes.dialogContent}>
                <Box textAlign="Center">
                    <Typography variant="h5" className={classes.title}>
                        Enter Verification Code
                    </Typography>
                </Box>

                <Box className={classes.otpFormBox}>
                    <OtpInput
                        containerStyle={classes.otpInputContainer}
                        inputStyle={classes.otpInput}
                        value={value}
                        onChange={handleChange}
                        numInputs={6}
                        ref={otpInputRef}
                    />
                </Box>

                <Box textAlign="center">
                    <Button
                        ref={verifyBtnRef}
                        variant="contained"
                        className={classes.submitBtn}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default OTPForm;
