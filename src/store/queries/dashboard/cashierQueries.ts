import { gql } from "@apollo/client";

enum UserType {
    CASHIER = "CASHIER",
}

export const GET_CASHIERS = gql`
    query ($userType: UserType!) {
        getAllUserListByUserType(userType: $userType) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                userList {
                    id
                    name
                    phone
                    email
                }
            }
        }
    }
`;
