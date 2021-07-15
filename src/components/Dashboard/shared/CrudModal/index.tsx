import React from "react";
import {
    CrudDialog,
    CrudDialogCloseBtn,
    CrudDialogContent,
    CrudDialogHeader,
    CrudDialogTitle,
} from "../../../../styles/globalStyles";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

type IProps = {
    open: boolean,
    close: () => void,
    children: any,
    type: string
}

const CrudModal = ({open, close, type, children}: IProps) => {
    return (
        <CrudDialog open={open} maxWidth="sm" fullWidth>
            <CrudDialogHeader>
                <CrudDialogTitle>
                    <VisibilityOutlinedIcon/> {type}
                </CrudDialogTitle>
                <CrudDialogCloseBtn onClick={close}>
                    <CloseOutlinedIcon fontSize="large"/>
                </CrudDialogCloseBtn>
            </CrudDialogHeader>
            <CrudDialogContent>{children}</CrudDialogContent>
        </CrudDialog>
    );
};

export default CrudModal;
