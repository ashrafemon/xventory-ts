import { Box, Container } from "@material-ui/core";
import React, { useState } from "react";
import Listing from "../shared/Listing";
import { useStyles } from "./styled";

const PolicyContent = () => {
    const classes = useStyles();

    const [policies] = useState([
        {
            title: "Privacy & Policy",
            text: "Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.",
        },
        {
            title: "Terms & Conditions",
            text: "Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.",
        },
        {
            title: "Lorem Ipsum",
            text: "Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.",
        },
        {
            title: "Lorem Ipsum",
            text: "Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.",
        },
        {
            title: "Lorem Ipsum",
            text: "Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.",
        },
        {
            title: "Lorem Ipsum",
            text: "Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.Donec viverra condimentum rutrum. Aliquam dictum magna enim, ac dignissim justo feugiat sit amet. Nunc pulvinar cursus erat, in rhoncus lacus elementum id.",
        },
    ]);

    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="lg">
                <Listing data={policies} />
            </Container>
        </Box>
    );
};

export default PolicyContent;
