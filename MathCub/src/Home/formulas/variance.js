import filterInputs from "./filterInputs";

function variance(arr) {
    const filteredNumbers = filterInputs(arr)

    if (filteredNumbers.length === 0) {
        return null;
    }

    const mean = filteredNumbers.reduce((acc, num) => acc + num, 0) / filteredNumbers.length;
    const squaredDifferences = filteredNumbers.map(num => Math.pow(num - mean, 2));
    const variance = squaredDifferences.reduce((acc, squaredDiff) => acc + squaredDiff, 0) / squaredDifferences.length;

    return variance;
}

export default variance