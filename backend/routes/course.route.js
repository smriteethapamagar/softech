import express from "express";
import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from "../controller/course.controller.js";


const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourses);
router.get("/:id", getCourseById);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
