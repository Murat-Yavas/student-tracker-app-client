import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./student-slice";

export const store = configureStore({
  reducer: { student: studentSlice.reducer },
});
