import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import locationAction from "../../../../../../../store/actions/location";
import CrudAutoCompleteTextBox from "../../../../../shared/CrudAutoCompleteTextBox";
import CrudTextBox from "../../../../../shared/CrudTextBox";

const AddressInfo = ({ data, addressFieldChangeHandler }) => {
    const dispatch = useDispatch();
    const { districts, subDistricts, postOffices } = useSelector(
        (state: RootStateOrAny) => state.location
    );

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
        <>
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
                    label="Post Office"
                    placeholder="Post Office"
                    required
                    value={data && data.address && data.address.postOffice}
                    onChange={(e, data) =>
                        addressFieldChangeHandler("postOffice", data)
                    }
                />
            </Box>
        </>
    );
};

export default React.memo(AddressInfo);
