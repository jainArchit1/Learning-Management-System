import mongoose from "mongoose";
import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if ((!name, !email, !password)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(201).json({
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    generateToken(res, user, `Welcome Back ${user.name}`);
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
