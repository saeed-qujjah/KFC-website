import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./active-ui"
import mealsReducer from "./meals"

const store = configureStore({
  reducer: { active: activeReducer , meals: mealsReducer }
});

export default store;
