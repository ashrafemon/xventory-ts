import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

const SectionTableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Invoice ID</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Payment</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default SectionTableHeader;
