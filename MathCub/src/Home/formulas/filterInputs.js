function filterInputs(arr) {
    return arr
        .filter(item => !isNaN(item) && item !== null && item !== "")
        .map(item => parseFloat(item));
}

export default filterInputs