import { create } from "zustand";
import { axiosInstance } from "../utils/axios"; // adjust path if needed

export const useContactStore = create((set) => ({
  contacts: [],
  contact: null,
  loading: false,
  error: null,

  createContact: async (contactData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post("/contacts", contactData);
      set((state) => ({
        contacts: [res.data.data, ...state.contacts],
        loading: false,
      }));
      return res.data.data;
    } catch (error) {
      set({ error: error.response?.data?.message || "Error submitting contact", loading: false });
      throw error;
    }
  },

  getContacts: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get("/contacts");
      set({ contacts: res.data.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || "Error fetching contacts", loading: false });
    }
  },

  getContactById: async (id) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get(`/contacts/${id}`);
      set({ contact: res.data.data, loading: false });
      return res.data.data;
    } catch (error) {
      set({ error: error.response?.data?.message || "Error fetching contact", loading: false });
    }
  },
}));
