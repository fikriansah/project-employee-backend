import express from "express";
import { getUsers, Register, Login, Logout, RegisterAdmin, getUserById, deleteUser } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { EntryData, UpdateEntryData, getProfileByUserId } from "../controllers/Profiles.js";
import { AddWorkExperience, deleteWorkById, getWorkExperienceByProfileId } from "../controllers/WorkExperience.js";
import { AddEduExperience, deleteEduById, getEduExperienceByProfileId } from "../controllers/EduExperience.js";
import { AddCourseExperience, deleteCourseById, getCourseExperienceByProfileId } from "../controllers/CourseExperience.js";

const router = express.Router();
//USER
router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.get("/users/profile/:id", getProfileByUserId);
router.delete("/users/:id", deleteUser);

//ENTRY DATA
//PROFILE
router.post("/entry-data/:id", EntryData);
router.patch("/entry-data/:id", UpdateEntryData)
//WORK
router.post("/entry-data/work/:id", AddWorkExperience);
router.get("/profile/work/:id", getWorkExperienceByProfileId);
router.delete("/profile/work/:id", deleteWorkById);
//EDUCATION
router.post("/entry-data/education/:id", AddEduExperience);
router.get("/profile/education/:id", getEduExperienceByProfileId);
router.delete("/profile/education/:id", deleteEduById);
//COURSE
router.post("/entry-data/course/:id", AddCourseExperience);
router.get("/profile/course/:id", getCourseExperienceByProfileId);
router.delete("/profile/course/:id", deleteCourseById);

//REGISTER
router.post('/register', Register);
router.post('/register/admin', RegisterAdmin);

//LOGIN-LOGOUT
router.post("/login", Login);
router.delete("/logout", Logout);

//TOKEN
router.get("/token", refreshToken);

export default router;