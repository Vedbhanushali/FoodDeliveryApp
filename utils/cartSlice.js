import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: []
    },
    reducers: {
        //action is the place I will receive items to be stored in store
        addItem: (state, action) => {
            //state is above initial state of item so we will be pushing data into our state
            // state will be previous state, initially it will be initial state and later will hold current value of state
            state.items.push(action.payload)
        }
    }

})