import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const CssTextField = withStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            fontWeight: 300,
            // backgroundColor: "rgba(216, 216, 216, .3)",
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
    options?: any;
    optionLabel?: string;
    placeholder?: string;
    label?: string;
    value?: string | any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: any) => void;
    error?: boolean;
    helperText?: string;
};

const AutocompleteTextBox = ({
    placeholder,
    options = [],
    optionLabel = "title",
    label = "",
    onChange = () => {},
    ...props
}: IProps) => {
    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option[optionLabel]}
            fullWidth
            onChange={onChange}
            renderInput={(params) => (
                <CssTextField
                    label={label}
                    placeholder={placeholder}
                    variant="outlined"
                    {...params}
                    {...props}
                />
            )}
        />
    );
};

export default AutocompleteTextBox;
