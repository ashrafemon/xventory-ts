import {Box} from "@material-ui/core";
import React from "react";
import IconicButton from "../../shared/IconicButton";
import {useStyles} from "../styled";

const MenuList = ({data = []}) => {
    const classes = useStyles();
    return (
        <Box className={classes.menuBox}>
            {data.map((item, i) => (
                <Box className={classes.menuItem} key={i}>
                    <IconicButton data={item}/>
                </Box>
            ))}
        </Box>
    );
};

export default MenuList;
