import {
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Popover,
    TableCell,
    TableRow,
    Typography,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import KeyboardReturnOutlinedIcon from "@material-ui/icons/KeyboardReturnOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import React from "react";
import { useStyles } from "./styled";

const SectionTableRow = ({
    item,
    headers,
    itemFetchHandler,
    itemDeleteHandler,
    // itemEditHandler,
}) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const renderStatusCellClass = (key, value) => {
        if (key === "status" && value.toLowerCase() === "active") {
            return classes.successText;
        } else if (key === "status" && value.toLowerCase() === "inactive") {
            return classes.dangerText;
        }
    };

    const renderTextAlignClass = (key) => {
        if (key === "name" || key === "title" || key === "details") {
            return classes.textLeft;
        }
    };

    return (
        <TableRow>
            {Object.keys(item).map(
                (key, keyIndex) =>
                    headers.includes(key) && (
                        <TableCell
                            key={keyIndex}
                            className={`
                        ${renderStatusCellClass(
                            key,
                            item[key]
                        )} ${renderTextAlignClass(key)}
                                                `}
                        >
                            <Typography variant="body2">{item[key]}</Typography>
                        </TableCell>
                    )
            )}
            <TableCell style={{ width: 10 }}>
                <IconButton onClick={handleClick} className={classes.toggleBtn}>
                    <MoreVertIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    className={classes.popOver}
                    elevation={1}
                >
                    <List className={classes.list}>
                        <ListItem
                            button
                            onClick={() => {
                                itemFetchHandler(item.id, 'Details');
                                handleClose();
                            }}
                        >
                            <ListItemIcon>
                                <VisibilityOutlinedIcon />
                            </ListItemIcon>
                            <Typography>View</Typography>
                        </ListItem>
                        <ListItem button onClick={handleClose}>
                            <ListItemIcon>
                                <KeyboardReturnOutlinedIcon />
                            </ListItemIcon>
                            <Typography>Return</Typography>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                itemFetchHandler(item.id, 'Edit');
                                handleClose();
                            }}
                        >
                            <ListItemIcon>
                                <EditOutlinedIcon />
                            </ListItemIcon>
                            <Typography>Edit</Typography>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                itemDeleteHandler(item.id);
                                handleClose();
                            }}
                        >
                            <ListItemIcon>
                                <DeleteOutlineOutlinedIcon />
                            </ListItemIcon>
                            <Typography>Delete</Typography>
                        </ListItem>
                    </List>
                </Popover>
            </TableCell>
        </TableRow>
    );
};

export default SectionTableRow;
