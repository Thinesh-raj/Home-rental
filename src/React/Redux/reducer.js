import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0,
        value:""
    },
    reducers: {
        incre: (state) => { state.count += 1 },
        decre: (state) => { state.count -= 1 },
        sam: (state, action) => { state.value += action.payload.target.value}
    }
})

export const { incre, decre, sam } = counterSlice.actions
export const selectcount = (state) => state.Counter.count
export const selecttype=(state)=>state.Counter.value
export default counterSlice.reducer