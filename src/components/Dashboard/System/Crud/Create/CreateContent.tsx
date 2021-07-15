import { Box, Container } from "@material-ui/core";
import React from "react";
import CrudLayout from "../../../../../layouts/CrudLayout";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FormActions from "../../../shared/FormActions";
import SelectBox from "../../../shared/SelectBox";
import TextBox from "../../../shared/TextBox";

const CrudCreateContent = () => {
    return (
        <CrudLayout>
            <Container maxWidth="md">
                <form>
                    <Box mb={2}>
                        <TextBox label="Name" placeholder="Name" required />
                    </Box>
                    <Box mb={2}>
                        <TextBox label="Code" placeholder="Code" required />
                    </Box>
                    <Box mb={2}>
                        <TextBox
                            multiline
                            rows={3}
                            label="Details"
                            placeholder="Details"
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <SelectBox
                            label="Status"
                            placeholder="Status"
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <AutocompleteTextBox
                            label="Store List"
                            placeholder="Store List"
                            required
                        />
                    </Box>

                    <Box mb={2}>
                        <FormActions />
                    </Box>
                </form>
            </Container>
        </CrudLayout>
    );
};

export default CrudCreateContent;
