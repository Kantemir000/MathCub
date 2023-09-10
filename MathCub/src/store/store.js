import { configureStore } from '@reduxjs/toolkit'
import randomInputSlice from './slices/randomInputSlice'

export default configureStore({
    reducer: { randomInputSlice }
})