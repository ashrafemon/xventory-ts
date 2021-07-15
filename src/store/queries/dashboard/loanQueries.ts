import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

enum LoanPlatform {
    BANK = "BANK",
    NGO = "NGO",
    PERSON = "PERSON",
    OTHERS = "OTHERS",
}

type StoreInput = {
    id: string;
};

export const GET_LOANS = gql`
    query ($size: Int!, $offset: Int!) {
        getLoanList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                loanList {
                    id
                    store {
                        id
                        name
                    }
                    date
                    loanFrom
                    referenceNo
                    loadHeadline
                    amount
                    interest
                    payableAmount
                    paidAmount
                    paymentStatus
                    details
                    attachmentList
                    loanPaymentInformationList {
                        referenceNo
                        paidAmount
                        note
                        createdAt
                        createdBy {
                            id
                            name
                        }
                    }
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

export const GET_LOAN = gql`
    query ($loanId: String!) {
        getLoanById(loanId: $loanId) {
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
                date
                loanFrom
                referenceNo
                loadHeadline
                amount
                interest
                payableAmount
                paidAmount
                paymentStatus
                details
                attachmentList
                loanPaymentInformationList {
                    referenceNo
                    paidAmount
                    note
                    createdAt
                    createdBy {
                        id
                        name
                    }
                }
                createdBy {
                    id
                    name
                }
                createdAt
            }
        }
    }
`;

export const CREATE_LOAN = gql`
    mutation (
        $date: String!
        $loanFrom: LoanPlatform!
        $referenceNo: String!
        $loadHeadline: String!
        $amount: Float!
        $interest: Float!
        $details: String!
        $attachmentList: [String]
    ) {
        createLoan(
            loan: {
                date: $date
                loanFrom: $loanFrom
                referenceNo: $referenceNo
                loadHeadline: $loadHeadline
                amount: $amount
                interest: $interest
                details: $details
                attachmentList: $attachmentList
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
                }
                date
                loanFrom
                referenceNo
                loadHeadline
                amount
                interest
                payableAmount
                paidAmount
                paymentStatus
                details
                attachmentList
                loanPaymentInformationList {
                    referenceNo
                    paidAmount
                    note
                }
                createdBy {
                    id
                    name
                }
                createdAt
            }
        }
    }
`;

export const UPDATE_LOAN = gql`
    mutation (
        $id: String!
        $date: String!
        $loanFrom: LoanPlatform!
        $referenceNo: String!
        $loadHeadline: String!
        $amount: Float!
        $interest: Float!
        $details: String!
        $attachmentList: [String]
    ) {
        updateLoan(
            loan: {
                id: $id
                date: $date
                loanFrom: $loanFrom
                referenceNo: $referenceNo
                loadHeadline: $loadHeadline
                amount: $amount
                interest: $interest
                details: $details
                attachmentList: $attachmentList
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
                }
                date
                loanFrom
                referenceNo
                loadHeadline
                amount
                interest
                payableAmount
                paidAmount
                details
                paymentStatus
                attachmentList
                loanPaymentInformationList {
                    referenceNo
                    paidAmount
                    note
                }
                createdBy {
                    id
                    name
                }
                createdAt
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

export const DELETE_LOAN = gql`
    mutation ($loanId: String!) {
        deleteLoan(loanId: $loanId) {
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
