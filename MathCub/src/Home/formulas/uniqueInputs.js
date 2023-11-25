export default function uniqueInputs(arr) {
    const occurrences = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        occurrences[element] = (occurrences[element] || 0) + 1;
    }

    const uniqueOccurrences = Object.keys(occurrences).length;

    return uniqueOccurrences;
}