import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incereaseCount: (state, action) => {
      state.count += 1;
    },
    decereaseCount: (state, action) => {
      state.count -= 1;
    },
  },
});
const { reducer, actions } = counterSlice;

export const { incereaseCount, decereaseCount } = actions;

export default reducer;
