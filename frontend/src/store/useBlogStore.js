import { create } from "zustand";
import { axiosInstance } from "../libs/axios"

export const useBlogStore = create((set, get) => ({
  blogs: [],
  blog: null,
  loading: false,
  error: null,

  createBlog: async (blogData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post("/blogs", blogData);
      set((state) => ({
        blogs: [res.data.newBlog, ...state.blogs],
        loading: false,
      }));
      return res.data.newBlog;
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to create blog", loading: false });
    }
  },

  fetchBlogs: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get("/blogs");
      set({ blogs: res.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to fetch blogs", loading: false });
    }
  },

  fetchBlogById: async (id) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get(`/blogs/${id}`);
      set({ blog: res.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to fetch blog", loading: false });
    }
  },

  updateBlog: async (id, blogData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.put(`/blogs/${id}`, blogData);
      set((state) => ({
        blogs: state.blogs.map((b) => (b._id === id ? res.data.updatedBlog : b)),
        blog: res.data.updatedBlog,
        loading: false,
      }));
      return res.data.updatedBlog;
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to update blog", loading: false });
    }
  },

  deleteBlog: async (id) => {
    try {
      set({ loading: true, error: null });
      await axiosInstance.delete(`/blogs/${id}`);
      set((state) => ({
        blogs: state.blogs.filter((b) => b._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.response?.data?.message || "Failed to delete blog", loading: false });
    }
  },
}));

