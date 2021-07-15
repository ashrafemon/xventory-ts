import {gql} from "@apollo/client";

enum AfterSellPage {
    POS = "POS",
    INVOICE = "INVOICE",
}

enum StoreCategory {
    STORE = "STORE",
    PHARMACY = "PHARMACY",
    RESTAURANT = "RESTAURANT",
}

type DistrictInput = {
    id: string;
};
type SubDistrictInput = {
    id: string;
};
type PostOfficeInput = {
    id: string;
};
type UserInput = {
    id: string;
};

type AddressInput = {
    streetAddress?: string;
    postOffice?: PostOfficeInput;
    subDistrict?: SubDistrictInput;
    district?: DistrictInput;
    country?: string;
};

type StorePreferenceInput = {
    timezone?: string;
    invoiceEditLifeSpan?: number;
    invoiceEditLifeSpanUnit?: string;
    invoiceDeleteLifeSpan?: number;
    invoiceDeleteLifeSpanUnit?: string;
    afterSellPage?: AfterSellPage;
    autoPrintReceipt?: boolean;
    stockAlertQuantity?: number;
    tableItemLimit?: number;
    invoiceFooter?: string;
    tax?: number;
    soundEffect?: boolean;
}

export const GET_STORES = gql`
    query {
        getAllStoreList {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                storeList {
                    id
                    code
                    name
                }
                offset
                limit
                numberOfElements
                totalElements
                totalPages
                first
                last
            }
        }
    }
`;

export const GET_STORES_WITH_PAGINATE = gql`
    query ($size: Int!, $offset: Int!){
        getStoreList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                storeList {
                    id
                    name
                    code
                    address {
                        streetAddress
                        postOffice {
                            id
                            name
                        }
                        subDistrict {
                            id
                            name
                        }
                        district {
                            id
                            name
                        }
                        country
                    }
                    phone
                    email
                    vatRegistrationNumber
                    storePreference {
                        timezone
                        invoiceEditLifeSpan
                        invoiceEditLifeSpanUnit
                        invoiceDeleteLifeSpan
                        invoiceDeleteLifeSpanUnit
                        afterSellPage
                        autoPrintReceipt
                        stockAlertQuantity
                        tableItemLimit
                        invoiceFooter
                        tax
                        soundEffect
                    }
                }
                offset
                limit
                numberOfElements
                totalElements
                totalPages
                first
                last
            }
        }
    }
`;

export const GET_STORE = gql`
    query ($storeId: String!){
        getStoreById(
            storeId: $storeId
        ) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                id
                name
                code
                address {
                    streetAddress
                    postOffice {
                        id
                        name
                    }
                    subDistrict {
                        id
                        name
                    }
                    district {
                        id
                        name
                    }
                    country
                }
                phone
                email
                vatRegistrationNumber
                storeCategory
                storePreference {
                    timezone
                    invoiceEditLifeSpan
                    invoiceEditLifeSpanUnit
                    invoiceDeleteLifeSpan
                    invoiceDeleteLifeSpanUnit
                    afterSellPage
                    autoPrintReceipt
                    stockAlertQuantity
                    tableItemLimit
                    invoiceFooter
                    tax
                    soundEffect
                }
                cashier {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_STORE = gql`
    mutation {
        createStore(
            store: {
                name: "Test Store Two"
                code: "STORE002"
                storeCategory: STORE
                address: {
                    streetAddress: "flsdkjflsdkfjlsdkf"
                    postOffice: { id: "1" }
                    subDistrict: { id: "1" }
                    district: { id: "34" }
                    country: "Bangladesh"
                }
                phone: "01302950019"
                email: "shihabhossian22@projectx.app"
                vatRegistrationNumber: "fdslkfjsdlk"
                cashier: { id: "60df00f222ef6b9af6fd8d4c" }
                storePreference: {
                    timezone: "Asia/Dhaka"
                    invoiceEditLifeSpan: 11
                    invoiceEditLifeSpanUnit: "Minute"
                    invoiceDeleteLifeSpan: 11
                    invoiceDeleteLifeSpanUnit: "Minute"
                    afterSellPage: POS
                    autoPrintReceipt: true
                    stockAlertQuantity: 2
                    tableItemLimit: 25
                    invoiceFooter: "flksdjflskjflskjfslfkj"
                    tax: 15.00
                    soundEffect: true
                }
            }
        ) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                id
                name
                code
                storeCategory
                address {
                    streetAddress
                    postOffice {
                        id
                        name
                    }
                    subDistrict {
                        id
                        name
                    }
                    district {
                        id
                        name
                    }
                    country
                }
                phone
                email
                vatRegistrationNumber
                cashier {
                    id
                    name
                }
                storePreference {
                    timezone
                    invoiceEditLifeSpan
                    invoiceEditLifeSpanUnit
                    invoiceDeleteLifeSpan
                    invoiceDeleteLifeSpanUnit
                    afterSellPage
                    autoPrintReceipt
                    stockAlertQuantity
                    tableItemLimit
                    invoiceFooter
                    tax
                    soundEffect
                }
            }
        }
    }
`;

export const UPDATE_STORE = gql`
    mutation (
        $cashier: UserInput!
        $id: String!
        $name: String!
        $code: String!
        $storeCategory: StoreCategory!
        $address: AddressInput
        $phone: String!
        $email: String!
        $vatRegistrationNumber: String
        $cashier: UserInput!
        $storePreference: StorePreferenceInput
    ) {
        updateStore(
            newCashier: $cashier
            store: {
                id: $id
                name: $name
                code: $code
                storeCategory: $storeCategory
                address: $address
                phone: $phone
                email: $email
                vatRegistrationNumber: $vatRegistrationNumber
                storePreference: $storePreference
            }
        ) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                id
                name
                code
                address {
                    streetAddress
                    postOffice {
                        id
                        name
                    }
                    subDistrict {
                        id
                        name
                    }
                    district {
                        id
                        name
                    }
                    country
                }
                phone
                email
                vatRegistrationNumber
                storeCategory
                storePreference {
                    timezone
                    invoiceEditLifeSpan
                    invoiceEditLifeSpanUnit
                    invoiceDeleteLifeSpan
                    invoiceDeleteLifeSpanUnit
                    afterSellPage
                    autoPrintReceipt
                    stockAlertQuantity
                    tableItemLimit
                    invoiceFooter
                    tax
                    soundEffect
                }
            }
        }
    }
`;

export const DELETE_STORE = gql`
    mutation ($storeId: String) {
        deleteStore(
            storeId: $storeId
        ) {
            status
            code
            errors {
                code
                field
                message
                description
            }
        }
    }
`
