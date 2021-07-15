import { Box } from "@material-ui/core";
import React from "react";
import AboutContent from "../../components/Landing/About/AboutContent";

const About = () => {
    return (
        <>
            <Box
                mt={2}
                style={{ backgroundColor: "#C4C4C4", height: 322 }}
            ></Box>

            <AboutContent />
        </>
    );
};

export default About;
