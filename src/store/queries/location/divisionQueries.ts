import {gql} from "@apollo/client";

export const GET_DIVISIONS = gql`
    query ($size: Int!, $offset: Int!) {
        getDivisionList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                divisionList {
                    id
                    name
                    country
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

export const GET_DIVISION = gql`
    query ($id: String!) {
        getDivisionById(divisionId: $id) {
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
                country
            }
        }
    }
`;

export const ADD_DIVISION = gql`
    mutation ($name: String!, $country: String!) {
        createDivision(division: { name: $name, country: $country }) {
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
                country
            }
        }
    }
`;

export const UPDATE_DIVISION = gql`
    mutation ($id: String!, $name: String!, $country: String!) {
        updateDivision(division: { id: $id, name: $name, country: $country }) {
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
                country
            }
        }
    }
`;

export const DELETE_DIVISION = gql`
    mutation ($id: String!) {
        deleteDivision(divisionId: $id) {
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
