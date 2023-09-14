export default function distributionChart(sampleArray) {
    // Сортируем массив
    const sortedArray = sampleArray.sort((a, b) => a - b);

    // Создаем объект для хранения количества повторений каждого значения
    const valueCounts = {};

    // Подсчитываем количество повторений каждого значения
    sortedArray.forEach(value => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
    });

    // Создаем массив объектов с полями x и y
    const distributionData = [];
    let cumulativeCount = 0;

    for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++) {
        if (valueCounts[i]) {
            cumulativeCount += valueCounts[i];
        }
        distributionData.push({
            x: i,
            y: cumulativeCount / sortedArray.length
        });
    }

    return distributionData;
}