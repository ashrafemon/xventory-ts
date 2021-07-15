import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { useStyles } from "./styled";

const ContactContent = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Container>
                <Box mb={5}>
                    <SectionTitle title="Contact Us" />
                </Box>
                <Grid container justify="space-between" spacing={2}>
                    <Grid item xs={12} sm={6} md={5}>
                        <ContactInfo />
                    </Grid>

                    <Grid item xs={12} sm={6} md={5}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactContent;
