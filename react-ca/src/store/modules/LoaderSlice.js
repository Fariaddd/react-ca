import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false
    }
})

export default LoaderSlice.reducer;