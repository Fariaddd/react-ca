import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import listings from "./modules/listings"

const reducer = combineReducers({
    listings
})

const store = configureStore({
    reducer,
})
export default store;