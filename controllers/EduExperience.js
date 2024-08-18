import db_data from "../models/index.js";

const EducationExperiences = db_data.models.EducationExperience;

export const AddEduExperience = async (req, res) => {
    const { eduLevel, name, major, graduationYear, ipk } = req.body;
    try {
        await EducationExperiences.create({
            profileId: req.params.id,
            eduLevel: eduLevel,
            name: name,
            major: major,
            graduationYear: graduationYear,
            ipk: ipk
        });
        res.json({ msg: "Tambah Riwayat Pendidikan Berhasil!" })
    } catch (error) {
        console.log(error)
    }
}

export const getEduExperienceByProfileId = async (req, res) => {
    try {
        const result = await EducationExperiences.findAll({
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

export const deleteEduById = async (req, res) => {
    try {
        await EducationExperiences.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Riwayat Pendidikan Berhasil Dihapus" })
    } catch (error) {
        console.log(error.message)
    }
}