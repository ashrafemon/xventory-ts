import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

export const GET_PAYMENT_METHODS = gql`
    query ($size: Int!, $offset: Int!) {
        getPaymentMethodList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                paymentMethodList {
                    id
                    code
                    name
                    details
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

export const GET_PAYMENT_METHOD = gql`
    query ($paymentMethodId: String!) {
        getPaymentMethodById(paymentMethodId: $paymentMethodId) {
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
                details
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_PAYMENT_METHOD = gql`
    mutation (
        $code: String!
        $name: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createPaymentMethod(
            paymentMethod: {
                code: $code
                name: $name
                details: $details
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
                details
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_PAYMENT_METHOD = gql`
    mutation (
        $id: String!
        $code: String!
        $name: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updatePaymentMethod(
            paymentMethod: {
                id: $id
                code: $code
                name: $name
                details: $details
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
                details
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_PAYMENT_METHOD_STATUS = gql`
    mutation {
        updatePaymentMethodStatus(
            paymentMethodId: "60e01ff422ef6b7996e5a57c"
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
                details
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const DELETE_PAYMENT_METHOD = gql`
    mutation ($paymentMethodId: String!) {
        deletePaymentMethod(paymentMethodId: $paymentMethodId) {
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
