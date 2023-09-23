import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dealsData: [],
    exploreData: [],
    exploreLoading: true,
    dealsLoading:true,
    isLoading:true
};

const mealsSlice = createSlice({
    name: "meals",
    initialState: initialState,
    reducers: {
        replaceDealsData(state, action) {
            state.dealsData = action.payload;
            state.dealsLoading = false
            if(state.exploreLoading === false) state.isLoading = false
        },
        replaceExploreData(state, action) {
            state.exploreData = action.payload;
            state.exploreLoading = false;
            if(state.dealsLoading === false) state.isLoading = false
        },
    }
});

export default mealsSlice.reducer;
export const mealsAction = mealsSlice.actions;
