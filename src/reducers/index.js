import { combineReducers } from "redux";
import yearReducer from "./yearReducer";
import co2DataReducer from "./co2DataReducer";
import tooltipReducer from "./tooltipReducer"

export default combineReducers({
    selectedYear: yearReducer,
    co2Data: co2DataReducer,
    tooltipContent: tooltipReducer
})