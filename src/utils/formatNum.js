export const formatNum = (numAfterDot, num, unit) => {
    return `${unit}${num.toFixed(numAfterDot)}`;
};
