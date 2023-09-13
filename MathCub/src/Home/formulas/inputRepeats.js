const inputRepeats = (inputs) => {
    const countMap = {};
    inputs.forEach(input => {
        if (countMap[input]) {
            countMap[input]++;
        } else {
            countMap[input] = 1;
        }
    });
    return countMap;
}

export default inputRepeats