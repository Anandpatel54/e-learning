import { Course } from "../models/courseModel.js";
import { deleteMediaFromCloudinary } from "../utils/cloudinary.js";


export const createCourse = async (req, res) => {
  try {
    const { courseTitle, category } = req.body;
    if (!courseTitle || !category) {
      return res.status(400).json({
        message: "Course title and Category are required.",
        success: false,
      });
    }
    const course = await Course.create({
      courseTitle,
      category,
      creator: req.id,
    });
    return res.status(201).json({
      course,
      message: "Course Created",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create course",
      success: "false",
    });
  }
};

export const getCreatorCourse = async (req, res) => {
  try {
    const userId = req.id;
    const courses = await Course.find({ creator: userId });
    if (!courses) {
      return res.status(404).json({
        courses: [],
        message: "Course not found.",
        success: false,
      });
    }
    return res.status(200).json({
      courses,
      message: "Courses Found",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get course",
      success: "false",
    });
  }
};

export const editCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
    } = req.body;
    const thumbnail = req.file;

    let course = await Course.findById();

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
        success: false,
      });
    }

    let courseThumbnail;
    if (thumbnail) {
      if (course.courseThumbnail) {
        const publicId = course.courseThumbnail.split("/").pop().split(".")[0]
        await deleteMediaFromCloudinary
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get course",
      success: "false",
    });
  }
};
