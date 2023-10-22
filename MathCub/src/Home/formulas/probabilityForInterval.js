import * as ss from "simple-statistics"

function calculateProbabilityForInterval(a, b, inputs) {
    const standardDeviation = ss.standardDeviation(inputs)
    const mean = ss.mean(inputs)
    const zA = (a - mean) / standardDeviation;
    const zB = (b - mean) / standardDeviation;

    const probabilityA = ss.erf(zA / Math.sqrt(2));
    const probabilityB = ss.erf(zB / Math.sqrt(2));

    return probabilityB - probabilityA;
}

export default calculateProbabilityForInterval