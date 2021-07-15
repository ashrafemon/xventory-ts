import {Box, Container, Grid, Typography} from "@material-ui/core";
import React, {useEffect, useRef, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {planPurchaseLink, registerAsStoreAdmin, togglePurchaseModal,} from "../../../../store/actions/authAction";
import locationAction from "../../../../store/actions/location";
import {SELECT_PLAN} from "../../../../store/types";
import {isEqualValidate, isRequiredValidate,} from "../../../../utils/ValidateHelpers";
import AutocompleteTextBox from "../../shared/AutcompleteTextBox";
import AuthButton from "../../shared/AuthButton";
import PurchaseModal from "../../shared/PurchaseModal";
import SecretTextBox from "../../shared/SecretTextBox";
import TextBox from "../../shared/TextBox";
import OTPForm from "../OTPForm";
import {useStyles} from "./styled";
import SelectBox from "../../shared/SelectBox";

const RegisterContent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const shopNameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const {divisions, districts, subDistricts, postOffices} = useSelector(
        (state: RootStateOrAny) => state.location
    );
    const {planPurchaseForm, registerComplete, validateErrors, selectedPlan} =
        useSelector((state: RootStateOrAny) => state.auth);

    const [storesCategories] = useState([
        {text: 'STORE', value: "STORE"},
        {text: 'PHARMACY', value: "PHARMACY"},
        {text: 'RESTAURANT', value: "RESTAURANT"},
    ]);
    // const [selectedPlan, setSelectedPlan] = useState({});

    const [errors, setErrors] = useState({
        name: {text: "", show: false},
        shopName: {text: "", show: false},
        phone: {text: "", show: false},
        email: {text: "", show: false},
        password: {text: "", show: false},
        confirmPassword: {text: "", show: false},
        storeCategory: {text: "", show: false},
    });

    useEffect(() => {
        dispatch(locationAction.fetchDivisions());
    }, [dispatch]);

    const [registerForm, setRegisterForm] = useState({
        name: "",
        shopName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        storeCategory: "STORE",
        address: {
            streetAddress: null,
            division: null,
            postOffice: null,
            subDistrict: null,
            district: null,
            country: 'Bangladesh'
        },
    });

    // Form Input Change Handler
    const handleChange = (field, data) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {
                text: "",
                show: false,
            },
        }));
        setRegisterForm({
            ...registerForm,
            [field]: data,
        });
    };
    const handleLocationChange = (field, data) => {
        setRegisterForm({
            ...registerForm,
            address: {
                ...registerForm.address,
                [field]: data,
            },
        });

        if (field === "division") {
            dispatch(locationAction.fetchDistrictsByDivisionId(data.id));
        } else if (field === "district") {
            dispatch(locationAction.fetchSubDistrictsByDistrictId(data.id));
        } else if (field === "subDistrict") {
            dispatch(locationAction.fetchPostOfficesBySubDistrictId(data.id));
        }
    };

    const resetForm = () =>
        setRegisterForm((prevState) => ({
            ...prevState,
            name: "",
            shopName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            storeCategory: "STORE",
            address: {
                streetAddress: "",
                division: null,
                postOffice: null,
                subDistrict: null,
                district: null,
                country: 'Bangladesh'
            },
        }));

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(
            registerForm.name,
            "name",
            setErrors,
            "Name field required"
        );
        const emailValidate = isRequiredValidate(
            registerForm.email,
            "email",
            setErrors,
            "Email field required"
        );
        const shopNameValidate = isRequiredValidate(
            registerForm.shopName,
            "shopName",
            setErrors,
            "Shop Name field required"
        );
        const storeCategoryValidate = isRequiredValidate(
            registerForm.storeCategory,
            "storeCategory",
            setErrors,
            "Store Category field required"
        );
        const phoneValidate = isRequiredValidate(
            registerForm.phone,
            "phone",
            setErrors,
            "Phone field required"
        );
        const passwordValidate = isRequiredValidate(
            registerForm.password,
            "password",
            setErrors,
            "Password field required"
        );

        let confirmPasswordValidate = isRequiredValidate(
            registerForm.confirmPassword,
            "confirmPassword",
            setErrors,
            "Confirm Password field required"
        )
        if (!confirmPasswordValidate) {
            confirmPasswordValidate = isEqualValidate(
                registerForm.confirmPassword,
                registerForm.password,
                "confirmPassword",
                setErrors,
                "Confirm Password not matched"
            );
        }

        if (
            !nameValidate &&
            !emailValidate &&
            !shopNameValidate &&
            !phoneValidate &&
            !passwordValidate &&
            !storeCategoryValidate &&
            !confirmPasswordValidate
        ) {
            let userData = {
                ...registerForm
            };

            Object.keys(registerForm.address).forEach((key) => {
                if (
                    key === 'district'
                ) {
                    userData.address["district"] = {
                        id: registerForm.address["district"]["id"]
                    }
                }
                if (key === 'subDistrict') {
                    userData.address["streetAddress"] =
                        registerForm.address["streetAddress"];
                }

                if (
                    key === 'subDistrict'
                ) {
                    userData.address["subDistrict"] = {
                        id: registerForm.address["subDistrict"]["id"]
                    }
                }
                if (
                    key === 'postOffice'
                ) {
                    userData.address['postOffice'] = {
                        id: registerForm.address["postOffice"]["id"]
                    }
                }
                if (
                    key === 'country'
                ) {
                    userData.address['country'] = registerForm.address["country"]
                }
                if (key === 'division') {
                    delete userData.address['division']
                }
            });
            console.log(userData)
            dispatch(registerAsStoreAdmin(userData, resetForm));
        }
    };

    const purchasePlanHandler = () => {
        dispatch(planPurchaseLink(selectedPlan.id));
    };

    useEffect(() => {
        const plan = JSON.parse(localStorage.getItem("buyPackage"));
        dispatch({
            type: SELECT_PLAN,
            payload: plan,
        });
    }, [dispatch]);

    useEffect(() => {
        if (validateErrors) {
            validateErrors.forEach((item) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [item.field]: {
                        show: true,
                        text: item.message,
                    },
                }));
                // if (item.field === "email") {
                //     emailInputRef.current.focus();
                // }
                // if (item.field === "phone") {
                //     phoneInputRef.current.focus();
                // }
                // if (item.field === "fullName") {
                //     nameInputRef.current.focus();
                // }
                // if (item.field === "shopName") {
                //     shopNameInputRef.current.focus();
                // }
                // if (item.field === "password") {
                //     passwordInputRef.current.focus();
                // }
            });
        }
    }, [validateErrors, setErrors]);

    // console.log(registerForm)

    return (
        <Box className={classes.wrapper}>
            <OTPForm open={registerComplete}/>

            <PurchaseModal
                open={planPurchaseForm}
                plan={selectedPlan}
                close={() => dispatch(togglePurchaseModal(false))}
                submit={purchasePlanHandler}
            />

            <Container>
                <form onSubmit={handleSubmit}>
                    <Box mb={5}>
                        <Box className={classes.formBox}>
                            <Typography
                                className={classes.boxTitle}
                                variant="h5"
                            >
                                You Are One Step Away
                            </Typography>

                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <TextBox
                                        placeholder="Full Name"
                                        type="text"
                                        onChange={(e) =>
                                            handleChange("name", e.target.value)
                                        }
                                        ref={nameInputRef}
                                        error={errors.name.show}
                                        label="Name"
                                        value={registerForm.name}
                                        helperText={errors.name.text}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextBox
                                        placeholder="Phone No"
                                        type="text"
                                        ref={phoneInputRef}
                                        onChange={(e) =>
                                            handleChange(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        label="Phone"
                                        value={registerForm.phone}
                                        error={errors.phone.show}
                                        helperText={errors.phone.text}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextBox
                                        placeholder="Shop Name"
                                        type="text"
                                        ref={shopNameInputRef}
                                        onChange={(e) =>
                                            handleChange(
                                                "shopName",
                                                e.target.value
                                            )
                                        }
                                        label="Shop Name"
                                        value={registerForm.shopName}
                                        error={errors.shopName.show}
                                        helperText={errors.shopName.text}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <SelectBox
                                        options={storesCategories}
                                        onChange={(e) => handleChange("storeCategory", e.target.value)}
                                        value={registerForm.storeCategory}
                                        error={errors.storeCategory.show}
                                        helperText={errors.storeCategory.text}
                                    />
                                    {/*<AutocompleteTextBox*/}
                                    {/*    placeholder="Store Category"*/}
                                    {/*    options={storesCategories}*/}
                                    {/*    optionLabel="name"*/}
                                    {/*    onChange={(e, data) =>*/}
                                    {/*        handleChange("storeCategory", data)*/}
                                    {/*    }*/}
                                    {/*    label="Store Category"*/}
                                    {/*    value={registerForm.storeCategory || ""}*/}
                                    {/*    error={errors.storeCategory.show}*/}
                                    {/*    helperText={errors.storeCategory.text}*/}
                                    {/*/>*/}
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextBox
                                        placeholder="Email"
                                        type="email"
                                        ref={emailInputRef}
                                        onChange={(e) =>
                                            handleChange(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        label="Email"
                                        value={registerForm.email}
                                        error={errors.email.show}
                                        helperText={errors.email.text}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextBox
                                        placeholder="Address"
                                        type="text"
                                        onChange={(e) =>
                                            handleLocationChange(
                                                "streetAddress",
                                                e.target.value
                                            )
                                        }
                                        label="Street Address"
                                        value={
                                            registerForm.address
                                                .streetAddress || ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <AutocompleteTextBox
                                        placeholder="Division"
                                        options={
                                            divisions && divisions.divisionList
                                        }
                                        optionLabel="name"
                                        onChange={(e, data) =>
                                            handleLocationChange(
                                                "division",
                                                data
                                            )
                                        }
                                        label="Division"
                                        value={
                                            registerForm.address.division || ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <AutocompleteTextBox
                                        placeholder="District"
                                        options={
                                            districts && districts.districtList
                                        }
                                        optionLabel="name"
                                        onChange={(e, data) =>
                                            handleLocationChange(
                                                "district",
                                                data
                                            )
                                        }
                                        label="District"
                                        value={
                                            registerForm.address.district || ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <AutocompleteTextBox
                                        placeholder="Sub District"
                                        options={
                                            subDistricts &&
                                            subDistricts.subDistrictList
                                        }
                                        optionLabel="name"
                                        onChange={(e, data) =>
                                            handleLocationChange(
                                                "subDistrict",
                                                data
                                            )
                                        }
                                        label="Sub District"
                                        value={
                                            registerForm.address.subDistrict ||
                                            ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <AutocompleteTextBox
                                        placeholder="Post Office"
                                        // autocomplete="off"
                                        options={
                                            postOffices &&
                                            postOffices.postOfficeList
                                        }
                                        optionLabel="name"
                                        onChange={(e, data) =>
                                            handleLocationChange(
                                                "postOffice",
                                                data
                                            )
                                        }
                                        label="Post Office"
                                        value={
                                            registerForm.address.postOffice ||
                                            ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <SecretTextBox
                                        placeholder="Password"
                                        onChange={(e) =>
                                            handleChange(
                                                "password",
                                                e.target.value
                                            )
                                        }
                                        ref={passwordInputRef}
                                        error={errors.password.show}
                                        helperText={errors.password.text}
                                        label="Password"
                                        value={registerForm.password}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <SecretTextBox
                                        placeholder="Confirm Password"
                                        onChange={(e) =>
                                            handleChange(
                                                "confirmPassword",
                                                e.target.value
                                            )
                                        }
                                        helperText={errors.confirmPassword.text}
                                        error={errors.confirmPassword.show}
                                        label="Confirm Password"
                                        value={registerForm.confirmPassword}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box textAlign="center">
                        <AuthButton
                            type="submit"
                            text="Pay Now"
                            onClick={handleSubmit}
                        />
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default RegisterContent;
