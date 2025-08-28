import express from "express";
import {
  createInquiry,
  getInquiries,
  getInquiryById,
  updateInquiry,
  deleteInquiry,
} from "../controller/inquiry.controller.js";

const router = express.Router();

// Routes
router.post("/", createInquiry);       
router.get("/", getInquiries);         
router.get("/:id", getInquiryById);     
router.put("/:id", updateInquiry);      
router.delete("/:id", deleteInquiry);   

export default router;
