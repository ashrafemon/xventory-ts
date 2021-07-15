export const isRequiredValidate = (stateField, errorField, setErrors, message) => {
    if (!stateField) {
        setErrors((prev) => ({...prev, [errorField]: {text: message, show: true}}));
        return true
    } else {
        setErrors((prev) => ({...prev, [errorField]: {text: '', show: false}}));
        return false
    }
}

export const isEqualValidate = (field1, field2, errorField, setErrors, message) => {
    if (field1 !== field2) {
        setErrors((prev) => ({...prev, [errorField]: {text: message, show: true}}));
        return true
    } else {
        setErrors((prev) => ({...prev, [errorField]: {text: '', show: false}}));
        return false
    }
}
