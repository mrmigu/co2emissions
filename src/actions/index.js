export const changeYear = year => {
    return {
        type: "CHANGE_YEAR",
        payload: year
    };
};

export const changeTooltip = tooltipContent => {
    return {
        type: "SET_TOOLTIP_CONTENT",
        payload: tooltipContent
    };
};