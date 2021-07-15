import React from "react";
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    Box,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Images } from "../../../../constants/themeData";

const useStyles = makeStyles(() => ({
    listItem: {
        alignItems: "flex-start",
    },
    description: {
        fontSize: 18,
        fontWeight: 300,
        lineHeight: 2,

        "@media(max-width: 600px)": {
            fontSize: 14,
        },
    },
    imgBox: {
        padding: "160px 0 130px",

        "@media(max-width: 600px)": {
            padding: "50px 0",
        },
    },
    demoImg: {
        width: "80%",
        height: "100%",
        borderRadius: 0,
        margin: "auto",

        "@media(max-width: 600px)": {
            width: "100%",
        },
    },
}));

const ListingWithImage = ({ data }) => {
    const classes = useStyles();

    return (
        <List>
            {data.map((item, i) => (
                <ListItem key={i} className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar src={Images.OptionSquareShape} />
                    </ListItemAvatar>
                    <Box>
                        <Typography
                            className={classes.description}
                            variant="h6"
                        >
                            {item.description}
                        </Typography>
                        <Box className={classes.imgBox}>
                            <Avatar
                                src={item.image}
                                className={classes.demoImg}
                            />
                        </Box>
                    </Box>
                </ListItem>
            ))}
        </List>
    );
};

export default ListingWithImage;
