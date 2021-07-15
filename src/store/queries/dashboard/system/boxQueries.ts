import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

export const GET_BOXES = gql`
    query ($size: Int!, $offset: Int!) {
        getBoxList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                boxList {
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

export const GET_BOX = gql`
    query ($boxId: String!) {
        getBoxById(boxId: $boxId) {
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

export const CREATE_BOX = gql`
    mutation (
        $code: String!
        $name: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createBox(
            box: {
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

export const UPDATE_BOX = gql`
    mutation (
        $id: String!
        $code: String!
        $name: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updateBox(
            box: {
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

export const UPDATE_BOX_STATUS = gql`
    mutation {
        updateBoxStatus(boxId: "60e0123722ef6b5f36cc8b38", status: ACTIVE) {
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

export const DELETE_BOX = gql`
    mutation ($boxId: String!) {
        deleteBox(boxId: $boxId) {
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
