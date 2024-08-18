import db from "../config/Database.js";
import User from "./UserModel.js";
import Profile from "./ProfileModel.js";
import WorkExperience from "./WorkModel.js";
import EducationExperience from "./EducationModel.js";
import CourseExperience from "./CourseModel.js";

const users = db.define("User", User, { tableName: "users" });
const profiles = db.define("Profile", Profile, { tableName: "profiles" });
const workExperiences = db.define("WorkExperience", WorkExperience, { tableName: "workexperiences" });
const educationExperiences = db.define("EducationExperience", EducationExperience, { tableName: "educationexperiences" });
const courseExperiences = db.define("CourseExperience", CourseExperience, { tableName: "courseexperiences" });

users.hasOne(profiles)
profiles.belongsTo(users)
profiles.hasMany(workExperiences)
workExperiences.belongsTo(profiles)
profiles.hasMany(educationExperiences, {foreignKey: 'profileId'})
educationExperiences.belongsTo(profiles, { foreignKey: 'profileId' })
profiles.hasMany(courseExperiences, { foreignKey: 'profileId' })
courseExperiences.belongsTo(profiles, { foreignKey: 'profileId' })

export default db;
