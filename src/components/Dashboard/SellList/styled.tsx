import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    pageContent: {
        backgroundColor: '#1F2129',
        padding: '30px 35px',
        position: 'relative',
        borderRadius: 8
    },
    tabs: {
        '& .MuiTabs-flexContainer': {
            justifyContent: 'flex-end',
            gap: '20px'
        },
        position: 'absolute',
        top: -50,
        right: 20,
        '& .Mui-selected': {
            backgroundColor: '#63F58C !important',
            color: '#1F2129 !important'
        },
        '& .MuiTabs-indicator': {
            backgroundColor: '#63F58C !important',
        }
    },
    tabItem: {
        fontSize: 16,
        color: '#949699',
        fontWeight: 600,
        backgroundColor: '#1F2129',
        minWidth: 'initial',
        padding: '6px 25px',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: 800,
        color: '#fff',
        marginBottom: 50
    },

}))
