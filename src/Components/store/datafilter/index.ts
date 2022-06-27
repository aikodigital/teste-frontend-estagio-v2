import { createSlice } from "@reduxjs/toolkit";
import { TypeFilter } from "../../@types";



const initialState = {
    filter: {} as TypeFilter
}

const filterSlice = createSlice({
    name: '@filter',
    initialState,
    reducers:{
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer