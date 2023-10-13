import cumulativeNormalDistribution from "./cumulativeNormalDistribution";

function calculateProbabilityForInterval(a, b) {
    const integral = (f, a, b, n) => {
        const h = (b - a) / n;
        let sum = 0.5 * (f(a) + f(b));

        for (let i = 1; i < n; i++) {
            sum += f(a + i * h);
        }

        return sum * h;
    };

    const probability = integral(cumulativeNormalDistribution, a, b, 1000);
    return probability;
}

export default calculateProbabilityForInterval