import { create } from "zustand";
import { axiosInstance } from "../libs/axios";


const useCourseStore = create((set, get) => ({
  courses: [],
  course: null,
  loading: false,
  error: null,

  createCourse: async (courseData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post("/courses", courseData);
      set((state) => ({
        courses: [res.data.newCourse, ...state.courses],
        loading: false,
      }));
      return res.data.newCourse;
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to create course", loading: false });
    }
  },

  fetchCourses: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get("/courses");
      set({ courses: res.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to fetch courses", loading: false });
    }
  },

  fetchCourseById: async (id) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get(`/courses/${id}`);
      set({ course: res.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to fetch course", loading: false });
    }
  },

  updateCourse: async (id, courseData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.put(`/courses/${id}`, courseData);
      set((state) => ({
        courses: state.courses.map((c) => (c._id === id ? res.data.updatedCourse : c)),
        course: res.data.updatedCourse,
        loading: false,
      }));
      return res.data.updatedCourse;
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to update course", loading: false });
    }
  },

  deleteCourse: async (id) => {
    try {
      set({ loading: true, error: null });
      await axiosInstance.delete(`/courses/${id}`);
      set((state) => ({
        courses: state.courses.filter((c) => c._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to delete course", loading: false });
    }
  },
}));

export default useCourseStore;
