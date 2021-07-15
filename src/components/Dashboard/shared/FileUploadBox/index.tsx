import {
    FormLabel,
    Grid,
    makeStyles,
    Tooltip,
    Typography,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { DropzoneArea } from "material-ui-dropzone";
import React from "react";

const useStyles = makeStyles(() => ({
    inputLabel: {
        color: "#fff",
        paddingTop: 5,
        display: "block",
        textAlign: "right",
    },
    requiredStar: {
        color: "#EB5757",
        fontSize: 16,
    },
    tooltipIcon: {
        position: "relative",
        top: 5,
    },
    dropZoneArea: {
        minWidth: "30%",
        minHeight: 150,
    },
    dropZoneParagraph: {
        fontSize: 16,
    },
}));

const FileUploadBox = ({
    label = "",
    required = false,
    tooltipText = "",
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid
            container
            alignItems="stretch"
            justify="space-between"
            spacing={3}
        >
            <Grid item xs={12} sm={3}>
                <FormLabel className={classes.inputLabel}>
                    {label}
                    {required && (
                        <Typography
                            variant="caption"
                            className={classes.requiredStar}
                        >
                            *
                        </Typography>
                    )}{" "}
                    :{" "}
                    {tooltipText && (
                        <Tooltip title={tooltipText} placement="top">
                            <HelpIcon
                                fontSize="small"
                                className={classes.tooltipIcon}
                            />
                        </Tooltip>
                    )}
                </FormLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
                <DropzoneArea
                    dropzoneClass={classes.dropZoneArea}
                    dropzoneParagraphClass={classes.dropZoneParagraph}
                    filesLimit={1}
                    {...props}
                />
            </Grid>
        </Grid>
    );
};

export default FileUploadBox;
