import { combineReducers } from "redux";
import yearReducer from "./yearReducer";
import co2MapDataReducer from "./co2MapDataReducer";
import tooltipReducer from "./tooltipReducer"

export default combineReducers({
    selectedYear: yearReducer,
    co2Data: co2MapDataReducer,
    tooltipContent: tooltipReducer
})