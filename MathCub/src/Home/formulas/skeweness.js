import filterInputs from "./filterInputs";

export default function skewness(inputs) {
    const arr = filterInputs(inputs);
    const n = arr.length;
    if (n > 0) {
        const mean = arr.reduce((a, b) => a + b) / n;
        const stdev = Math.sqrt(arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / (n - 1));
        const cubedDeviations = arr.map(x => Math.pow(x - mean, 3));
        const sumCubedDeviations = cubedDeviations.reduce((a, b) => a + b);
        const skewness = (n / ((n - 1) * (n - 2))) * (sumCubedDeviations / Math.pow(stdev, 3));
        return skewness;
    }
    else return null
}