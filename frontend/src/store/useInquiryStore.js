import { create } from "zustand";
import { axiosInstance } from "../libs/axios";

export const useInquiryStore = create((set) => ({
  inquiries: [],
  inquiry: null,
  loading: false,
  error: null,

  createInquiry: async (inquiryData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post("/inquiries", inquiryData);
      set((state) => ({
        inquiries: [res.data.data, ...state.inquiries],
        loading: false,
      }));
      return res.data;
    } catch (error) {
      set({ error: error.response?.data?.message || "Error creating inquiry", loading: false });
      throw error;
    }
  },

  getInquiries: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get("/inquiries");
      set({ inquiries: res.data.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || "Error fetching inquiries", loading: false });
    }
  },

  getInquiryById: async (id) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get(`/inquiries/${id}`);
      set({ inquiry: res.data.data, loading: false });
      return res.data.data;
    } catch (error) {
      set({ error: error.response?.data?.message || "Error fetching inquiry", loading: false });
    }
  },
}));
