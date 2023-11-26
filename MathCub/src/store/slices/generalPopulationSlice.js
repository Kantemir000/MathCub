import { createSlice } from "@reduxjs/toolkit";

export const generalPopulationsSlice = createSlice({
    name: "generalPopulations",
    initialState: {
        firstPopulation: null,
        secondPopulation: null
    },
    reducers: {
        setFirstPopulation: (state, action) => {
            const { population } = action.payload;
            state.firstPopulation = population;
        },
        setSecondPopulation: (state, action) => {
            const { population } = action.payload;
            state.secondPopulation = population;
        },
    }
})

export const { setFirstPopulation, setSecondPopulation } = generalPopulationsSlice.actions

export default generalPopulationsSlice.reducer