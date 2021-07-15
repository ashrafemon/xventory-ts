import { Box, Button } from "@material-ui/core";
import React from "react";
import TextBox from "../shared/TextBox";
import { useStyles } from "./styled";

const ContactForm = () => {
    const classes = useStyles();
    return (
        <Box>
            <form>
                <Box mb={4}>
                    <TextBox placeholder="Full Name" />
                </Box>
                <Box mb={4}>
                    <TextBox placeholder="Email" />
                </Box>
                <Box mb={4}>
                    <TextBox placeholder="Phone No" />
                </Box>
                <Box mb={4}>
                    <TextBox placeholder="Subject" />
                </Box>
                <Box mb={4}>
                    <TextBox placeholder="Your Message" multiline={true} rows={8} />
                </Box>

                <Button variant="contained" className={classes.submitBtn}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default ContactForm;
