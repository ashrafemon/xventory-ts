import { gql } from "@apollo/client";

type DistrictInput = {
    id: string;
};
type SubDistrictInput = {
    id: string;
};
type PostOfficeInput = {
    id: string;
};

enum StoreCategory {
    STORE = "STORE",
    PHARMACY = "PHARMACY",
    RESTAURANT = "RESTAURANT",
}

type AddressInput = {
    streetAddress?: string;
    postOffice?: PostOfficeInput;
    subDistrict?: SubDistrictInput;
    district?: DistrictInput;
    country?: string;
};

export const REGISTER_STORE_ADMIN = gql`
    mutation (
        $name: String!
        $email: String
        $shopName: String!
        $password: String!
        $phone: String!
        $address: AddressInput
        $storeCategory: StoreCategory!
    ) {
        registerAsAStoreAdmin(
            shopName: $shopName
            storeCategory: $storeCategory
            user: {
                name: $name
                phone: $phone
                email: $email
                password: $password
                address: $address
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
                name
                phone
                email
                address {
                    streetAddress
                    postOffice {
                        id
                    }
                    subDistrict {
                        id
                    }
                    district {
                        id
                    }
                    country
                }
            }
        }
    }
`;

export const VERIFY_OTP = gql`
    mutation ($userId: String!, $code: String!) {
        verifyUserAccount(userId: $userId, code: $code) {
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
                name
                phone
                email
                emailVerified
                address {
                    streetAddress
                    postOffice {
                        id
                    }
                    subDistrict {
                        id
                    }
                    district {
                        id
                    }
                    country
                }
            }
        }
    }
`;

export const PLAN_PURCHASE = gql`
    mutation ($userId: String!, $planId: String!) {
        createUserPlanPaymentLink(
            userPlan: { user: { id: $userId }, pricingPlan: { id: $planId } }
        ) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            paymentLink
        }
    }
`;

export const LOGIN = gql`
    mutation ($email: String!, $password: String!) {
        login(username: $email, password: $password, rememberMe: true) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data
        }
    }
`;

export const LOGIN_WITH_STORE = gql`
    mutation ($storeId: String!) {
        loginWithStore(storeId: $storeId, rememberMe: true) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data
        }
    }
`;

export const REQUEST_RESET_PASSWORD = gql`
    mutation ($email: String!) {
        requestForResetUserPassword(email: $email) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data
        }
    }
`;

export const VERIFY_RESET_PASSWORD_OTP = gql`
    mutation ($code: String!, $email: String!) {
        validateOTP(code: $code, email: $email) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data
        }
    }
`;

export const RESET_PASSWORD = gql`
    mutation (
        $newPassword: String!
        $reWrittenNewPassword: String!
        $code: String!
        $email: String!
    ) {
        resetPassword(
            resetPasswordFormData: {
                newPassword: $newPassword
                reWrittenNewPassword: $reWrittenNewPassword
                code: $code
                email: $email
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
            data
        }
    }
`;
