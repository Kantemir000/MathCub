function filterInputs(arr) {
    return arr
        .filter(item => !isNaN(item) && item !== null)
        .map(item => parseFloat(item));
}

export default filterInputs