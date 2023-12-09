import { useState } from "react";

const useSampleState = (initialState) => {
    const [sample, setSample] = useState(initialState);

    const handleAdd = () => {
        setSample(prev => [...prev, null]);
    }

    const handleChange = (targetValue, id, isLast) => {
        if (isLast) handleAdd();
        setSample(prev => {
            const newSample = [...prev];
            newSample[id] = targetValue;
            return newSample;
        });
    }

    return { sample, handleAdd, handleChange };
}

export { useSampleState }