import React, { useState } from "react";
import {
    IconButton,
    InputAdornment,
    TextField,
    withStyles,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

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

type IProps = {
    placeholder?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
};

const SecretTextBox = React.forwardRef(
    ({ placeholder, ...props }: IProps, ref) => {
        const [show, setShow] = useState(false);

        const typeToggleHandler = () => {
            setShow(!show);
        };

        return (
            <CssTextField
                {...props}
                // ref={ref}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={typeToggleHandler}>
                                {show ? (
                                    <VisibilityOffIcon />
                                ) : (
                                    <VisibilityIcon />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
);

export default SecretTextBox;
