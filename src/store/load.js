import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  exploreLoading: true,
  dealsLoading: false,
  isLoading: true,
};

const loadSlice = createSlice({
  name: "load",
  initialState: initialState,
  reducers: {
    changeExploreLState(state, action) {
      state.exploreLoading = action.payload;
      if(!action.payload && !state.dealsLoading) state.isLoading = false
      else state.isLoading = true
    },
    changeDealsLState(state, action) {
      state.dealsLoading = action.payload;
      if(!action.payload && !state.dealsLoading) state.isLoading = false
      else state.isLoading = true
    },
  }
});

export default loadSlice.reducer;
export const loadAction = loadSlice.actions;
