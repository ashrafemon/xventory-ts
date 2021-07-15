import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

export const GET_CURRENCIES = gql`
    query ($size: Int!, $offset: Int!) {
        getCurrencyList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                currencyList {
                    id
                    title
                    code
                    symbolLeft
                    symbolRight
                    decimalPlace
                    status
                    storeList {
                        id
                        name
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

export const GET_CURRENCY = gql`
    query ($currencyId: String!) {
        getCurrencyById(currencyId: $currencyId) {
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
                title
                code
                symbolLeft
                symbolRight
                decimalPlace
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_CURRENCY = gql`
    mutation (
        $code: String!
        $title: String!
        $symbolLeft: String
        $symbolRight: String
        $decimalPlace: Int!
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createCurrency(
            currency: {
                code: $code
                title: $title
                symbolLeft: $symbolLeft
                symbolRight: $symbolRight
                decimalPlace: $decimalPlace
                status: $status
                storeList: $storeList
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
                title
                code
                symbolLeft
                symbolRight
                decimalPlace
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_CURRENCY = gql`
    mutation (
        $id: String!
        $code: String!
        $title: String!
        $symbolLeft: String
        $symbolRight: String
        $decimalPlace: Int!
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updateCurrency(
            currency: {
                id: $id
                code: $code
                title: $title
                symbolLeft: $symbolLeft
                symbolRight: $symbolRight
                decimalPlace: $decimalPlace
                status: $status
                storeList: $storeList
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
                title
                code
                symbolLeft
                symbolRight
                decimalPlace
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_CURRENCY_STATUS = gql`
    mutation {
        updateCurrencyStatus(
            currencyId: "60e0261e22ef6b81d8fd77aa"
            status: ACTIVE
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
                title
                code
                symbolLeft
                symbolRight
                decimalPlace
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const DELETE_CURRENCY = gql`
    mutation ($currencyId: String!) {
        deleteCurrency(currencyId: $currencyId) {
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
`;
