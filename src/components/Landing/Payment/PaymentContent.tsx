import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { LandingUrls } from "../../../constants/urls";
import AlertModal from "../shared/AlertModal";

const PaymentContent = () => {
    const { status } = useParams<{status: string}>();
    const history = useHistory();

    const [data, setData] = useState({
        title: "",
        text: "",
        type: "",
    });

    useEffect(() => {
        if (status === "success") {
            setData((prevState) => ({
                ...prevState,
                title: "You Have Succesfully Purchases Product.",
                text: "",
                type: "success",
            }));
        } else if (status === "cancel") {
            setData((prevState) => ({
                ...prevState,
                title: "Purchase Cancel",
                text: "",
                type: "failed",
            }));
        } else if (status === "failed") {
            setData((prevState) => ({
                ...prevState,
                title: "Purchase Unsuccessful",
                text: "",
                type: "failed",
            }));
        }
    }, [status]);

    return (
        <Box>
            <AlertModal
                open={true}
                data={data}
                close={() => history.push(LandingUrls.LOGIN)}
            />
        </Box>
    );
};

export default PaymentContent;
