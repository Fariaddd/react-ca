import { createSlice } from "@reduxjs/toolkit";

const createListing = createSlice({
    name: "listings",
    initialState : {
        products: [],
        total: 0
    
    },
    reducers: {
        PRODUCTS_SET:(state, action) => {
            state.products = action.payload
        }
    }
    
})

export default createListing.reducer;

const {PRODUCTS_SET} = createListing.actions
export const fetchAllProducts = () => async (dispatch) => {
    try{
        const response = await fetch("https://api.noroff.dev/api/v1/online-shop/");
        const data = await response.json();
        console.log(data);
        dispatch(PRODUCTS_SET(data));
    } catch(e){
        return console.error(e)
    }

} 
