import { createSlice } from "@reduxjs/toolkit";

const initialStudentSlice = {
  studentList: [],
  oneStudent: {},
  isLoading: false,
  isError: false,
};
const studentSlice = createSlice({
  name: "student",
  initialState: initialStudentSlice,
  reducers: {
    getStudents: (state, action) => {
      state.studentList = action.payload;
    },
    getOneStudent: (state, action) => {
      state.oneStudent = action.payload;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleIsError: (state, action) => {
      state.isError = action.payload;
    },
    deleteStudent: (state, action) => {
      state.studentList = state.studentList.filter(
        (student) => student.id !== action.payload
      );
    },

    addStudent: (state, action) => {
      state.studentList.push(action.payload);
    },

    editStudent: (state, action) => {
      state.oneStudent = action.payload;
    },
  },
});

export const studentActions = studentSlice.actions;
export default studentSlice;
