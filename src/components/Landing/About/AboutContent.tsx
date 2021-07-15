import { Box, Container, Grid, Avatar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Images } from "../../../constants/themeData";
import ListingWithImage from "../shared/ListingWithImage";
import SectionTitle from "../shared/SectionTitle";
import { useStyles } from "./styled";

const Demo = () => {
    const classes = useStyles();

    const [demos] = useState([
        {
            description:
                "Mauris risus mi, efficitur at velit sit amet, pharetra fermentum lacus. Nulla ullamcorper velit vel urna ultricies viverra et ut odio. Integer vehicula purus lorem, ac tincidunt mauris consectetur vel. Nullam vitae justo eu nulla placerat egestas at in nibh. Nullam hendrerit nibh mi, vitae rutrum tellus consectetur vitae. Aliquam scelerisque efficitur erat, quis malesuada ligula euismod a. Pellentesque molestie risus non nibh euismod fermentum. Quisque bibendum pellentesque",
            image: Images.Demo1,
        },
        {
            description:
                "Mauris risus mi, efficitur at velit sit amet, pharetra fermentum lacus. Nulla ullamcorper velit vel urna ultricies viverra et ut odio. Integer vehicula purus lorem, ac tincidunt mauris consectetur vel. Nullam vitae justo eu nulla placerat egestas at in nibh. Nullam hendrerit nibh mi, vitae rutrum tellus consectetur vitae. Aliquam scelerisque efficitur erat, quis malesuada ligula euismod a. Pellentesque molestie risus non nibh euismod fermentum. Quisque bibendum pellentesque",
            image: Images.Demo2,
        },
        {
            description:
                "Mauris risus mi, efficitur at velit sit amet, pharetra fermentum lacus. Nulla ullamcorper velit vel urna ultricies viverra et ut odio. Integer vehicula purus lorem, ac tincidunt mauris consectetur vel. Nullam vitae justo eu nulla placerat egestas at in nibh. Nullam hendrerit nibh mi, vitae rutrum tellus consectetur vitae. Aliquam scelerisque efficitur erat, quis malesuada ligula euismod a. Pellentesque molestie risus non nibh euismod fermentum. Quisque bibendum pellentesque",
            image: Images.Demo3,
        },
    ]);

    const [products] = useState([
        {
            image: Images.LearnerXLogo,
            description: "Learner X is an online elearning platform.",
        },
        {
            image: Images.LearnerXLogo,
            description:
                "xERP is a management software that will cover all of your needs to manage any kind of office.",
        },
        {
            image: Images.LearnerXLogo,
            description:
                "X Attorney is the case management software for advocates.",
        },
        {
            image: Images.LearnerXLogo,
            description:
                "RescueX is a personal safety android application that will be always with you to protect you.",
        },
        {
            image: Images.LearnerXLogo,
            description:
                "xTheater is the live streaming platform to entertain you.",
        },
    ]);

    return (
        <Box className={classes.contentBox}>
            <Container>
                <Box mb={3}>
                    <SectionTitle title="About Xventory" />
                </Box>

                <ListingWithImage data={demos} />

                <Box mb={3}>
                    <SectionTitle title="Our Others Product" />
                </Box>

                <Grid container spacing={3}>
                    {products.map((item, i) => (
                        <Grid key={i} item xs={12} sm={6} md={3}>
                            <Box>
                                <Avatar
                                    className={classes.productAvatar}
                                    src={item.image}
                                />

                                <Typography
                                    variant="h6"
                                    className={classes.productDescription}
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Demo;
