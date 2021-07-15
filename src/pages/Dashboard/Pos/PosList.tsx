import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Typography,
} from "@material-ui/core";
import React from "react";
import PanToolIcon from "@material-ui/icons/PanTool";
import { useStyles } from "../../../components/Dashboard/Pos/styled";
import { POSActionButton } from "../../../styles/globalStyles";
import EditIcon from "@material-ui/icons/Edit";

import CustomerProductTable from "../../../components/Dashboard/Pos/CustomerProductTable";

const PosList = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.contentBox}>
                <Grid container alignItems="stretch">
                    <Grid item xs={12} sm={6} md={8}></Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CustomerProductTable />
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.footerWrapper}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <Grid item xs={12} sm={6} md={8}>
                        <Box className={classes.footerInfoBox}>
                            <Container className={classes.fullWidth}>
                                <Grid
                                    className={classes.fullWidth}
                                    container
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Grid item xs={12} sm={6}>
                                        <Typography
                                            variant="body2"
                                            className={classes.dateText}
                                        >
                                            Today Date : 12 Jun, 2021{" "}
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography
                                            variant="h4"
                                            className={classes.priceText}
                                        >
                                            $0.00
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Box
                                            textAlign="right"
                                            className={classes.addNoteBtn}
                                        >
                                            <Button variant="text">
                                                Add Note
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} md={2}>
                        <Box>
                            <POSActionButton
                                disableElevation
                                className={classes.holdBtn}
                                variant="contained"
                                fullWidth
                                startIcon={<PanToolIcon />}
                            >
                                HOLD
                            </POSActionButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                        <Box>
                            <POSActionButton
                                disableElevation
                                className={classes.payBtn}
                                variant="contained"
                                fullWidth
                                startIcon={<PanToolIcon />}
                            >
                                PAY NOW
                            </POSActionButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PosList;
