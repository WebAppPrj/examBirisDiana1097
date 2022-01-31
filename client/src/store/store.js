import { configureStore } from "@reduxjs/toolkit";

//import quotesReducer from "./quotes-slice";
import referencesReducer from "./references-slice";

const store = configureStore({
  reducer: {
    references: referencesReducer,
  },
});

export default store;
