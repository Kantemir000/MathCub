import { configureStore } from '@reduxjs/toolkit'
import randomInputSlice from './slices/randomInputSlice'
import generalPopulationsSlice from './slices/generalPopulationSlice'

export default configureStore({
    reducer: { randomInputSlice, generalPopulationsSlice }
})