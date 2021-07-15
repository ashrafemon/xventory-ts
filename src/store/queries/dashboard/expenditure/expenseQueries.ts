import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type ExpenseCategoryInput = {
    id: string;
};

export const GET_EXPENSES = gql`
    query ($size: Int!, $offset: Int!) {
        getExpenseList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                expenseList {
                    id
                    store {
                        id
                        name
                    }
                    attachmentList
                    referenceNo
                    expenseCategory {
                        id
                        name
                    }
                    expenseReason
                    amount
                    returnable
                    note
                    createdBy {
                        id
                        name
                    }
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

export const GET_EXPENSE = gql`
    query ($expenseId: String!) {
        getExpenseById(expenseId: $expenseId) {
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
                attachmentList
                referenceNo
                expenseCategory {
                    id
                    name
                }
                expenseReason
                amount
                returnable
                note
                createdBy {
                    id
                    name
                }
                createdAt
            }
        }
    }
`;

export const CREATE_EXPENSE = gql`
    mutation (
        $attachmentList: [String]
        $referenceNo: String!
        $expenseCategory: ExpenseCategoryInput
        $expenseReason: String!
        $amount: Float!
        $returnable: Boolean
        $note: String
    ) {
        createExpense(
            expense: {
                attachmentList: $attachmentList
                referenceNo: $referenceNo
                expenseCategory: $expenseCategory
                expenseReason: $expenseReason
                amount: $amount
                returnable: $returnable
                note: $note
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
                attachmentList
                referenceNo
                expenseCategory {
                    id
                    name
                }
                expenseReason
                amount
                returnable
                note
                createdBy {
                    id
                    name
                }
                createdAt
            }
        }
    }
`;

export const UPDATE_EXPENSE = gql`
    mutation (
        $id: String!
        $attachmentList: [String]
        $referenceNo: String!
        $expenseCategory: ExpenseCategoryInput
        $expenseReason: String!
        $amount: Float!
        $returnable: Boolean
        $note: String
    ) {
        updateExpense(
            expense: {
                id: $id
                attachmentList: $attachmentList
                referenceNo: $referenceNo
                expenseCategory: $expenseCategory
                expenseReason: $expenseReason
                amount: $amount
                returnable: $returnable
                note: $note
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
                attachmentList
                referenceNo
                expenseCategory {
                    id
                    name
                }
                expenseReason
                amount
                returnable
                note
                createdBy {
                    id
                    name
                }
                createdAt
            }
        }
    }
`;

export const UPDATE_EXPENSE_STATUS = gql`
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

export const DELETE_EXPENSE = gql`
    mutation ($expenseId: String!) {
        deleteExpense(expenseId: "60e7ea6522ef6b4105ac1bef") {
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
