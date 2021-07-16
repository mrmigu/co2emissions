const tooltipReducer = (tooltipContent = null, action) => {
    if (action.type === "SET_TOOLTIP_CONTENT") {
        if (!action.payload) {
            return "";
        } else {
            return action.payload;
        }
        
    }
    return tooltipContent;
}

export default tooltipReducer;