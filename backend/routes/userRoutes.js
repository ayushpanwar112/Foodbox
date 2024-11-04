import { loginUser, registerUser } from "../controller/userController.js";
import express from "express";
import multer from "multer";

const userRoutes = express.Router();
const upload = multer(); // Initialize multer to handle form-data

// Route for user registration with form-data
//userRoutes.post("/register", upload.none(), registerUser); nice thing u want sent req in form of form-data way
//register user
userRoutes.post("/register", registerUser);
// Route for user login
userRoutes.post("/login", loginUser);

// Log initialization for debugging
console.log("User routes initialized");

export default userRoutes;
