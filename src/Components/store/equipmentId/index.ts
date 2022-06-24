import { createSlice } from "@reduxjs/toolkit";
import { TypeFilter } from "../../@types";



const initialState = {
    id: "491b983b-950c-4a88-942d-487e99b92540"
}

const IdSlice = createSlice({
    name: '@Id',
    initialState,
    reducers:{
        setId: (state, action) => {
            state.id = action.payload
        }
    }
})

export const { setId } = IdSlice.actions
export default IdSlice.reducer