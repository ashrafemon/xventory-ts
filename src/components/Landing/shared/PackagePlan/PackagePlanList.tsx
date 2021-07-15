import React from "react";
import {Box, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import {Colors} from "../../../../constants/themeData";

const useStyles = makeStyles(() => ({
    listItem: {
        borderBottom: "1px solid " + Colors.black1,
        padding: "16px 0",
    },
    listItemText: {
        fontSize: 18,
        fontWeight: 300,

        "&:last-child": {
            textAlign: "right",
            paddingRight: 20,
        },
    },
}))

const PackagePlanList = ({features = [], setupFee = 0, renewFee = 0, outlet = 0}) => {
    const classes = useStyles()
    return (
        <Box py={5}>
            <List>
                {/*Outlet Count*/}
                {outlet && (
                    <ListItem className={classes.listItem}>
                        <ListItemText className={classes.listItemText}>
                            Outlet Count
                        </ListItemText>
                        <ListItemText className={classes.listItemText}>
                            {outlet}
                        </ListItemText>
                    </ListItem>
                )}

                {/*Setup Fee*/}
                {setupFee && (
                    <ListItem className={classes.listItem}>
                        <ListItemText className={classes.listItemText}>
                            Outlet Count
                        </ListItemText>
                        <ListItemText className={classes.listItemText}>
                            {setupFee}
                        </ListItemText>
                    </ListItem>
                )}

                {/*Renewal Fee*/}
                {renewFee && (
                    <ListItem className={classes.listItem}>
                        <ListItemText className={classes.listItemText}>
                            Renewal Fee
                        </ListItemText>
                        <ListItemText className={classes.listItemText}>
                            {renewFee}
                        </ListItemText>
                    </ListItem>
                )}

                {/*Feature List*/}
                {features.map((featureItem, index) => (
                    <ListItem className={classes.listItem} key={index}>
                        <ListItemText className={classes.listItemText}>
                            {featureItem}
                        </ListItemText>
                        <ListItemText className={classes.listItemText}>
                            <DoneIcon/>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PackagePlanList;
