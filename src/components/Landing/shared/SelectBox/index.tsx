import {FormHelperText, MenuItem, Select,} from "@material-ui/core";
import React from "react";
import {LandingBootstrapInput} from "../../../../styles/globalStyles";

const SelectBox = ({
                       options = [],
                       error = false,
                       helperText = "",
                       ...props
                   }) => {
    return (
        <>
            <Select input={<LandingBootstrapInput/>} fullWidth {...props}>
                {options && options.map((item, i) => (
                    <MenuItem key={i} value={item.value}>{item.text}</MenuItem>
                ))}
            </Select>
            {error && <FormHelperText>{helperText}</FormHelperText>}
        </>


    );
};

export default SelectBox;
