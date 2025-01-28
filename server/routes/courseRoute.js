import express from "express";
import { createCourse } from "../controllers/courseController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/courseCreate").post(isAuthenticated, createCourse);

export default router;
