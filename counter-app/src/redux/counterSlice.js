import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    history: [],
    startTime: null, // will store Date object internally
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      const now = new Date();

      if (state.startTime !== null) {
        const endTime = now;
        const duration = Math.floor((endTime - state.startTime) / 1000);

        // store strings to avoid React errors
        state.history.push({
          start: state.startTime.toLocaleString(),
          end: endTime.toLocaleString(),
          duration: `${duration} sec`,
        });
      }

      // reset
      state.value = 0;
      state.startTime = null;
    },
    startSession: (state) => {
      if (state.startTime === null) {
        state.startTime = new Date();
      }
    },
  },
});

export const { increment, decrement, reset, startSession } = counterSlice.actions;
export default counterSlice.reducer;
