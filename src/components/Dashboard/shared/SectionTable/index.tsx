import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";

import React from "react";
import SectionTableRow from "./SectionTableRow";
import { useStyles } from "./styled";

type IProps = {
    headers: string[];
    data: [] | any;
    itemDeleteHandler?: (props) => void;
    itemFetchHandler?: (id, type) => void;
};

const SectionTable = ({
    headers = [],
    data = [],
    itemDeleteHandler,
    itemFetchHandler,
}: IProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.tableContainer}>
            {data.length > 0 ? (
                <TableContainer>
                    <Table className={classes.table}>
                        {headers && (
                            <TableHead>
                                <TableRow>
                                    {headers.map((item, index) => (
                                        <TableCell key={index}>
                                            {item}
                                        </TableCell>
                                    ))}
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                        )}

                        <TableBody>
                            {data.map((item, i) => (
                                <SectionTableRow
                                    key={i}
                                    item={item}
                                    headers={headers}
                                    itemFetchHandler={itemFetchHandler}
                                    itemDeleteHandler={itemDeleteHandler}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Box textAlign="center" py={5}>
                    <Typography className={classes.notFound} variant="h5">
                        No data found
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default SectionTable;
