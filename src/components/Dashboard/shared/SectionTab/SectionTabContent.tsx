import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    title: {
        fontSize: 32,
        fontWeight: 800,
        color: "#fff",
        marginBottom: 50,
    },
}));

const SectionTabContent = ({ title, children }) => {
    const classes = useStyles();
    return (
        <Box>
            {title && (
                <Typography className={classes.title} variant="h5">
                    {title}
                </Typography>
            )}

            <Box>{children}</Box>
        </Box>
    );
};

export default SectionTabContent;
