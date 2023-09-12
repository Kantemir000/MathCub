import filterInputs from "./filterInputs";

function sampleAverage(arr) {
    const filteredNumbers = filterInputs(arr)

    if (filteredNumbers.length === 0) {
        return null;
    }

    const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
    return sum / filteredNumbers.length;
}

export default sampleAverage