import { configureStore } from "@reduxjs/toolkit"

import cartSlice from "./cartSlice" //this is reducer of cartslices

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store