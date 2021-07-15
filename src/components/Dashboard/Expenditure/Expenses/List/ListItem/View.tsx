import { Box } from "@material-ui/core";
import React from "react";
import CrudLabelBox from "../../../../shared/CrudLabelBox";

const View = ({ data }) => {
    return (
        <>
            <Box mb={1}>
                <CrudLabelBox
                    label="ReferenceNo"
                    value={data && data.referenceNo}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Expense Reason"
                    value={data && data.expenseReason}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="expenseCategory"
                    value={
                        data &&
                        data.expenseCategory &&
                        data.expenseCategory.name
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Amount" value={data && data.amount} />
            </Box>
            <Box mb={1}>
                <CrudLabelBox
                    label="Returnable"
                    value={data && data.returnable}
                />
            </Box>
            <Box mb={1}>
                <CrudLabelBox label="Note" value={data && data.note} />
            </Box>
        </>
    );
};

export default View;
