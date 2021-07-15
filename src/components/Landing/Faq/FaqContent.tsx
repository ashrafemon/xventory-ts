import {
    Avatar,
    Box,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { Images } from "../../../constants/themeData";
import FaqListing from "./FaqListing";
import { useStyles } from "./styled";

const FaqContent = () => {
    const classes = useStyles();

    const description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias natus in quibusdam laudantium quo eum, tempora, ipsam hic libero labore. Beatae ipsam corrupti repudiandae aliquid eius! Repellat, laborum. Ad, alias eaque. Non cum in exercitationem fuga adipisci quidem harum ea velit nisi ratione ad magnam, cupiditate voluptates voluptas provident vero praesentium dolor quam id, reprehenderit blanditiis sequi nesciunt, ipsam aliquid? Cumque debitis harum, eligendi incidunt modi placeat nihil animi quidem laboriosam iure rem similique. Dolore odit perferendis iste natus consectetur explicabo nihil officiis facilis dolor sint consequatur inventore in ut suscipit perspiciatis eum hic, quasi neque vero architecto! Et.";

    const [faqs] = useState([
        {
            title: "Duis cursus condimentum rhoncus. Nunc venenatis nibh erat, vel elementum sem molestie in.",
            description: description,
        },
        {
            title: "Duis cursus condimentum rhoncus. Nunc venenatis nibh erat, vel elementum sem molestie in.",
            description: description,
        },
        {
            title: "Duis cursus condimentum rhoncus. Nunc venenatis nibh erat, vel elementum sem molestie in.",
            description: description,
        },
        {
            title: "Duis cursus condimentum rhoncus. Nunc venenatis nibh erat, vel elementum sem molestie in.",
            description: description,
        },
        {
            title: "Duis cursus condimentum rhoncus. Nunc venenatis nibh erat, vel elementum sem molestie in.",
            description: description,
        },
        {
            title: "Duis cursus condimentum rhoncus. Nunc venenatis nibh erat, vel elementum sem molestie in.",
            description: description,
        },
    ]);

    return (
        <Box className={classes.wrapper}>
            <Container maxWidth="lg">
                <Box className={classes.searchContent}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={8} md={6}>
                            <Box textAlign="center">
                                <Typography
                                    variant="h5"
                                    className={classes.sectionTitle}
                                >
                                    How Can We Help You
                                </Typography>

                                <Avatar
                                    src={Images.Faq}
                                    className={classes.sectionAvatar}
                                />

                                <TextField
                                    className={classes.searchField}
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Describe Your Question"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton>
                                                    <SearchIcon fontSize="small" />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <FaqListing data={faqs} />
            </Container>
        </Box>
    );
};

export default FaqContent;
