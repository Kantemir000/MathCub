import jStat from "jstat"

const generatePopulation = (mean, sd, size) => {
    const population = [];
    for (let i = 0; i < size; i++) {
        population.push(jStat.normal.sample(mean, sd));
    }
    return population;
};

export default generatePopulation