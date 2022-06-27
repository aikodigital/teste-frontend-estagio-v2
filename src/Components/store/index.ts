import { configureStore } from "@reduxjs/toolkit";
import filterSlice from './datafilter'
import IdSlice from './equipmentId'

export const store = configureStore({
    reducer: {
        filterSlice,
        IdSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch