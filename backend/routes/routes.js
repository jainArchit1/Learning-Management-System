import express from "express";
const router = express.Router();
import { Signup, Login } from "../controllers/user.controller.js";
router.post("/signup", Signup);
router.post("/login", Login);
export default router;
