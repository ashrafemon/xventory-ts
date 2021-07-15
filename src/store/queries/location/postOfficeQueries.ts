import { gql } from "@apollo/client";

export const GET_POST_OFFICES_BY_SUB_DISTRICT_ID = gql`
  query ($subDistrictId: String!, $size: Int!) {
    getPostOfficeListBySubDistrictId(
      subDistrictId: $subDistrictId
      size: $size
      offset: 0
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
        postOfficeList {
          id
          name
          postCode
          subDistrict {
            id
            name
            district {
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
