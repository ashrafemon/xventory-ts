import {
    Accordion,
    AccordionDetails,
    Box,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    InputBase,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
    withStyles,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export const DashboardPageContent = withStyles(() => ({
    root: {
        backgroundColor: "#1F2129",
        padding: "30px 35px",
        position: "relative",
        borderRadius: 8,
        margin: "",
    },
}))(Box);

export const DashboardPageTitle = withStyles(() => ({
    root: {
        fontSize: 32,
        fontWeight: 800,
        color: "#fff",
        marginBottom: 50,
        textTransform: "capitalize",
    },
}))(Typography);

export const ResetButton = withStyles(() => ({
    root: {
        backgroundColor: "#F3BB4D !important",
        color: "#1F2129",
        borderRadius: 30,
        fontSize: 16,
        fontWeight: 600,
        minWidth: 190,
        minHeight: 47,
    },
}))(Button);

export const SubmitButton = withStyles(() => ({
    root: {
        backgroundColor: "#63F58C !important",
        color: "#1F2129",
        borderRadius: 30,
        fontSize: 16,
        fontWeight: 600,
        minWidth: 190,
        minHeight: 47,
    },
}))(Button);

export const LandingBootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: "#fff !important",
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "18px 26px 18px 12px",
        overflow: "hidden",
    },
}))(InputBase);

export const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: "#fff !important",
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        overflow: "hidden",
    },
}))(InputBase);

export const BootstrapDarkInput = withStyles((theme) => ({
    input: {
        backgroundColor: "#272934 !important",
        fontSize: 16,
        fontWeight: 600,
        color: "#fff",
    },
}))(InputBase);

export const BootstrapDarkInputWithoutBorder = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 16,
        padding: "15px 26px 15px 25px",
    },
}))(InputBase);

export const CrudDialog = withStyles(() => ({
    paper: {
        backgroundColor: "#313442",
        borderRadius: 8,
    },
}))(Dialog);

export const CrudDialogHeader = withStyles(() => ({
    root: {
        backgroundColor: "#F3BB4D",
        padding: "25px 30px",
        boxSizing: "border-box",
        position: "relative",
    },
}))(Box);

export const CrudDialogContent = withStyles(() => ({
    root: {
        backgroundColor: "#313442",
        padding: "35px 25px !important",
    },
}))(DialogContent);

export const CrudDialogTitle = withStyles(() => ({
    root: {
        fontSize: 24,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        "& .MuiSvgIcon-root": {
            marginRight: 10,
        },
    },
}))(Typography);

export const CrudDialogCloseBtn = withStyles(() => ({
    root: {
        backgroundColor: "transparent",
        color: "#000",
        position: "absolute",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
    },
}))(IconButton);

export const CrudTableContainer = withStyles(() => ({
    root: {
        backgroundColor: "#313442",
        borderRadius: 8,
        padding: "0 20px",
    },
}))(Box);

export const CrudTable = withStyles(() => ({
    root: {
        "& .MuiTableCell-head": {
            color: "#fff",
            padding: "50px 0",
            textAlign: "center",
            fontSize: 19,
            fontWeight: 600,
            textTransform: "capitalize",
            borderBottomColor: "rgba(236, 236, 236, .18)",
        },
        "& .MuiTableCell-body": {
            color: "#fff",
            textAlign: "center",
            borderBottom: 0,
        },
        "& .MuiTableBody-root": {
            "& .MuiTableRow-root": {
                "&:last-child .MuiTableCell-root": {
                    borderBottom: 0,
                },
            },
        },
    },
}))(Table);

export const CrudAccordion = withStyles(() => ({
    root: {
        backgroundColor: "#313442",
        marginBottom: 10,
    },
    rounded: {
        borderRadius: "8px !important",
    },
}))(Accordion);

export const CrudAccordionTitle = withStyles(() => ({
    root: {
        color: "#fff",
        fontWeight: 600,
        fontSize: 18,
    },
}))(Typography);

export const CrudAccordionDetails = withStyles(() => ({
    root: {
        flexDirection: "column",
    },
}))(AccordionDetails);

// Purchase Create Table
export const PurchaseTableHead = withStyles(() => ({
    root: {
        borderRadius: 8,
    },
}))(TableHead);

export const PurchaseTableBody = withStyles(() => ({
    root: {
        borderRadius: 8,
    },
}))(TableBody);

export const PurchaseTableRow = withStyles(() => ({
    root: {
        "&:last-child": {
            "& .MuiTableCell-root": {
                borderBottom: 0,
            },
        },
    },
}))(TableRow);

