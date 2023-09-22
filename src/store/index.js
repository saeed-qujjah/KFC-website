import { configureStore } from "@reduxjs/toolkit";
import loadReducer from "./load";

const store = configureStore({
  reducer: { load: loadReducer }
});

export default store;
