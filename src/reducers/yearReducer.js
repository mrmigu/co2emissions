import constants from "../constants";

const yearReducer = (selectedYear = constants.startYear, action) => {
    if (action.type === "CHANGE_YEAR") {
        return action.payload;
    }
    return selectedYear;
}

export default yearReducer;