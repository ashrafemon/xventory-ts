import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { updateCustomer } from "../../../../../store/actions/dashboard/customerActions";
import { updateBox } from "../../../../../store/actions/dashboard/system/boxActions";
import locationAction from "../../../../../store/actions/location";
import { toggleCrudDialog } from "../../../../../store/actions/siteAction";
import { fetchStores } from "../../../../../store/actions/storeAction";
import { SubmitButton } from "../../../../../styles/globalStyles";
import CrudAutoCompleteTextBox from "../../../shared/CrudAutoCompleteTextBox";
import CrudSelectBox from "../../../shared/CrudSelectBox";
import CrudSelector from "../../../shared/CrudSelector";
import CrudTextBox from "../../../shared/CrudTextBox";

const Edit = ({ data, handler }) => {
    const dispatch = useDispatch();
    const { stores } = useSelector((state: RootStateOrAny) => state.stores);
    const { districts, subDistricts, postOffices } = useSelector(
        (state: RootStateOrAny) => state.location
    );
    const [genderOptions] = useState([
        { text: "Male", value: "MALE" },
        { text: "Female", value: "FEMALE" },
    ]);

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    const fieldChangeHandler = (field, value) => {
        handler((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const addressFieldChangeHandler = (field, value) => {
        handler((prevState) => ({
            ...prevState,
            address: {
                ...prevState.address,
                [field]: value,
            },
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // dispatch(
        //     updateCustomer(formData, () =>
        //         dispatch(toggleCrudDialog({ open: false, type: "" }))
        //     )
        // );
    };

    return (
        <form onSubmit={submitHandler}>
            {/* <Box mb={1}>
                <CrudTextBox
                    label="Name"
                    value={data && data.name}
                    onChange={(e) => fieldChangeHandler("name", e.target.value)}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="number"
                    label="Credit Balance"
                    value={data && data.creditBalance}
                    onChange={(e) =>
                        fieldChangeHandler("creditBalance", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Phone"
                    value={data && data.phone}
                    onChange={(e) =>
                        fieldChangeHandler("phone", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Email"
                    value={data && data.email}
                    onChange={(e) =>
                        fieldChangeHandler("email", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    type="date"
                    label="Date Of Birth"
                    value={data && data.dateOfBirth}
                    onChange={(e) =>
                        fieldChangeHandler("dateOfBirth", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={genderOptions}
                    label="Gender"
                    value={data && data.gender}
                    onChange={(e) =>
                        fieldChangeHandler("gender", e.target.value)
                    }
                />
            </Box>

            <Box mb={1}>
                <CrudSelectBox
                    label="Status"
                    value={data && data.status}
                    onChange={(e) =>
                        fieldChangeHandler("status", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={stores && stores.storeList}
                    optionLabel="name"
                    label="Store List"
                    placeholder="Store List"
                    required
                    multiple
                    value={data && data.storeList}
                    onChange={(e, data) =>
                        fieldChangeHandler("storeList", data)
                    }
                />
            </Box> */}

            <Box textAlign="center" mt={3}>
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
