import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { updateSupplier } from "../../../../../../store/actions/dashboard/product/supplierAction";
import locationAction from "../../../../../../store/actions/location";
import { toggleCrudDialog } from "../../../../../../store/actions/siteAction";
import { fetchStores } from "../../../../../../store/actions/storeAction";
import { SubmitButton } from "../../../../../../styles/globalStyles";
import { isRequiredValidate } from "../../../../../../utils/ValidateHelpers";
import CrudAutoCompleteTextBox from "../../../../shared/CrudAutoCompleteTextBox";
import CrudSelectBox from "../../../../shared/CrudSelectBox";
import CrudTextBox from "../../../../shared/CrudTextBox";

const Edit = ({ data, handler, errors, setErrors }) => {
    const dispatch = useDispatch();
    const { stores } = useSelector((state: RootStateOrAny) => state.stores);
    const { districts, subDistricts, postOffices } = useSelector(
        (state: RootStateOrAny) => state.location
    );

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
        handler((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const addressFieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
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

        const nameValidated = isRequiredValidate(
            data.name,
            "name",
            setErrors,
            "Name field is required"
        );

        const codeValidated = isRequiredValidate(
            data.code,
            "code",
            setErrors,
            "Code field is required"
        );

        const phoneValidated = isRequiredValidate(
            data.phone,
            "phone",
            setErrors,
            "Phone field is required"
        );

        const emailValidated = isRequiredValidate(
            data.email,
            "email",
            setErrors,
            "Email field is required"
        );

        if (
            !nameValidated &&
            !codeValidated &&
            !phoneValidated &&
            !emailValidated
        ) {
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

                        if (
                            addressKey === "country" &&
                            data["address"]["country"] !== null
                        ) {
                            formData["address"]["country"] =
                                data["address"]["country"];
                        }
                    });
                }
            });

            console.log("Form Data", formData);

            dispatch(
                updateSupplier(formData, () =>
                    dispatch(toggleCrudDialog({ open: false, type: "" }))
                )
            );
        }
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
                    error={errors.name.show}
                    helperText={errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Code"
                    value={data && data.code}
                    error={errors.code.show}
                    helperText={errors.code.text}
                    onChange={(e) => fieldChangeHandler("code", e.target.value)}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Phone"
                    value={data && data.phone}
                    error={errors.phone.show}
                    helperText={errors.phone.text}
                    onChange={(e) =>
                        fieldChangeHandler("phone", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Email"
                    value={data && data.email}
                    error={errors.email.show}
                    helperText={errors.email.text}
                    onChange={(e) =>
                        fieldChangeHandler("email", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    multiple
                    label="Details"
                    value={data && data.details}
                    onChange={(e) =>
                        fieldChangeHandler("details", e.target.value)
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
                    label="Sub District"
                    placeholder="Sub District"
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
                    label="Post Office"
                    placeholder="Post Office"
                    value={data && data.address && data.address.postOffice}
                    onChange={(e, data) =>
                        addressFieldChangeHandler("postOffice", data)
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
