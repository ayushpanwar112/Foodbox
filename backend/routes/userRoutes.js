import { loginUser, registerUser } from "../controller/userController.js";
import express from "express";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

console.log("User routes initialized");

export default userRoutes;
