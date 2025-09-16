import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subTitle: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    titleImage: {
      type: String,
    },
    secondImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogSchema);

export default Blogs;
