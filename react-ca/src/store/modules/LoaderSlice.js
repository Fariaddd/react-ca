import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false
    },
    reducers: {
        SET_LOADER: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export default LoaderSlice.reducer;

const {SET_LOADER } = LoaderSlice.actions;

export const setLoadingState = (loadingState) => async (dispatch) => {
    dispatch(SET_LOADER(loadingState))
}