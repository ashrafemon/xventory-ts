import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";
import { Colors, Images } from "./../../../../constants/themeData";

const useStyles = makeStyles(() => ({
    wrapper: {
        marginBottom: 145,

        "@media(max-width: 600px)": {
            marginBottom: 50,
        },
    },
    list: {
        marginBottom: 50,

        "@media(max-width: 600px)": {
            marginBottom: 20,
        },
    },
    optionAvatar: {
        borderRadius: 0,
    },
    listItem: {
        alignItems: "center",
    },
    listItemText: {
        position: "relative",
        "& .MuiTypography-root": {
            fontSize: 25,
            fontWeight: 600,
            paddingBottom: 25,

            "@media(max-width: 600px)": {
                fontSize: 22,
            },
        },

        "&::after": {
            content: "''",
            width: 194,
            height: 6,
            borderRadius: 8,
            backgroundColor: Colors.teal1,
            position: "absolute",
            bottom: 0,
            left: 0,
        },
    },
    text: {
        fontSize: 25,
        fontWeight: 300,

        "@media(max-width: 600px)": {
            fontSize: 18,
        },
    },
}));

const Listing = ({ data = [] }) => {
    const classes = useStyles();
    return (
        <>
            {data.map((item, i) => (
                <Box className={classes.wrapper} key={i}>
                    <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                            <ListItemAvatar>
                                <Avatar
                                    src={Images.OptionSquareShape}
                                    className={classes.optionAvatar}
                                />
                            </ListItemAvatar>
                            <ListItemText className={classes.listItemText}>
                                {item.title}
                            </ListItemText>
                        </ListItem>
                    </List>

                    <Typography variant="h6" className={classes.text}>
                        {item.text}
                    </Typography>
                </Box>
            ))}
        </>
    );
};

export default Listing;
