import db_data from "../models/index.js";

const CourseExperiences = db_data.models.CourseExperience;

export const AddCourseExperience = async (req, res) => {
    const { name, isCertificate, year } = req.body;
    try {
        await CourseExperiences.create({
            profileId: req.params.id,
            name: name,
            isCertificate: isCertificate,
            year: year
        });
        res.json({ msg: "Tambah Pelatihan Berhasil!" })
    } catch (error) {
        console.log(error)
    }
}

export const getCourseExperienceByProfileId = async (req, res) => {
    try {
        const result = await CourseExperiences.findAll({
            where: {
                profileId: req.params.id
            },
        });
        res.json(result);
        // return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const deleteCourseById = async (req, res) => {
    try {
        await CourseExperiences.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Pelatihan Berhasil Dihapus" })
    } catch (error) {
        console.log(error.message)
    }
}