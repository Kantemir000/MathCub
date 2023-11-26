const generateSample = (population, sampleSize) => {
    const sample = [];
    const n = population.length;

    for (let i = 0; i < sampleSize; i++) {
        const randomIndex = Math.floor(Math.random() * n);
        sample.push(population[randomIndex]);
    }

    return sample;
};

export default generateSample