import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

export const GET_TAX_RATES = gql`
    query ($size: Int!, $offset: Int!) {
        getTaxRateList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                taxRateList {
                    id
                    code
                    name
                    rate
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

export const GET_TAX_RATE = gql`
    query ($taxRateId: String!) {
        getTaxRateById(taxRateId: $taxRateId) {
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
                code
                name
                rate
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_TAX_RATE = gql`
    mutation (
        $code: String!
        $name: String!
        $rate: Float!
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createTaxRate(
            taxRate: {
                code: $code
                name: $name
                rate: $rate
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
                code
                name
                rate
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_TAX_RATE = gql`
    mutation (
        $id: String!
        $code: String!
        $name: String!
        $rate: Float!
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updateTaxRate(
            taxRate: {
                id: $id
                code: $code
                name: $name
                rate: $rate
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
                code
                name
                rate
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_TAX_RATE_STATUS = gql`
    mutation {
        updateTaxRateStatus(
            taxRateId: "60e02b3c22ef6b8b1a7762c2"
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
                code
                name
                rate
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const DELETE_TAX_RATE = gql`
    mutation ($taxRateId: String!) {
        deleteTaxRate(taxRateId: $taxRateId) {
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
