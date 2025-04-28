import mongoose from "mongoose";
const CourseModel = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  courseImage: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Course", CourseModel);
