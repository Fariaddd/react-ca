import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import createListing from "./modules/listings"
import LoaderSlice from "./modules/LoaderSlice"

const reducer = combineReducers({
    products: createListing,
    loader: LoaderSlice
})

const store = configureStore({
    reducer,
})
export default store;