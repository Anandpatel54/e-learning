import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", getUserProfile);

export default router;
