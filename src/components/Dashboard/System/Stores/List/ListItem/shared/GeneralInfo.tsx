import { Box } from "@material-ui/core";
import React, {useState} from "react";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchCashiers } from "../../../../../../../store/actions/dashboard/cashierAction";
import CrudAutoCompleteTextBox from "../../../../../shared/CrudAutoCompleteTextBox";
import CrudTextBox from "../../../../../shared/CrudTextBox";
import CrudSelector from "../../../../../shared/CrudSelector";

const GeneralInfo = ({ data, fieldChangeHandler, errors }) => {
    const dispatch = useDispatch();
    const { cashiers } = useSelector((state: RootStateOrAny) => state.cashiers);
    const [storeCategoryOption] = useState([
        {text: 'Store', value: 'STORE'},
        {text: 'Pharmacy', value: 'PHARMACY'},
        {text: 'Restaurant', value: 'RESTAURANT'},
    ]);

    useEffect(() => {
        dispatch(fetchCashiers());
    }, [dispatch]);

    return (
        <>
            <Box mb={1}>
                <CrudTextBox
                    label="Name"
                    value={data && data.name}
                    onChange={(e) => fieldChangeHandler("name", e.target.value)}
                    error={errors && errors.name.show}
                    helperText={errors && errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Code"
                    value={data && data.code}
                    onChange={(e) => fieldChangeHandler("code", e.target.value)}
                    error={errors && errors.name.show}
                    helperText={errors && errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Phone"
                    value={data && data.phone}
                    onChange={(e) =>
                        fieldChangeHandler("phone", e.target.value)
                    }
                    error={errors && errors.name.show}
                    helperText={errors && errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Email"
                    value={data && data.email}
                    onChange={(e) =>
                        fieldChangeHandler("email", e.target.value)
                    }
                    error={errors && errors.name.show}
                    helperText={errors && errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudSelector
                    options={storeCategoryOption}
                    label="Store Category"
                    value={
                        data &&
                        data.storeCategory
                    }
                    onChange={(e) =>
                        fieldChangeHandler("storeCategory", e.target.value)
                    }
                />
            </Box>
            <Box mb={1}>
                <CrudTextBox
                    label="Vat Registration Number"
                    value={data && data.vatRegistrationNumber}
                    onChange={(e) =>
                        fieldChangeHandler(
                            "vatRegistrationNumber",
                            e.target.value
                        )
                    }
                    error={errors && errors.name.show}
                    helperText={errors && errors.name.text}
                />
            </Box>
            <Box mb={1}>
                <CrudAutoCompleteTextBox
                    options={cashiers && cashiers.userList}
                    optionLabel="name"
                    label="Cashier"
                    placeholder="Cashier"
                    required
                    value={data && data.cashier}
                    onChange={(e, data) => fieldChangeHandler("cashier", data)}
                    error={errors && errors.cashier.show}
                    helperText={errors && errors.cashier.text}
                />
            </Box>
        </>
    );
};

export default React.memo(GeneralInfo);
