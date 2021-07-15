import { Box, Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/Dashboard/shared/PageTitle";
import {
    DashboardPageContent,
    DashboardPageTitle,
} from "../styles/globalStyles";

const CrudLayout = ({ children }) => {
    // const { category, type } = useParams<{category: string, type: string}>();

    return (
        <Container maxWidth="xl">
            <PageTitle
                title="Category"
                // title={`${category} > ${category} ${type ? type : "List"}`}
            />

            <DashboardPageContent>
                <DashboardPageTitle>
                    {/*{category} {type}*/}
                </DashboardPageTitle>

                <Box>{children}</Box>
            </DashboardPageContent>
        </Container>
    );
};

export default CrudLayout;
