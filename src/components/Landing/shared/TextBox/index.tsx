import React from "react";
import { TextField, withStyles } from "@material-ui/core";

const CssTextField = withStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            fontWeight: 300,
            backgroundColor: "rgba(216, 216, 216, .3)",
            borderRadius: 8,
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "rgba(216, 216, 216, .3)",
            },
        },
    },
})(TextField);

type Field = {
    placeholder?: string,
    type?:string,
    value?:string,
    label?: string,
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void,
    error?:boolean,
    helperText?: string,
    multiline?: boolean,
    rows?: number
}

const TextBox = React.forwardRef((props:Field, ref) => {
    return <CssTextField
        // ref={ref}
        variant="outlined" fullWidth {...props}
    />;
});

export default TextBox;
