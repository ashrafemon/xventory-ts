import {gql} from "@apollo/client";

export const GET_DISTRICTS = gql`
    query ($size: Int!, $offset: Int!) {
        getDistrictList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                districtList {
                    id
                    name
                    division {
                        id
                        name
                        country
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

export const GET_DISTRICTS_BY_DIVISION_ID = gql`
    query ($size: Int!, $offset: Int!, $divisionId: String!) {
        getDistrictListByDivisionId(
            divisionId: $divisionId,
            size: $size
            offset: $offset
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
                districtList {
                    id
                    name
                    division {
                        id
                        name
                        country
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

export const GET_DISTRICT = gql`
    query ($id: String!) {
        getDistrictById(districtId: $id) {
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
                division {
                    id
                    name
                    country
                }
            }
        }
    }
`;

export const ADD_DISTRICT = gql`
    mutation ($name: String!, $divisionId: String!) {
        createDistrict(district: { name: $name, division: { id: $divisionId } }) {
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
                division {
                    id
                    name
                    country
                }
            }
        }
    }
`;

export const UPDATE_DISTRICT = gql`
    mutation ($id: String!, $name: String!, $divisionId: String!) {
        updateDistrict(
            district: { id: $id, name: $name, division: { id: $divisionId } }
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
                division {
                    id
                    name
                    country
                }
            }
        }
    }
`;

export const DELETE_DISTRICT = gql`
    mutation ($id: String!) {
        deleteDistrict(districtId: $id) {
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
