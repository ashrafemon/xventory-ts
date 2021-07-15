import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

export const GET_CATEGORIES = gql`
    query ($size: Int!, $offset: Int!) {
        getCategoryList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                categoryList {
                    id
                    code
                    name
                    # parent {
                    #     id
                    #     name
                    # }
                    details
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

export const GET_CATEGORY = gql`
    query ($categoryId: String!) {
        getCategoryById(categoryId: $categoryId) {
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
                parent {
                    id
                    name
                }
                details
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

export const CREATE_CATEGORY = gql`
    mutation (
        $code: String!
        $name: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        createCategory(
            category: {
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
                # parent {
                #     id
                #     name
                # }
                details
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

export const UPDATE_CATEGORY = gql`
    mutation (
        $id: String!
        $code: String!
        $name: String!
        $details: String
        $status: Status!
        $storeList: [StoreInput]!
    ) {
        updateCategory(
            category: {
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
                # parent {
                #     id
                #     name
                # }
                details
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

export const UPDATE_CATEGORY_STATUS = gql`
    mutation {
        updateCategoryStatus(
            categoryId: "60e017fa22ef6b67df25e698"
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
                parent {
                    id
                    name
                }
                details
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

export const DELETE_CATEGORY = gql`
    mutation ($categoryId: String!) {
        deleteCategory(categoryId: $categoryId) {
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
