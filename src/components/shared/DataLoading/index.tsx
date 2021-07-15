import React from 'react'
import {Box, makeStyles} from "@material-ui/core";
import ReactLoading from 'react-loading';
import {Colors} from "../../../constants/themeData";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const DataLoading = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <ReactLoading type="spin" color={Colors.teal1} height={200} width={200}/>
        </Box>
    )
}

export default DataLoading
