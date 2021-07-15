import {makeStyles} from "@material-ui/core";
import {Colors} from "../../../../constants/themeData";

export const useStyles = makeStyles({
    appBar: {
        width: "100%",
    },
    sizedAppBar: {
        width: "80vw",
    },
    toolbar: {
        backgroundColor: "#1F2129",
        paddingTop: 10,
        paddingBottom: 10,
    },
    // Collapsible Btn
    collapsibleOption: {
        display: "flex",
        gap: "15px",
        alignItems: "center",
        "@media(max-width: 600px)": {
            flexDirection: "column",
        },
    },
    collapseBtn: {
        backgroundColor: "#272934",
        borderRadius: 5,
        color: "#fff",
    },
    // Header List
    headerList: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#272934",
        borderRadius: 30,
        padding: "5px",
        "@media(max-width: 600px)": {
            flexDirection: "column",
        },
    },
    headerListItem: {
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 30,
        "@media(max-width: 600px)": {
            width: "100%",
        },
    },
    headerListItemIcon: {
        width: 30,
        borderRadius: 0,
        overflow: "initial",
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
    headerListItemText: {
        "& .MuiTypography-root": {
            fontSize: 14,
            lineHeight: 1,
            fontWeight: 600,
        },
    },

    // Header Options
    headerOptionContainer: {
        marginLeft: "auto",
        display: "flex",
        "@media(max-width: 500px)": {
            flexDirection: "column",
        },
    },
    btn: {
        color: "#fff",
    },
    avatarContainer: {
        backgroundColor: "#272934",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "5px 10px",
        boxSizing: "border-box",
        borderRadius: 30,
        cursor: "pointer",
    },
    name: {
        fontWeight: 600,
        color: "#fff",
        textTransform: "uppercase",
        lineHeight: 1.2,
    },
    role: {
        fontWeight: 600,
        color: "#9B9D80",
        lineHeight: 1,
    },
    iconContent: {
        marginLeft: "auto",
    },

    popOver: {
        '& .MuiPopover-paper': {
            borderRadius: 15,
            overflow: 'hidden'
        }
    },
    popOverContainer: {
        width: "100%",
        padding: "20px 22px",
        boxSizing: "border-box",
        backgroundColor: "#313442",
        minWidth: 300,
        maxWidth: 300
    },

    popOverAvatar: {
        width: 55,
        height: 55,
        margin: "auto"
    },
    userName: {
        fontSize: 18,
        fontWeight: 800,
        color: Colors.white1,
    },
    userEmail: {
        fontSize: 14,
        fontWeight: 600,
        color: '#9B9D80',
    },

    type: {
        fontSize: 16,
        fontWeight: 800,
        color: Colors.white1,
        paddingBottom: 5,
        borderBottom: '1px solid ' + Colors.white1
    },
    listItem: {
        backgroundColor: '#1F2129',
        borderRadius: 25,
        padding: 0,
        gap: '15px',
        marginBottom: 10,
        '&:last-child': {
            marginBottom: 0
        }
    },
    listItemIcon: {
        backgroundColor: '#F3BB4D',
        color: Colors.black1,
        width: 47,
        height: 47,
        borderRadius: '50%',
        minWidth: 47,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiSvgIcon-root': {
            width: 24,
            height: 24
        }
    },
    listItemText: {
        '& .MuiTypography-root': {
            color: Colors.white1,
            fontWeight: 600,
            fontSize: 16
        }
    }
});
