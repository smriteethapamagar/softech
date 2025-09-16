import Courses from "../model/course.model.js";
import { v2 as cloudinary } from "cloudinary";

// Create course
export const createCourse = async (req, res) => {
  try {
    const {
      courseName,
      timetable,
      classDays,
      skillLevel,
      languageOrProgram,
      description,
      whatWillILearn,
      lessons,
      image,
    } = req.body;

    let imageUrl = null;

    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image, {
        folder: "courses",
      });
      imageUrl = uploadedResponse.secure_url;
    }

    const newCourse = new Courses({
      courseName,
      timetable,
      classDays,
      skillLevel,
      languageOrProgram,
      description,
      whatWillILearn,
      lessons,
      image: imageUrl,
    });

    await newCourse.save();
    res.status(201).json({ message: "Course created successfully", newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in course creation", error: error.message });
  }
};

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Courses.find().sort({ createdAt: -1 });
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in fetching courses" });
  }
};

// Get course by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in fetching course" });
  }
};

// Update course
export const updateCourse = async (req, res) => {
  try {
    const {
      courseName,
      timetable,
      classDays,
      skillLevel,
      languageOrProgram,
      description,
      whatWillILearn,
      lessons,
      image,
    } = req.body;

    let updateData = {
      courseName,
      timetable,
      classDays,
      skillLevel,
      languageOrProgram,
      description,
      whatWillILearn,
      lessons,
    };

    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image, {
        folder: "courses",
      });
      updateData.image = uploadedResponse.secure_url;
    }

    const updatedCourse = await Courses.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course updated successfully", updatedCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in updating course", error: error.message });
  }
};

// Delete course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (course.image) {
      const imageId = course.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`courses/${imageId}`);
    }

    await Courses.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in deleting course", error: error.message });
  }
};
