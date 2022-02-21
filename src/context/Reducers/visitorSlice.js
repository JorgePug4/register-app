import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "Visitor",
  initialState: {
    image: null,
  },
  reducers: {
    setImage: (state, newImage) => {
      state.image = newImage.payload;
    },
  },
});

export const { setImage } = slice.actions;

export const incrementAsync = (newImage) => (dispatch) => {
  setTimeout(() => {
    dispatch(setImage(newImage));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectImage = (state) => state.image.value;

export default slice.reducer;
