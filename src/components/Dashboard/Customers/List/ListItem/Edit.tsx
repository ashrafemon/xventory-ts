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

        let formData = {
            storeList: [],
            address: {
                district: null,
                subDistrict: null,
                postOffice: null,
            },
        };
        Object.keys(data).forEach((key) => {
            if (key !== "storeList" && key !== "address") {
                formData[key] = data[key];
            }

            if (key === "storeList") {
                data.storeList.forEach((item) => {
                    formData[key].push({ id: item.id });
                });
            }

            if (key === "address") {
                Object.keys(data["address"]).forEach((addressKey) => {
                    if (
                        addressKey === "district" &&
                        data["address"]["district"] !== null
                    ) {
                        formData["address"]["district"] = {
                            id: data["address"]["district"]["id"],
                        };
                    }

                    if (
                        addressKey === "subDistrict" &&
                        data["address"]["subDistrict"] !== null
                    ) {
                        formData["address"]["subDistrict"] = {
                            id: data["address"]["subDistrict"]["id"],
                        };
                    }

                    if (
                        addressKey === "postOffice" &&
                        data["address"]["postOffice"] !== null
                    ) {
                        formData["address"]["postOffice"] = {
                            id: data["address"]["postOffice"]["id"],
                        };
                    }

                    if (
                        addressKey === "streetAddress" &&
                        data["address"]["streetAddress"] !== null
                    ) {
                        formData["address"]["streetAddress"] =
                            data["address"]["streetAddress"];
                    }
                });
            }
        });

        console.log("Form Dta", formData);

        dispatch(
            updateCustomer(formData, () =>
                dispatch(toggleCrudDialog({ open: false, type: "" }))
            )
        );
    };

    const { address } = data;
    const { district, subDistrict } = address;

    useEffect(() => {
        dispatch(locationAction.fetchDistricts());

        if (district) {
            dispatch(locationAction.fetchSubDistrictsByDistrictId(district.id));
        }

        if (subDistrict) {
            dispatch(
                locationAction.fetchPostOfficesBySubDistrictId(subDistrict.id)
            );
        }
    }, [dispatch, district, subDistrict]);

    return (
        <form onSubmit={submitHandler}>
            <Box mb={1}>
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
                <CrudTextBox
                    label="Street Address"
                    value={data && data.address && data.address.streetAddress}
                    onChange={(e) =>
                        addressFieldChangeHandler(
                            "streetAddress",
                            e.target.value
                        )
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={districts && districts.districtList}
                    optionLabel="name"
                    label="District"
                    placeholder="District"
                    required
                    value={data && data.address && data.address.district}
                    onChange={(e, data) =>
                        addressFieldChangeHandler("district", data)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={subDistricts && subDistricts.subDistrictList}
                    optionLabel="name"
                    label="SubDistrict"
                    placeholder="SubDistrict"
                    required
                    value={data && data.address && data.address.subDistrict}
                    onChange={(e, data) =>
                        addressFieldChangeHandler("subDistrict", data)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={postOffices && postOffices.postOfficeList}
                    optionLabel="name"
                    label="PostOffice"
                    placeholder="PostOffice"
                    required
                    value={data && data.address && data.address.postOffice}
                    onChange={(e, data) =>
                        addressFieldChangeHandler("postOffice", data)
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
            </Box>

            <Box textAlign="center" mt={3}>
                <SubmitButton type="submit">Update</SubmitButton>
            </Box>
        </form>
    );
};

export default Edit;
