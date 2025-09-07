import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    timetable: {
      type: String,
      required: true,
      trim: true,
    },
    classDays: {
      type: [String],
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    skillLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    languageOrProgram: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    whatWillILearn: {
      type: String, 
    },
    lessons: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Courses = mongoose.model("Course", coursesSchema);

export default Courses;
