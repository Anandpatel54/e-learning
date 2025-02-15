import express from "express";
import { createLecture } from "../controllers/lectureController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.route("").post(isAuthenticated, createLecture);

export default router;
