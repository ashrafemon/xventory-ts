import { gql } from "@apollo/client";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

enum ProductType {
    STANDARD = "STANDARD",
}

enum TaxMethod {
    EXCLUSIVE = "EXCLUSIVE",
    INCLUSIVE = "INCLUSIVE",
}

type StoreInput = {
    id: string;
};

type UnitInput = {
    id: string;
};

type BoxInput = {
    id: string;
};

type CategoryInput = {
    id: string;
};

type SupplierInput = {
    id: string;
};

type BrandInput = {
    id: string;
};

type TaxRateInput = {
    id: string;
};

export const GET_PRODUCTS = gql`
    query ($size: Int!, $offset: Int!) {
        getProductList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                productList {
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

export const GET_PRODUCT = gql`
    query ($productId: String!) {
        getProductById(productId: $productId) {
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
                quantityInStock
                alertQuantity
                status
                description
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_PRODUCT = gql`
    mutation (
        $type: ProductType!
        $code: String!
        $name: String!
        $description: String
        $status: Status!
        $storeList: [StoreInput]!
        $alertQuantity: Float!
        $price: Float!
        $unit: UnitInput
        $box: BoxInput
        $category: CategoryInput
        $supplier: SupplierInput
        $brand: BrandInput
        $taxRate: TaxRateInput
        $barcodeSymbology: String!
        $taxMethod: TaxMethod!
        $expiredAt: String!
    ) {
        createProduct(
            product: {
                type: $type
                name: $name
                code: $code
                category: $category
                supplier: $supplier
                brand: $brand
                taxRate: $taxRate
                taxMethod: $taxMethod
                barcodeSymbology: $barcodeSymbology
                box: $box
                expiredAt: $expiredAt
                unit: $unit
                price: $price
                alertQuantity: $alertQuantity
                status: $status
                description: $description
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
                status
                description
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation (
        $id: String!
        $type: ProductType!
        $code: String!
        $name: String!
        $description: String
        $status: Status!
        $storeList: [StoreInput]!
        $alertQuantity: Float!
        $price: Float!
        $unit: UnitInput
        $box: BoxInput
        $category: CategoryInput
        $supplier: SupplierInput
        $brand: BrandInput
        $taxRate: TaxRateInput
        $barcodeSymbology: String!
        $taxMethod: TaxMethod!
        $expiredAt: String!
    ) {
        updateProduct(
            product: {
                id: $id
                type: $type
                name: $name
                code: $code
                category: $category
                supplier: $supplier
                brand: $brand
                taxRate: $taxRate
                taxMethod: $taxMethod
                barcodeSymbology: $barcodeSymbology
                box: $box
                expiredAt: $expiredAt
                unit: $unit
                price: $price
                alertQuantity: $alertQuantity
                status: $status
                description: $description
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
                status
                description
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_PRODUCT_STATUS = gql`
    mutation {
        updateProductStatus(
            productId: "60e2904722ef6b2c929289b4"
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
                status
                description
                storeList {
                    id
                    name
                }
            }
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation ($productId: String!) {
        deleteProduct(productId: $productId) {
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

export const GET_PRODUCTS_BY_SUPPLIER_ID = gql`
    query ($supplierId: String!) {
        getAllProductListBySupplierId(supplierId: $supplierId) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                productList {
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
                    purchasePrice
                    alertQuantity
                    quantityInStock
                    status
                    description
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
