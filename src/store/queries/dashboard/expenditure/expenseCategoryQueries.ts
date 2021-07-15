import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

export const GET_EXPENSE_CATEGORIES = gql`
    query ($size: Int!, $offset: Int!) {
        getExpenseCategoryList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                expenseCategoryList {
                    id
                    store {
                        id
                        name
                    }
                    name
                    slug
                    parentExpenseCategory {
                        id
                        name
                    }
                    details
                    status
                    createdAt
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

export const GET_EXPENSE_CATEGORY = gql`
    query ($expenseCategoryId: String!) {
        getExpenseCategoryById(expenseCategoryId: $expenseCategoryId) {
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
                store {
                    id
                    name
                }
                name
                slug
                parentExpenseCategory {
                    id
                    name
                }
                details
                status
                createdAt
            }
        }
    }
`;

export const CREATE_EXPENSE_CATEGORY = gql`
    mutation (
        $name: String!
        $slug: String!
        $details: String
        $status: Status!
    ) {
        createExpenseCategory(
            expenseCategory: {
                name: $name
                slug: $slug
                details: $details
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
                store {
                    id
                    name
                }
                name
                slug
                parentExpenseCategory {
                    id
                    name
                }
                details
                status
                createdAt
            }
        }
    }
`;

export const UPDATE_EXPENSE_CATEGORY = gql`
    mutation (
        $id: String!
        $name: String!
        $slug: String!
        $details: String
        $status: Status!
    ) {
        updateExpenseCategory(
            expenseCategory: {
                id: $id
                name: $name
                slug: $slug
                details: $details
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
                store {
                    id
                    name
                }
                name
                slug
                parentExpenseCategory {
                    id
                    name
                }
                details
                status
                createdAt
            }
        }
    }
`;

export const UPDATE_EXPENSE_CATEGORY_STATUS = gql`
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

export const DELETE_EXPENSE_CATEGORY = gql`
    mutation ($expenseCategoryId: String!) {
        deleteExpenseCategory(expenseCategoryId: $expenseCategoryId) {
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
