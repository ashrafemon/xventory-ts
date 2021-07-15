import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogContent,
    makeStyles,
    Typography,
    IconButton,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../../constants/themeData";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import ReactLoading from "react-loading";
import EditIcon from "@material-ui/icons/Edit";
import { fetchPricingPlans } from "../../../../store/actions/siteAction";
import AutocompleteTextBox from "../AutcompleteTextBox";
import DoneIcon from "@material-ui/icons/Done";
import { SELECT_PLAN } from "../../../../store/types";

const useStyles = makeStyles(() => ({
    dialog: {
        "& .MuiPaper-rounded": {
            borderRadius: 8,
        },
        zIndex: 99999,
    },
    dialogContent: {
        padding: "65px !important",
        position: "relative",

        "@media(max-width: 600px)": {
            padding: "65px 30px !important",
        },
    },
    closeBtn: {
        position: "absolute",
        width: 47,
        height: 47,
        minWidth: 47,
        top: 35,
        right: 35,
        borderRadius: 8,
        backgroundColor: Colors.black1 + " !important",
        color: Colors.white1,
        boxSizing: "border-box",

        "@media(max-width: 400px)": {
            width: 40,
            height: 40,
            minWidth: 40,
            top: 20,
            right: 20,
        },
    },
    avatar: {
        width: 164,
        height: 164,
        margin: "auto",

        "& .MuiSvgIcon-root": {
            width: "80%",
            height: "80%",
        },

        "@media(max-width: 400px)": {
            width: 125,
            height: 125,
        },
        backgroundColor: Colors.yellow2,
    },
    success: {
        backgroundColor: Colors.teal1,
    },
    danger: {
        backgroundColor: Colors.danger1,
    },
    titleWrapper: {
        padding: "15px 20px",
        border: "1px dashed " + Colors.black1,
        backgroundColor: "#E9E6E6",
        textAlign: "center",
        marginBottom: 40,
        display: "inline-block",
        position: "relative",
        minWidth: 300,
    },
    editBtn: {
        position: "absolute",
        top: -20,
        right: -20,
        padding: 8,
        backgroundColor: "#000 !important",
        color: "#fff",
    },
    title: {
        fontSize: 35,
        fontWeight: 600,

        "@media(max-width: 600px)": {
            fontSize: 25,
        },

        "@media(max-width: 400px)": {
            fontSize: 20,
        },
    },
    text: {
        fontSize: 25,
        marginBottom: 40,
        "@media(max-width: 600px)": {
            fontSize: 15,
        },
    },
    submitBtn: {
        backgroundColor: Colors.teal1 + " !important",
        color: Colors.white1,
        fontSize: 35,
        width: 280,
        textTransform: "capitalize",
        borderRadius: 8,

        "@media(max-width: 600px)": {
            width: "100%",
            fontSize: 25,
        },
    },
    flexColumnBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

const PurchaseModal = ({ open, plan, close = () => {}, submit = () => {} }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { paymentLink } = useSelector((state:RootStateOrAny) => state.auth);
    const [isLoadingToRedirect, setLoadingToRedirect] = useState(false);
    const [packageChange, setPackageChange] = useState(false);
    const { pricingPlans } = useSelector((state:RootStateOrAny) => state.site);

    const packageChangeHandler = () => {
        setPackageChange(!packageChange);
    };

    useEffect(() => {
        if (paymentLink) {
            setLoadingToRedirect(true);
            setTimeout(() => {
                window.location.replace(paymentLink);
            }, 5000);
        }
    }, [paymentLink]);

    useEffect(() => {
        if (packageChange === true) {
            dispatch(fetchPricingPlans());
        }
    }, [dispatch, packageChange]);

    const planChangeHandler = (data) => {
        localStorage.setItem("buyPackage", JSON.stringify(data));
        dispatch({ type: SELECT_PLAN, payload: data });
    };

    return (
        <Dialog open={open} maxWidth="md" fullWidth className={classes.dialog}>
            <DialogContent className={classes.dialogContent}>
                {isLoadingToRedirect ? (
                    <Box textAlign="center" className={classes.flexColumnBox}>
                        <ReactLoading
                            type="spin"
                            color={Colors.teal1}
                            height={150}
                            width={150}
                        />

                        <Typography variant="h6" className={classes.text}>
                            You are redirected to payment Gateway
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <Button
                            variant="contained"
                            className={classes.closeBtn}
                            onClick={close}
                        >
                            <CloseIcon fontSize="large" />
                        </Button>

                        <Box textAlign="center">
                            <Box mb={5}>
                                <Avatar className={`${classes.avatar}`}>
                                    <WarningIcon fontSize="large" />
                                </Avatar>
                            </Box>

                            <Typography variant="h6" className={classes.text}>
                                You will be redirected to payment Gateway
                            </Typography>

                            <Box className={classes.titleWrapper}>
                                <IconButton
                                    className={classes.editBtn}
                                    onClick={packageChangeHandler}
                                >
                                    {packageChange ? (
                                        <DoneIcon />
                                    ) : (
                                        <EditIcon />
                                    )}
                                </IconButton>

                                {packageChange ? (
                                    <AutocompleteTextBox
                                        placeholder="Pricing Plans"
                                        options={
                                            pricingPlans &&
                                            pricingPlans.pricingPlanList
                                        }
                                        optionLabel="planMode"
                                        label="Pricing Plans"
                                        onChange={(e, data) =>
                                            planChangeHandler(data)
                                        }
                                    />
                                ) : (
                                    <Typography
                                        variant="h5"
                                        className={classes.title}
                                    >
                                        Payment {plan.price}/Yearly
                                    </Typography>
                                )}
                            </Box>

                            <Box textAlign="center">
                                <Button
                                    variant="contained"
                                    className={classes.submitBtn}
                                    onClick={submit}
                                >
                                    Proceed
                                </Button>
                            </Box>
                        </Box>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default PurchaseModal;
