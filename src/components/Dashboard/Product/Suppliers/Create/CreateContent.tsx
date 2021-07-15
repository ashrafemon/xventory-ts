import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSupplier } from "../../../../../store/actions/dashboard/product/supplierAction";
import { createBox } from "../../../../../store/actions/dashboard/system/boxActions";
import locationAction from "../../../../../store/actions/location";
import { fetchDistricts } from "../../../../../store/actions/location/districtAction";
import { fetchStores } from "../../../../../store/actions/storeAction";
import { isRequiredValidate } from "../../../../../utils/ValidateHelpers";
import AutocompleteTextBox from "../../../shared/AutocompleteTextBox";
import FormActions from "../../../shared/FormActions";
import SelectBox from "../../../shared/SelectBox";
import TextBox from "../../../shared/TextBox";

const CreateContent = () => {
    const dispatch = useDispatch();
    const { storeId } = useParams<{ storeId: string }>();
    const { stores } = useSelector((state: RootStateOrAny) => state.stores);
    const { districts, subDistricts, postOffices } = useSelector(
        (state: RootStateOrAny) => state.location
    );
    const { validateErrors } = useSelector(
        (state: RootStateOrAny) => state.site
    );

    const [form, setForm] = useState({
        name: "",
        code: "",
        details: "",
        phone: "",
        email: "",
        address: {
            streetAddress: "",
            postOffice: null,
            subDistrict: null,
            district: null,
            country: "Bangladesh",
        },
        status: "ACTIVE",
        storeList: [],
    });

    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        code: { text: "", show: false },
        details: { text: "", show: false },
        phone: { text: "", show: false },
        email: { text: "", show: false },
        status: { text: "", show: false },
        storeList: { text: "", show: false },
        streetAddress: { text: "", show: false },
    });

    const changeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
        setForm((prevState) => ({
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
        setForm((prevState) => ({
            ...prevState,
            address: {
                ...prevState.address,
                [field]: value,
            },
        }));
    };

    const resetForm = () => {
        setForm((prevState) => ({
            ...prevState,
            name: "",
            code: "",
            details: "",
            phone: "",
            email: "",
            address: {
                streetAddress: "",
                postOffice: null,
                subDistrict: null,
                district: null,
                country: "Bangladesh",
            },
            status: "ACTIVE",
            storeList: [],
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidated = isRequiredValidate(
            form.name,
            "name",
            setErrors,
            "Name field is required"
        );

        const codeValidated = isRequiredValidate(
            form.code,
            "code",
            setErrors,
            "Code field is required"
        );

        const phoneValidated = isRequiredValidate(
            form.phone,
            "phone",
            setErrors,
            "Phone field is required"
        );

        const emailValidated = isRequiredValidate(
            form.email,
            "email",
            setErrors,
            "Email field is required"
        );

        const streetAddressValidated = isRequiredValidate(
            form.address.streetAddress,
            "streetAddress",
            setErrors,
            "Street Address field is required"
        );

        if (
            !nameValidated &&
            !codeValidated &&
            !phoneValidated &&
            !emailValidated &&
            !streetAddressValidated
        ) {
            let formData = {
                storeList: [],
                address: {
                    district: null,
                    subDistrict: null,
                    postOffice: null,
                },
            };

            Object.keys(form).forEach((key) => {
                if (key !== "storeList" && key !== "address") {
                    formData[key] = form[key];
                }

                if (key === "storeList") {
                    form.storeList.forEach((item) => {
                        formData[key].push({ id: item.id });
                    });
                }

                if (key === "address") {
                    Object.keys(form["address"]).forEach((addressKey) => {
                        if (
                            addressKey === "district" &&
                            form["address"]["district"] !== null
                        ) {
                            formData["address"]["district"] = {
                                id: form["address"]["district"]["id"],
                            };
                        }

                        if (
                            addressKey === "subDistrict" &&
                            form["address"]["subDistrict"] !== null
                        ) {
                            formData["address"]["subDistrict"] = {
                                id: form["address"]["subDistrict"]["id"],
                            };
                        }

                        if (
                            addressKey === "postOffice" &&
                            form["address"]["postOffice"] !== null
                        ) {
                            formData["address"]["postOffice"] = {
                                id: form["address"]["postOffice"]["id"],
                            };
                        }

                        if (
                            addressKey === "streetAddress" &&
                            form["address"]["streetAddress"] !== null
                        ) {
                            formData["address"]["streetAddress"] =
                                form["address"]["streetAddress"];
                        }

                        if (
                            addressKey === "country" &&
                            form["address"]["country"] !== null
                        ) {
                            formData["address"]["country"] =
                                form["address"]["country"];
                        }
                    });
                }
            });

            console.log("Form Data", formData);

            dispatch(createSupplier(formData, resetForm));
        }
    };

    useEffect(() => {
        dispatch(fetchStores());
    }, [dispatch]);

    const { address } = form;
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

    useEffect(() => {
        if (storeId && stores && stores.storeList) {
            let selectedStore = {};
            stores.storeList.forEach((item) => {
                if (item.id === storeId) {
                    selectedStore = item;
                }
            });
            setForm((prevState) => ({
                ...prevState,
                storeList: [selectedStore],
            }));
        }
    }, [storeId, stores]);

    useEffect(() => {
        if (validateErrors) {
            validateErrors.forEach((item) => {
                console.log(item);
                setErrors((prevState) => ({
                    ...prevState,
                    [item.field]: {
                        text: item.description,
                        show: true,
                    },
                }));
            });
        }
    }, [validateErrors, setErrors]);

    return (
        <Container maxWidth="md">
            <form onSubmit={submitHandler}>
                <Box mb={2}>
                    <TextBox
                        label="Name"
                        placeholder="Name"
                        required
                        type="text"
                        error={errors.name.show}
                        helperText={errors.name.text}
                        value={form.name}
                        onChange={(e) => changeHandler("name", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Code"
                        placeholder="Code"
                        required
                        value={form.code}
                        error={errors.code.show}
                        helperText={errors.code.text}
                        onChange={(e) => changeHandler("code", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Phone"
                        placeholder="Phone"
                        required
                        value={form.phone}
                        error={errors.phone.show}
                        helperText={errors.phone.text}
                        onChange={(e) => changeHandler("phone", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Email"
                        placeholder="Email"
                        required
                        value={form.email}
                        error={errors.email.show}
                        helperText={errors.email.text}
                        onChange={(e) => changeHandler("email", e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        multiline
                        rows={3}
                        label="Details"
                        placeholder="Details"
                        type="text"
                        error={errors.details.show}
                        helperText={errors.details.text}
                        value={form.details}
                        onChange={(e) =>
                            changeHandler("details", e.target.value)
                        }
                    />
                </Box>
                <Box mb={2}>
                    <SelectBox
                        label="Status"
                        placeholder="Status"
                        required
                        onChange={(e) =>
                            changeHandler("status", e.target.value)
                        }
                        value={form.status}
                        error={errors.status.show}
                        helperText={errors.status.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={stores && stores.storeList}
                        optionLabel="name"
                        label="Store List"
                        placeholder="Store List"
                        required
                        multiple
                        value={form.storeList}
                        onChange={(e, data) => changeHandler("storeList", data)}
                        error={errors.storeList.show}
                        helperText={errors.storeList.text}
                    />
                </Box>
                <Box mb={2}>
                    <TextBox
                        label="Street Address"
                        placeholder="Street Address"
                        value={form.address.streetAddress}
                        onChange={(e) =>
                            addressFieldChangeHandler(
                                "streetAddress",
                                e.target.value
                            )
                        }
                        error={errors.streetAddress.show}
                        helperText={errors.streetAddress.text}
                    />
                </Box>
                <Box mb={2}>
                    <AutocompleteTextBox
                        options={districts && districts.districtList}
                        optionLabel="name"
                        label="District"
                        placeholder="District"
                        value={form.address.district}
                        onChange={(e, data) =>
                            addressFieldChangeHandler("district", data)
                        }
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        options={subDistricts && subDistricts.subDistrictList}
                        optionLabel="name"
                        label="SubDistrict"
                        placeholder="SubDistrict"
                        value={form.address.subDistrict}
                        onChange={(e, data) =>
                            addressFieldChangeHandler("subDistrict", data)
                        }
                    />
                </Box>

                <Box mb={2}>
                    <AutocompleteTextBox
                        options={postOffices && postOffices.postOfficeList}
                        optionLabel="name"
                        label="PostOffice List"
                        placeholder="PostOffice List"
                        value={form.address.postOffice}
                        onChange={(e, data) =>
                            addressFieldChangeHandler("postOffice", data)
                        }
                    />
                </Box>

                <Box mb={2}>
                    <FormActions />
                </Box>
            </form>
        </Container>
    );
};

export default CreateContent;
