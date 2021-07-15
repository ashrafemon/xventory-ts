import {gql} from "@apollo/client";

export const GET_PRICING_PLANS = gql`
    query ($size: Int!, $offset: Int!) {
        getPricingPlanList(size: $size, offset: $offset) {
            status
            code
            errors {
                code
                field
                message
                description
            }
            data {
                pricingPlanList {
                    id
                    name
                    planMode
                    storeCategory
                    featureList
                    benefitList
                    price
                    discountedAmount
                    active
                    outletCount
                    setupFee
                    renewalFee
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
