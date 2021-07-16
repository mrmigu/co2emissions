import { combineReducers } from "redux";
import yearReducer from "./yearReducer";
import co2DataReducer from "./co2DataReducer";
import maxCo2Reducer from "./maxCo2Reducer"
import tooltipReducer from "./tooltipReducer"

export default combineReducers({
    selectedYear: yearReducer,
    co2Data: co2DataReducer,
    maxCo2: maxCo2Reducer,
    tooltipContent: tooltipReducer
})