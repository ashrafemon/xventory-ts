import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./styled";

const SectionTable = ({ headers, data }) => {
    const classes = useStyles();
    const [tableData] = useState([
        {
            invoice: { type: "SKU", id: "8718273" },
            createdAt: { date: "13 Jan, 2021", time: "10:30 AM" },
            customerName: "Charlie Levin",
            amount: "428.88",
            status: "PAID",
            payment: "BKash",
        },
        {
            invoice: { type: "SKU", id: "8718273" },
            createdAt: { date: "13 Jan, 2021", time: "10:30 AM" },
            customerName: "Charlie Levin",
            amount: "428.88",
            status: "UNPAID",
            payment: "BKash",
        },
    ]);

    return (
        <Box className={classes.tableContainer}>
            <TableContainer>
                <Table className={classes.table}>
                    {headers && (
                        <TableHead>
                            <TableRow>
                                {headers.map((item, index) => (
                                    <TableCell>{item}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                    )}

                    <TableBody>
                        {tableData.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <Typography variant="body2">
                                        {item.invoice.type}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.invoice.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        {item.createdAt.date}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.createdAt.time}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        {item.customerName}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        {item.amount}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        {item.status}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Grid item xs={10}>
                                            {item.status === "PAID" ? (
                                                <Typography variant="body2">
                                                    {item.payment}
                                                </Typography>
                                            ) : (
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        classes.actionBtn
                                                    }
                                                >
                                                    Pay Now
                                                </Button>
                                            )}
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton
                                                className={classes.toggleBtn}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default SectionTable;
