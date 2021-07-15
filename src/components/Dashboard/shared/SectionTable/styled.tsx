import {makeStyles} from "@material-ui/core";

// @ts-ignore
export const useStyles = makeStyles(() => ({
    tableContainer: {
        backgroundColor: "#313442",
        borderRadius: 8,
        padding: "0 20px",
    },
    table: {
        "& .MuiTableCell-head": {
            color: "#fff",
            padding: "50px 0",
            textAlign: "center",
            fontSize: 19,
            fontWeight: 600,
            textTransform: "capitalize",
            borderBottomColor: 'rgba(236, 236, 236, .18)'
        },
        "& .MuiTableCell-body": {
            color: "#fff",
            textAlign: "center",
            borderBottom: 0
        },
        "& .MuiTableBody-root": {
            "& .MuiTableRow-root": {
                "&:last-child .MuiTableCell-root": {
                    borderBottom: 0,
                },
            },
        },
    },
    toggleBtn: {
        color: "#fff",
    },
    actionBtn: {
        backgroundColor: "#63F58C",
        borderRadius: 20,
        fontWeight: 600,
    },
    popOver: {
        "& .MuiPaper-root": {
            backgroundColor: "#fff",
            width: 152,
            borderRadius: 8,
        },
    },
    list: {
        "& .MuiListItem-root": {
            padding: "12px 35px",
            borderBottom: "1px solid #CCCCCC",
            "&:last-child": {
                borderBottom: 0,
            },

            "& .MuiTypography-root": {
                fontWeight: 600,
                color: "#1F2129",
            },
        },
        "& .MuiListItemIcon-root": {
            minWidth: "initial",
            marginRight: 5,
            color: "#1F2129",
        },
    },

    successText: {
        '& .MuiTypography-root': {
            color: '#63F58C',
        }
    },
    dangerText: {
        '& .MuiTypography-root': {
            color: '#EB5757'
        }
    },
    notFound: {
        color: '#EB5757'
    },

    textRight: {
        textAlign: 'right !important'
    },
    textLeft: {
        textAlign: 'left !important'
    },

}));
