import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const database = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Database connection error:", err.message);
    });
};
