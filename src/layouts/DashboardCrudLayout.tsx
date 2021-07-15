import { Box, Container } from "@material-ui/core";
import React from "react";
import {
    DashboardPageContent,
    DashboardPageTitle,
} from "../styles/globalStyles";

type IProps = {
    pageTitle?: any;
    title?: string;
    children?: any;
    pagination?: any;
};

const DashboardCrudLayout = ({
    pageTitle,
    title,
    children,
    pagination,
}: IProps) => {
    return (
        <Container maxWidth="xl">
            {pageTitle && <Box>{pageTitle}</Box>}

            <DashboardPageContent>
                <DashboardPageTitle>{title}</DashboardPageTitle>

                <Box>{children}</Box>
            </DashboardPageContent>

            {pagination && <Box py={2}>{pagination}</Box>}
        </Container>
    );
};

export default DashboardCrudLayout;
