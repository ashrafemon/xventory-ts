import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}

type StoreInput = {
    id: string;
};

type DistrictInput = {
    id: string;
};
type SubDistrictInput = {
    id: string;
};
type PostOfficeInput = {
    id: string;
};

export const GET_CUSTOMERS = gql`
    query ($size: Int!, $offset: Int!) {
        getCustomerList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                customerList {
                    id
                    name
                    creditBalance
                    phone
                    email
                    dateOfBirth
                    gender
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

export const GET_CUSTOMER = gql`
    query ($customerId: String!) {
        getCustomerById(customerId: $customerId) {
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
                creditBalance
                phone
                email
                dateOfBirth
                gender
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
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_CUSTOMER = gql`
    mutation (
        $name: String!
        $creditBalance: Float!
        $phone: String!
        $email: String!
        $dateOfBirth: String
        $gender: Gender!
        $streetAddress: String
        $postOffice: PostOfficeInput
        $district: DistrictInput
        $subDistrict: SubDistrictInput
        $storeList: [StoreInput]!
        $status: Status!
    ) {
        createCustomer(
            customer: {
                name: $name
                creditBalance: $creditBalance
                phone: $phone
                email: $email
                dateOfBirth: $dateOfBirth
                gender: $gender
                address: {
                    streetAddress: $streetAddress
                    postOffice: $postOffice
                    subDistrict: $subDistrict
                    district: $district
                    country: "Bangladesh"
                }
                storeList: $storeList
                status: $status
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
                creditBalance
                phone
                email
                dateOfBirth
                gender
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
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_CUSTOMER = gql`
    mutation (
        $id: String!
        $name: String!
        $creditBalance: Float!
        $phone: String!
        $email: String!
        $dateOfBirth: String
        $gender: Gender!
        $streetAddress: String
        $postOffice: PostOfficeInput
        $district: DistrictInput
        $subDistrict: SubDistrictInput
        $storeList: [StoreInput]!
        $status: Status!
    ) {
        updateCustomer(
            customer: {
                id: $id
                name: $name
                creditBalance: $creditBalance
                phone: $phone
                email: $email
                dateOfBirth: $dateOfBirth
                gender: $gender
                address: {
                    streetAddress: $streetAddress
                    postOffice: $postOffice
                    subDistrict: $subDistrict
                    district: $district
                    country: "Bangladesh"
                }
                storeList: $storeList
                status: $status
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
                creditBalance
                phone
                email
                dateOfBirth
                gender
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
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_CUSTOMER_STATUS = gql`
    mutation {
        updateCustomerStatus(
            customerId: "60deff1a22ef6b7ff0627303"
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
                name
                creditBalance
                phone
                email
                dateOfBirth
                gender
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
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const DELETE_CUSTOMER = gql`
    mutation ($customerId: String!) {
        deleteCustomer(customerId: $customerId) {
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
