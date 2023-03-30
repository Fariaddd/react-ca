import { createSlice } from "@reduxjs/toolkit";
import { setLoadingState } from "./LoaderSlice";

const createListing = createSlice({
    name: "products",
    initialState : {
        products: [],
        singleProduct: null,
        total: 0
    
    },
    reducers: {
        PRODUCTS_SET:(state, action) => {
            state.products = action.payload
        },
        SINGLE_SET_PRODUCT:(state, action) => {
            state.singleProduct = action.payload
        }
    }
})

export default createListing.reducer;

const {PRODUCTS_SET} = createListing.actions
const {SINGLE_SET_PRODUCT} = createListing.actions
export const fetchAllProducts = () => async (dispatch) => {
    dispatch(setLoadingState(true))
    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/`);
        const data = await response.json();
        dispatch(PRODUCTS_SET(data));
        dispatch(setLoadingState(false))
    } catch(e){
        return console.error(e)
    }
} 

export const FetchSingleProduct = (id) => async (dispatch) => {
    dispatch(setLoadingState(true))
    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        const SingleData = await response.json();
        dispatch(SINGLE_SET_PRODUCT(SingleData));
        dispatch(setLoadingState(false))
    } catch(e){
        return console.error(e)
    }
}