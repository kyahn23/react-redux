import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    inc(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    dec(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