export const PurchaseTableCell = withStyles(() => ({
    root: {
        "&:first-child": {
            textAlign: "left",
        },
        "&:last-child": {
            borderRight: 0,
        },

        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
        borderRight: "1px solid #535561",
    },
    head: {
        backgroundColor: "#6FCF97",
        color: "#1F2129",
        borderBottom: 0,

        "&:first-child": {
            width: "266px",
        },
        "&:nth-child(2)": {
            width: "135px",
        },
        "&:nth-child(3)": {
            width: "225px",
        },
        "&:nth-child(4)": {
            width: "195px",
        },
        "&:nth-child(5)": {
            width: "205px",
        },
        "&:nth-child(6)": {
            width: "305px",
        },
        "&:last-child": {
            width: "85px",
        },
    },
    body: {
        backgroundColor: "#313442",
        color: "#fff",
        borderBottomColor: "#535561",
    },
}))(TableCell);

export const PurchaseTablePricingCell = withStyles(() => ({
    root: {
        "&:first-child": {
            textAlign: "left",
        },
        "&:last-child": {
            borderRight: 0,
        },

        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
        borderRight: "1px solid #535561",
    },
    body: {
        "&:first-child": {
            width: "1027px",
        },
        "&:nth-child(2)": {
            width: "305px",
        },
        "&:last-child": {
            width: "85px",
        },
        backgroundColor: "#313442",
        color: "#fff",
        borderBottomColor: "#535561",
    },
}))(TableCell);

export const PurchaseTableColorCell = withStyles(() => ({
    root: {
        "&:first-child": {
            width: "1027px",
            borderRight: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
        },
        "&:nth-child(2)": {
            width: "305px",
        },
        "&:last-child": {
            width: "85px",
            borderRight: 0,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
        },

        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
        borderRight: "1px solid #535561",
        color: "#1F2129",
        borderBottom: 0,
        boxShadow: "none",
    },
}))(TableCell);

export const PurchaseTableTextField = withStyles(() => ({
    root: {
        backgroundColor: "#fff",
        borderRadius: 8,
        "& .MuiInput-underline:after": {
            border: 0,
        },
        "& MuiInputBase-root": {
            padding: 15,
        },
        "& .MuiInputBase-input": {
            fontWeight: 600,
            textAlign: "right",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: 0,
            },
            "&:hover fieldset": {
                border: 0,
            },
            "&.Mui-focused fieldset": {
                border: 0,
            },
        },
    },
}))(TextField);

export const PurchaseTableAutocomplete = withStyles(() => ({
    root: {
        backgroundColor: "#fff",
        borderRadius: 8,
        "& .MuiInput-underline:after": {
            border: 0,
        },
        "& MuiInputBase-root": {
            padding: 15,
        },
        "& .MuiInputBase-input": {
            fontWeight: 600,
            textAlign: "right",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: 0,
            },
            "&:hover fieldset": {
                border: 0,
            },
            "&.Mui-focused fieldset": {
                border: 0,
            },
        },
    },
}))(Autocomplete);

export const PurchaseTablePrimaryTextField = withStyles(() => ({
    root: {
        backgroundColor: "#fff",
        borderRadius: 8,
        "& .MuiInput-underline:after": {
            border: 0,
        },
        "& MuiInputBase-root": {
            padding: 15,
        },
        "& .MuiInputBase-input": {
            fontWeight: 600,
            textAlign: "center",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: 0,
            },
            "&:hover fieldset": {
                border: 0,
            },
            "&.Mui-focused fieldset": {
                border: 0,
            },
        },
    },
}))(TextField);

export const PurchaseSubmitButton = withStyles(() => ({
    root: {
        minWidth: 300,
        borderRadius: 8,
        backgroundColor: "#63F58C",
        color: "#1F2129",
        fontWeight: 600,
        fontSize: 16,
    },
}))(Button);

export const PurchaseResetButton = withStyles(() => ({
    root: {
        minWidth: 300,
        borderRadius: 8,
        marginRight: 10,
        borderColor: "#F3BB4D",
        color: "#F3BB4D",
        fontWeight: 600,
        fontSize: 16,
    },
}))(Button);

// Pos
export const POSActionButton = withStyles(() => ({
    root: {
        width: "100%",
        height: "100%",
        fontSize: 48,
        fontWeight: 600,
        borderRadius: 0,
        "& .MuiSvgIcon-root": {
            fontSize: 35,
        },
        "@media(max-width: 1366px)": {
            fontSize: 28,
        },
    },
}))(Button);

export const PosCustomerTableHeader = withStyles(() => ({
    root: {
        backgroundColor: "#F3BB4D",
    },
}))(TableHead);

export const PosCustomerTableCell = withStyles(() => ({
    root: {
        border: 0,
        fontSize: 16,
        fontWeight: 600,
    },
}))(TableCell);
