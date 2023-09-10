import { createSlice } from "@reduxjs/toolkit";

export const randomInputSlice = createSlice({
    name: "randomInput",
    initialState: {
        inputs: [null, null, null]
    },
    reducers: {
        changeInput: (state, action) => {
            const { id, value = null } = action.payload;
            state.inputs[id] = value;
        },
        addInput: (state) => {
            state.inputs.push(null)
        }
    }
})

export const { changeInput, addInput } = randomInputSlice.actions

export default randomInputSlice.reducer