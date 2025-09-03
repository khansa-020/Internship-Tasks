import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { 
    value: 0,
    history: []   // store session logs
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      const now = new Date();

      // Only log if counter was > 0 (a session actually happened)
      if (state.value > 0) {
        const startTime = state.startTime || now;
        const endTime = now;

        // duration in seconds
        const duration = Math.floor((endTime - startTime) / 1000);

        state.history.push({
          start: startTime.toLocaleString(),
          end: endTime.toLocaleString(),
          duration: `${duration} sec`
        });
      }

      // reset state
      state.value = 0;
      state.startTime = null;
    },
    startSession: (state) => {
      state.startTime = new Date(); // record session start
    }
  }
});

export const { increment, decrement, reset, startSession } = counterSlice.actions;
export default counterSlice.reducer;
