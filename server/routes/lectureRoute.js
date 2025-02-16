import express from "express";
import {
  createLecture,
  getCouresLecture,
} from "../controllers/lectureController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.route("/:courseId/lecture").post(isAuthenticated, createLecture);
router.route("/:courseId/lecture").get(isAuthenticated, getCouresLecture);

export default router;
