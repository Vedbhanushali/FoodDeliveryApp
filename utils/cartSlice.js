import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["apple", "banana"]
    },
    reducers: {
        //action is the place I will receive items to be stored in store
        addItem: (state, action) => {
            //state is above initial state of item so we will be pushing data into our state
            // state will be previous state, initially it will be initial state and later will hold current value of state
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer //will combine all reducers in one reducer

