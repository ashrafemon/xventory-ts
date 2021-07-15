import {
    Avatar,
    Box,
    Button,
    Grid,
    IconButton,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { useStyles } from "./styled";
import {
    PosCustomerTableCell,
    PosCustomerTableHeader,
} from "../../../../styles/globalStyles";

const CustomerProductTable = () => {
    const classes = useStyles();
    return (
        <Box className={classes.fullWidth}>
            <Box className={classes.customerInfoBox}>
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                        <Box className={classes.dFlex}>
                            <Avatar></Avatar>
                            <Box>
                                <Typography
                                    variant="body1"
                                    className={classes.nameText}
                                >
                                    Seggiano Organic Togliatelle
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className={classes.idText}
                                >
                                    ID : Cus-31234523512
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box textAlign="right">
                            <IconButton className={classes.editBtn}>
                                <EditIcon />
                            </IconButton>
                            <Button className={classes.addBtn}>
                                <AddIcon />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <TableContainer>
                    <Table size="small">
                        <PosCustomerTableHeader>
                            <TableRow>
                                <PosCustomerTableCell>
                                    Quantity
                                </PosCustomerTableCell>
                                <PosCustomerTableCell>
                                    Product
                                </PosCustomerTableCell>
                                <PosCustomerTableCell>
                                    Price
                                </PosCustomerTableCell>
                                <PosCustomerTableCell>
                                    SubTotal
                                </PosCustomerTableCell>
                            </TableRow>
                        </PosCustomerTableHeader>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default CustomerProductTable;
