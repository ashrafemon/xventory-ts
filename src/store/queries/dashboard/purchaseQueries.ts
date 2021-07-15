import {gql} from "@apollo/client";

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

type SupplierInput = {
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

type PaymentMethodInput = {
    id: string;
};

type PurchasePaymentInformationInput = {
    paymentMethod: PaymentMethodInput;
    paidAmount: number;
    note?: string;
};

type ProductInput = {
    id: string;
};

type PurchaseCartInformationInput = {
    product: ProductInput;
    taxRate?: number;
    cost?: number;
    quantity: number;
    sellPrice: number;
};

export const GET_PURCHASES = gql`
    query ($size: Int!, $offset: Int!) {
        getPurchaseList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                purchaseList {
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
                        note
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

export const GET_PURCHASE = gql`
    query ($purchaseId: String!) {
        getPurchaseById(
            purchaseId: $purchaseId
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
                    changeAmount
                    note
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

export const CREATE_PURCHASE = gql`
    mutation (
        $date: String!
        $referenceNo: String!
        $note: String!
        $supplier: SupplierInput!
        $orderTax: Float!
        $shippingCharge: Float!
        $othersCharge: Float!
        $discount: Float!
        $purchasePaymentInformationList: [PurchasePaymentInformationInput]!
        $attachmentLists: [String]
        $purchaseCartInformationList: [PurchaseCartInformationInput]!
    ) {
        createPurchase(
            purchase: {
                date: $date
                referenceNo: $referenceNo
                note: $note
                supplier: $supplier
                purchaseCartInformationList: $purchaseCartInformationList
                orderTax: $orderTax
                shippingCharge: $shippingCharge
                othersCharge: $othersCharge
                discount: $discount
                attachmentLists: $attachmentLists
                purchasePaymentInformationList: $purchasePaymentInformationList
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
                    #                    taxRate
                    #                    itemTotal
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
                    note
                    #                    createdAt
                    #                    createdBy {
                    #                        id
                    #                    }
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

export const UPDATE_PURCHASE = gql`
    mutation (
        $id: String
        $date: String!
        $referenceNo: String!
        $note: String!
        $supplier: SupplierInput!
        $orderTax: Float!
        $shippingCharge: Float!
        $othersCharge: Float!
        $discount: Float!
        $purchasePaymentInformationList: [PurchasePaymentInformationInput]!
        $attachmentLists: [String]
        $purchaseCartInformationList: [PurchaseCartInformationInput]!
    ) {
        updatePurchase(
            purchase: {
                id: $id
                date: $date
                referenceNo: $referenceNo
                note: $note
                supplier: $supplier
                purchaseCartInformationList: $purchaseCartInformationList
                orderTax: $orderTax
                shippingCharge: $shippingCharge
                othersCharge: $othersCharge
                discount: $discount
                attachmentLists: $attachmentLists
                purchasePaymentInformationList: $purchasePaymentInformationList
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
                    #                    taxRate
                    #                    itemTotal
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
                    note
                    #                    createdAt
                    #                    createdBy {
                    #                        id
                    #                    }
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

export const UPDATE_PURCHASE_SHIPPING_STATUS = gql`
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

export const UPDATE_PURCHASE_PAYMENT_STATUS = gql`
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

export const DELETE_PURCHASE = gql`
    mutation ($purchaseId: String!) {
        deletePurchase(purchaseId: $purchaseId) {
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
