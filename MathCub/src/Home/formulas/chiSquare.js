import * as ss from "simple-statistics"

function calculateChiSquare(intervals, inputs) {
    let n = inputs.length > 1 ? inputs.length : 2;
    const a = 0.05;

    const chiSquare = intervals.reduce(
        (acc, interval) =>
            acc += Math.pow(interval.percent - interval.probability * n, 2) / interval.probability * n, 0)


    const tableValue = ss.chiSquaredDistributionTable[n - 1][a]
    return {
        chiSquare,
        chiSquareTableValue: tableValue,
        result: tableValue >= chiSquare
    }
}

export default calculateChiSquare
