import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    course: [],
    loading: false,
    error: null,
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.courses.findIndex(
        (c) => String(c.id) === String(action.payload.id),
      );
      if (index !== -1) state.courses[index] = action.payload;
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (c) => String(c.id) !== String(action.payload),
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setCourses, addCourse, updateCourse, deleteCourse } =
  courseSlice.actions;

export default courseSlice.reducer;
