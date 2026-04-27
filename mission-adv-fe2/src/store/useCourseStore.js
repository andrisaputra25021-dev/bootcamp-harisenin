import { create } from "zustand";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../services/api/cardsAPI";

const useCourseStore = create((set) => ({
  // state
  courses: [],
  loading: false,
  error: null,

  //   ambil semua courses
  fetchCourses: async () => {
    set({ loading: true });
    try {
      const data = await getCourses();
      set({ courses: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  //   tambah couse
  createCourse: async (newCourse) => {
    try {
      const data = await addCourse(newCourse);
      set((state) => ({ courses: [...state, data] }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  //   update course
  editCourse: async (id, updatedCourse) => {
    try {
      const data = await updateCourse(id, updatedCourse);
      set((state) => ({
        courses: state.courses.map((course) =>
          String(course.id) === String(id) ? data : course,
        ),
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  //   delete couse
  removeCourse: async (id) => {
    try {
      await deleteCourse(id);
      set((state) => ({
        courses: state.courses.filter(
          (course) => String(course.id) !== String(id),
        ),
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useCourseStore;
