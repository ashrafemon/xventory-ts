import { Box, makeStyles, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { TreeItem, TreeView } from "@material-ui/lab";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Colors } from "./../../../../constants/themeData";

const useStyles = makeStyles(() => ({
    treeItem: {
        fontSize: 18,
        color: Colors.white1,
        padding: "10px 0",

        "& .MuiTreeItem-content": {
            position: "relative",

            "& .MuiTreeItem-label": {
                backgroundColor: "transparent !important",
            },
        },

        "& .MuiTreeItem-iconContainer": {
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            "& .MuiSvgIcon-root": {
                fontSize: 22,
            },
        },

        "& .MuiTypography-root": {
            "& .MuiSvgIcon-root": {
                position: "relative",
                top: 6,
                marginRight: 10,
            },
        },
    },
}));

const SideBarNav = ({ list = [] }) => {
    const classes = useStyles();
    const history = useHistory();
    const { storeId } = useParams<{ storeId: string }>();

    // console.log(storeId);

    const routeChangeHandler = (path) => {
        let newPath = path.replace(":storeId", storeId);
        history.push(newPath);
    };

    return (
        <TreeView
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightOutlinedIcon />}
        >
            {list.map((category, categoryIndex) => (
                <TreeItem
                    key={categoryIndex}
                    className={classes.treeItem}
                    nodeId={categoryIndex.toString()}
                    label={
                        <Typography>
                            {category.icon} {category.name}
                        </Typography>
                    }
                    {...(!category.items && {
                        onClick: () => {
                            // console.log("First Leave");
                            routeChangeHandler(category.path);
                        },
                    })}
                >
                    <Box pt={2}>
                        {category.items &&
                            category.items.map(
                                (nestedCategory, nestedCategoryIndex) => (
                                    <TreeItem
                                        key={nestedCategoryIndex}
                                        className={classes.treeItem}
                                        nodeId={
                                            categoryIndex +
                                            "0" +
                                            nestedCategoryIndex
                                        }
                                        label={
                                            <Typography>
                                                {nestedCategory.icon}{" "}
                                                {nestedCategory.name}
                                            </Typography>
                                        }
                                        {...(!nestedCategory.items && {
                                            onClick: () =>
                                                routeChangeHandler(
                                                    nestedCategory.path
                                                ),
                                        })}
                                    >
                                        <Box pt={1}>
                                            {nestedCategory.items &&
                                                nestedCategory.items.map(
                                                    (item, itemIndex) => (
                                                        <TreeItem
                                                            key={itemIndex}
                                                            className={
                                                                classes.treeItem
                                                            }
                                                            nodeId={
                                                                nestedCategoryIndex +
                                                                "0" +
                                                                itemIndex
                                                            }
                                                            label={
                                                                <Typography>
                                                                    {item.icon}{" "}
                                                                    {item.name}
                                                                </Typography>
                                                            }
                                                            onClick={() => {
                                                                // console.log(item.path);
                                                                routeChangeHandler(
                                                                    item.path
                                                                );
                                                            }}
                                                        />
                                                    )
                                                )}
                                        </Box>
                                    </TreeItem>
                                )
                            )}
                    </Box>
                </TreeItem>
            ))}
        </TreeView>
    );
};

export default SideBarNav;
