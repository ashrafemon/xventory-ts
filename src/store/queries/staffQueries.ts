import { gql } from "@apollo/client";

export const ADD_STAFF = gql`
  mutation (
    $name: String!
    $designation: String!
    $phoneList: [String]!
    $emailList: [String]!
    $bloodGroup: String!
    $education: String!
    $streetAddress: String!
    $postOfficeId: String!
    $subDistrictId: String!
    $districtId: String!
    $country: String!
    $description: String!
    $emergencyName: String!
    $emergencyPhoneList: [String]!
    $emergencyEmailList: [String]!
    $emergencyRelation: String!
  ) {
    createStaff(
      staff: {
        name: $name
        designation: $designation
        phoneList: $phoneList
        emailList: $emailList
        bloodGroup: $bloodGroup
        education: $education
        address: {
          streetAddress: $streetAddress
          postOffice: { id: $postOfficeId }
          subDistrict: { id: $subDistrictId }
          district: { id: $districtId }
          country: $country
        }
        description: $description
        emergencyContactPerson: {
          name: $emergencyName
          phoneList: $emergencyPhoneList
          emailList: $emergencyEmailList
          relation: $emergencyRelation
        }
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
        advocate {
          id
        }
        name
        designation
        phoneList
        emailList
        bloodGroup
        education
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
        description
        emergencyContactPerson {
          name
          phoneList
          emailList
          relation
        }
        staffStatus
        createdTime
      }
    }
  }
`;
