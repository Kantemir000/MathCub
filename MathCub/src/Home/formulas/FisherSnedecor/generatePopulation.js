import jStat from "jstat"

const generatePopulation = (mean, sd, size) => {
    const population = [];
    for (let i = 0; i < size; i++) {
        population.push(jStat.normal.sample(sd, mean));
    }
    return population;
};

export default generatePopulation