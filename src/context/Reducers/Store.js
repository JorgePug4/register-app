import { configureStore } from "@reduxjs/toolkit";
import visitorReducer from "../Reducers/visitorSlice";

export default configureStore({
  reducer: {
    visitor: visitorReducer,
  },
});
