import variance from "../variance";

export default function calculateVarianceRatio(sample, secondSample) {
    const S1 = variance(sample);
    const S2 = variance(secondSample);
    if (S1 > S2)
        return S1 / S2
    else
        return S2 / S1
}