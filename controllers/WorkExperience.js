import db_data from "../models/index.js";

const WorkExperiences = db_data.models.WorkExperience;

export const AddWorkExperience = async (req, res) => {
    const { company, position, salary, yearIn, yearOut } = req.body;
    try {
        await WorkExperiences.create({
            profileId: req.params.id,
            company: company,
            position: position,
            salary: salary,
            yearIn: yearIn,
            yearOut: yearOut
        });
        res.json({ msg: "Tambah Pengalaman Bekerja Berhasil!" })
    } catch (error) {
        console.log(error)
    }
}

export const getWorkExperienceByProfileId = async (req, res) => {
    try {
        const result = await WorkExperiences.findAll({
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

export const deleteWorkById = async (req, res) => {
    try {
        await WorkExperiences.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Pengalaman Kerja Berhasil Dihapus" })
    } catch (error) {
        console.log(error.message)
    }
}