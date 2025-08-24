import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },

    college: {
      type: String,
      required: true,
      trim: true,
    },
    academicStatus: {
      type: String,
      required: true,
      enum: [
        "High School",
        "Undergraduate",
        "Graduate",
        "Post Graduate",
        "Other",
      ],
    },

    interestedCourse: {
      type: String,
      required: true,
         enum: [
        "MERN Stack",
        "PHP/Laravel",
        "Flutter",
        "Web Development",
        "Javascript",
             ], 
    },
    preferredMode: {
      type: String,
      required: true,
      enum: ["Online", "Offline", "Hybrid"],
    },
    preferredSchedule: {
      type: String,
      required: true,
      enum: [
        "Morning (6-9)",
        "Day (10-1)",
        "Afternoon (2-5)",
        "Evening (6-9)",
      ],
    },


    comments: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
