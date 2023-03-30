import { createSlice } from "@reduxjs/toolkit"
import Products from "../../components/views/Products";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        productsInCart: [],
        numberOfProductsInCart: 0
    },
    reducers:{
        ADD_PRODUCT_TO_CART:(state, action) => {
            const isProductInCart = state.productsInCart && state.productsInCart.some(Product => Product.id === action.payload.id);

            if(isProductInCart){

            }else {
                state.productsInCart = [...state.productsInCart, action.payload];
                state.numberOfProductsInCart = state.productsInCart.length;
            } 
        },
        REMOVE_PRODUCT_FROM_CART: (state,action) => {
            state.productsInCart = state.productsInCart.filter(Product => Product.id !== action.payload)
            state.numberOfProductsInCart = state.productsInCart.length
        }
    }
})
export default cartSlice.reducer;
const {ADD_PRODUCT_TO_CART} = cartSlice.actions;
const {REMOVE_PRODUCT_FROM_CART} = cartSlice.actions


export const addSingleProductToCart = (productData) => (dispatch) => {
    dispatch(ADD_PRODUCT_TO_CART(productData))
}

export const removeSingleProductFromCart = (productId) => (dispatch) => {
    dispatch(REMOVE_PRODUCT_FROM_CART(productId));
} 