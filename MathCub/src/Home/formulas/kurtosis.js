import filterInputs from "./filterInputs";

export default function calculateSampleKurtosis(inputs) {
    const arr = filterInputs(inputs);
    const n = arr.length;
    if (n < 4) {
        return null
    }

    const mean = arr.reduce((sum, val) => sum + val, 0) / n;
    const sumSquaredDiffs = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0);
    const variance = sumSquaredDiffs / (n - 1);
    const standardDeviation = Math.sqrt(variance);

    const sumFourthPowerDiffs = arr.reduce((sum, val) => sum + Math.pow(val - mean, 4), 0);

    const numerator = n * (n + 1);
    const denominator1 = (n - 1) * (n - 2) * (n - 3);
    const denominator2 = Math.pow(standardDeviation, 4);

    const sampleKurtosis = (numerator / (denominator1 * denominator2)) * sumFourthPowerDiffs
        - (3 * Math.pow(n - 1, 2)) / ((n - 2) * (n - 3));

    return sampleKurtosis;
}