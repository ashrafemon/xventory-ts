import { Box } from "@material-ui/core";
import React from "react";
import PosHeader from "../components/Dashboard/shared/PosHeader";

const PosLayout = ({ children }) => {
    return (
        <Box>
            <PosHeader />

            <Box>{children}</Box>
        </Box>
    );
};

export default PosLayout;
