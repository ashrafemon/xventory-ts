import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
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

type AddressInput = {
    streetAddress: string;
    postOffice?: PostOfficeInput;
    subDistrict?: SubDistrictInput;
    district?: DistrictInput;
    country?: string;
};

export const GET_SUPPLIERS = gql`
    query ($size: Int!, $offset: Int!) {
        getSupplierList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                supplierList {
                    id
                    code
                    name
                    details
                    phone
                    email
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
                    image
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

export const GET_SUPPLIER = gql`
    query ($supplierId: String!) {
        getSupplierById(supplierId: $supplierId) {
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
                phone
                email
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
                image
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_SUPPLIER = gql`
    mutation (
        $code: String!
        $name: String!
        $details: String!
        $phone: String!
        $email: String!
        $address: AddressInput
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createSupplier(
            supplier: {
                code: $code
                name: $name
                details: $details
                phone: $phone
                email: $email
                address: $address
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
                phone
                email
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
                image
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_SUPPLIER = gql`
    mutation (
        $id: String!
        $code: String!
        $name: String!
        $details: String!
        $phone: String!
        $email: String!
        $address: AddressInput
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updateSupplier(
            supplier: {
                id: $id
                code: $code
                name: $name
                details: $details
                phone: $phone
                email: $email
                address: $address
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
                phone
                email
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
                image
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_SUPPLIER_STATUS = gql`
    mutation {
        updateSupplierStatus(
            supplierId: "60e289a222ef6b2c929289a8"
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
                phone
                email
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
                image
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const DELETE_SUPPLIER = gql`
    mutation ($supplierId: String!) {
        deleteSupplier(supplierId: $supplierId) {
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
