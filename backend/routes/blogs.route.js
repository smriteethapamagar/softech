import express from "express";
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from "../controller/blogs.controller.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
