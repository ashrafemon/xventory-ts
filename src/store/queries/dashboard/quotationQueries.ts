import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

type StoreInput = {
    id: string;
};

type SupplierInput = {
    id: string;
};

type ProductInput = {
    id: string;
};

type QuotationCartInformationInput = {
    product: ProductInput;
    quantity: number;
    sellPrice: number;
};

type CustomerInput = {
    id: string;
};

enum QuotationStatus {
    SENT = "SENT",
    PENDING = "PENDING",
    COMPLETE = "COMPLETE",
    DRAFT = "DRAFT",
}

export const GET_QUOTATIONS = gql`
    query ($size: Int!, $offset: Int!) {
        getQuotationList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                quotationList {
                    id
                    store {
                        id
                        name
                    }
                    supplier {
                        id
                        name
                    }
                    date
                    referenceNo
                    quotationStatus
                    customer {
                        id
                        name
                    }
                    quotationCartInformationList {
                        product {
                            id
                            name
                            code
                            price
                        }
                        quantity
                        sellPrice
                        itemTax
                        subTotal
                    }
                    subTotal
                    orderTax
                    shippingCharge
                    othersCharge
                    discount
                    grandTotal
                    note
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

export const GET_QUOTATION = gql`
    query ($quotationId: String!) {
        getQuotationById(quotationId: $quotationId) {
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
                supplier {
                    id
                    name
                }
                date
                referenceNo
                quotationStatus
                customer {
                    id
                    name
                }
                quotationCartInformationList {
                    product {
                        id
                        type
                        name
                        code
                        category {
                            id
                            name
                        }
                        supplier {
                            id
                            name
                        }
                        brand {
                            id
                            name
                        }
                        taxRate {
                            id
                            name
                            rate
                        }
                        taxMethod
                        barcodeSymbology
                        box {
                            id
                            name
                        }
                        expiredAt
                        unit {
                            id
                            name
                        }
                        price
                        alertQuantity
                        quantityInStock
                        status
                        description
                        storeList {
                            id
                            name
                        }
                    }
                    quantity
                    sellPrice
                    itemTax
                    subTotal
                }
                subTotal
                orderTax
                shippingCharge
                othersCharge
                discount
                grandTotal
                note
            }
        }
    }
`;

export const CREATE_QUOTATION = gql`
    mutation (
        $date: String!
        $referenceNo: String!
        $note: String!
        $quotationStatus: QuotationStatus
        $supplier: SupplierInput!
        $customer: CustomerInput!
        $orderTax: Float!
        $shippingCharge: Float!
        $othersCharge: Float!
        $discount: Float!
        $quotationCartInformationList: [QuotationCartInformationInput]!
    ) {
        createQuotation(
            quotation: {
                date: $date
                referenceNo: $referenceNo
                note: $note
                quotationStatus: $quotationStatus
                customer: $customer
                supplier: $supplier
                quotationCartInformationList: $quotationCartInformationList
                orderTax: $orderTax
                shippingCharge: $shippingCharge
                othersCharge: $othersCharge
                discount: $discount
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
                supplier {
                    id
                    name
                }
                date
                referenceNo
                quotationStatus
                customer {
                    id
                    name
                }
                quotationCartInformationList {
                    product {
                        id
                        name
                        code
                        price
                    }
                    quantity
                    sellPrice
                    itemTax
                    subTotal
                }
                subTotal
                orderTax
                shippingCharge
                othersCharge
                discount
                grandTotal
                note
            }
        }
    }
`;

export const UPDATE_QUOTATION = gql`
    mutation (
        $id: String!
        $date: String!
        $referenceNo: String!
        $note: String!
        $quotationStatus: QuotationStatus
        $supplier: SupplierInput!
        $customer: CustomerInput!
        $orderTax: Float!
        $shippingCharge: Float!
        $othersCharge: Float!
        $discount: Float!
        $quotationCartInformationList: [QuotationCartInformationInput]!
    ) {
        updateQuotation(
            quotation: {
                id: $id
                date: $date
                referenceNo: $referenceNo
                note: $note
                quotationStatus: $quotationStatus
                customer: $customer
                supplier: $supplier
                quotationCartInformationList: $quotationCartInformationList
                orderTax: $orderTax
                shippingCharge: $shippingCharge
                othersCharge: $othersCharge
                discount: $discount
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
                supplier {
                    id
                    name
                }
                date
                referenceNo
                quotationStatus
                customer {
                    id
                    name
                }
                quotationCartInformationList {
                    product {
                        id
                        name
                        code
                        price
                    }
                    quantity
                    sellPrice
                    itemTax
                    subTotal
                }
                subTotal
                orderTax
                shippingCharge
                othersCharge
                discount
                grandTotal
                note
            }
        }
    }
`;

export const UPDATE_QUOTATION_SHIPPING_STATUS = gql`
    mutation {
        updatePurchaseShippingStatus(
            purchaseId: "60e591e022ef6bc90a1c151a"
            shippingStatus: RECEIVED
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
                    code
                    name
                }
                supplier {
                    id
                    name
                }
                date
                referenceNo
                invoiceId
                invoiceType
                status
                paymentStatus
                shippingStatus
                totalItem
                totalSell
                note
                attachmentLists
                visible
                purchaseCartInformationList {
                    product {
                        id
                    }
                    quantity
                    cost
                    sellPrice
                    taxRate
                    itemTotal
                }
                subTotal
                orderTax
                shippingCharge
                othersCharge
                discount
                grandTotal
                purchasePaymentInformationList {
                    paymentMethod {
                        id
                    }
                    paidAmount
                    createdAt
                    createdBy {
                        id
                    }
                }
                paidAmount
                createdBy {
                    id
                }
                createdAt
                lastUpdatedBy {
                    id
                }
                lastUpdateAt
            }
        }
    }
`;

export const UPDATE_QUOTATION_PAYMENT_STATUS = gql`
    mutation {
        updatePurchasePaymentInformation(
            purchaseId: "60e591e022ef6bc90a1c151a"
            purchasePaymentInformationList: [
                {
                    paymentMethod: { id: "60e583fa22ef6bafa383d905" }
                    paidAmount: 461
                }
            ]
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
                    code
                    name
                }
                supplier {
                    id
                    name
                }
                date
                referenceNo
                invoiceId
                invoiceType
                status
                paymentStatus
                shippingStatus
                totalItem
                totalSell
                note
                attachmentLists
                visible
                purchaseCartInformationList {
                    product {
                        id
                        code
                        name
                    }
                    quantity
                    cost
                    sellPrice
                    taxRate
                    itemTotal
                }
                subTotal
                orderTax
                shippingCharge
                othersCharge
                discount
                grandTotal
                purchasePaymentInformationList {
                    paymentMethod {
                        id
                        code
                        name
                    }
                    paidAmount
                    createdAt
                    createdBy {
                        id
                        name
                        phone
                        email
                    }
                }
                paidAmount
                createdBy {
                    id
                    name
                    phone
                    email
                }
                createdAt
                lastUpdatedBy {
                    id
                    name
                    phone
                    email
                }
                lastUpdateAt
            }
        }
    }
`;

export const DELETE_QUOTATION = gql`
    mutation ($quotationId: String!) {
        deleteQuotation(quotationId: $quotationId) {
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
