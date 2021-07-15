import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles(() => ({
    fullWidth: {
        width: "100%",
        height: "100%",
    },
    customerInfoBox: {
        backgroundColor: "#60D1F6",
        paddingLeft: 10,
    },
    nameText: {
        fontWeight: 600,
        color: "#1F2129",
    },
    idText: {
        fontSize: 12,
        fontWeight: 600,
        color: "#4F4F4F",
    },
    addBtn: {
        padding: "20px",
        backgroundColor: "#63F58C !important",
        color: "#1F2129",
        borderRadius: 0,
        "& .MuiSvgIcon-root": {
            fontSize: 30,
        },
    },
    editBtn: {
        backgroundColor: "#1F2129 !important",
        color: "#fff",
        marginRight: 10,
    },
    dFlex: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
}));
