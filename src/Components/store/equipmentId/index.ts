import { createSlice } from "@reduxjs/toolkit";
import equipmentPositionHistory from '../../assets/data/equipmentPositionHistory.json'

let initialId = equipmentPositionHistory[0].equipmentId

const initialState = {
    id: initialId
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