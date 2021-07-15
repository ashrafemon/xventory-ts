import {createDivision, deleteDivision, fetchDivision, fetchDivisions, updateDivision,} from "./divisionAction";

import {
    createDistrict,
    deleteDistrict,
    fetchDistrict,
    fetchDistricts,
    fetchDistrictsByDivisionId,
    updateDistrict,
} from "./districtAction";

import {fetchSubDistrictsByDistrictId} from "./subDistrictAction";
import {fetchPostOfficesBySubDistrictId} from "./postOfficeAction";

const locationAction = {
    // Division Action
    fetchDivisions,
    fetchDivision,
    createDivision,
    updateDivision,
    deleteDivision,

    // District Action
    fetchDistricts,
    fetchDistrictsByDivisionId,
    fetchDistrict,
    createDistrict,
    updateDistrict,
    deleteDistrict,

    // Sub District Action
    fetchSubDistrictsByDistrictId,

    // Sub District Action
    fetchPostOfficesBySubDistrictId,
};

export default locationAction;
