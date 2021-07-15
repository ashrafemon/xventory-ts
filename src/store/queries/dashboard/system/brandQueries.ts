import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

export const GET_BRANDS = gql`
    query ($size: Int!, $offset: Int!) {
        getBrandList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                brandList {
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

export const GET_BRAND = gql`
    query ($brandId: String!) {
        getBrandById(brandId: $brandId) {
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
                image
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_BRAND = gql`
    mutation (
        $image: String!
        $code: String!
        $name: String!
        $details: String!
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createBrand(
            brand: {
                image: $image
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
                image
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_BRAND = gql`
    mutation (
        $id: String!
        $image: String!
        $code: String!
        $name: String!
        $details: String!
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updateBrand(
            brand: {
                id: $id
                image: $image
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
                image
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_BRAND_STATUS = gql`
    mutation ($brandId: String!, $status: Status!) {
        updateBrandStatus(brandId: $brandId, status: $status) {
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
                image
                status
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const DELETE_BRAND = gql`
    mutation ($brandId: String!) {
        deleteBrand(brandId: $brandId) {
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
