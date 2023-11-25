import * as ss from "simple-statistics"
import uniqueInputs from "./uniqueInputs";

function calculateChiSquare(intervals, inputs) {
    const size = inputs.length;
    const unique = uniqueInputs(inputs) || 1
    const chiSquare = intervals.reduce(
        (acc, interval) => 
        acc += Math.pow(interval.percent - interval.probability * unique, 2) / interval.probability * unique, 0)

    const tableValue = ss.chiSquaredDistributionTable[unique][0.05]
    return {
        chiSquare,
        chiSquareTableValue: tableValue,
        result: tableValue >= chiSquare
    }
}

export default calculateChiSquare