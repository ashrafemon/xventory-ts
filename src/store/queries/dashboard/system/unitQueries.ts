import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

export const GET_UNITS = gql`
    query ($size: Int!, $offset: Int!) {
        getUnitList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                unitList {
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

export const GET_UNIT = gql`
    query ($unitId: String!) {
        getUnitById(unitId: $unitId) {
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

export const CREATE_UNIT = gql`
    mutation (
        $name: String!
        $code: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createUnit(
            unit: {
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

export const UPDATE_UNIT = gql`
    mutation (
        $id: String!
        $name: String!
        $code: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updateUnit(
            unit: {
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

export const UPDATE_UNIT_STATUS = gql`
    mutation {
        updateUnitStatus(unitId: "60e00bba22ef6b566c04cf51", status: ACTIVE) {
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

export const DELETE_UNIT = gql`
    mutation ($unitId: String!) {
        deleteUnit(unitId: $unitId) {
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
