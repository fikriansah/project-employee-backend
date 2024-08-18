// import User from "../models/UserModel.js";
// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken";
// import Profiles from "../models/ProfileModel.js";
import db_data from "../models/index.js";

// const Users = db_data.models.User;
const Profiles = db_data.models.Profile;


export const getProfileByUserId = async (req, res) => {
    try {
        const users = await Profiles.findAll({
            where: {
                userId: req.params.id
            },
        });
        // res.json(users);
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const EntryData = async (req, res) => {
    const { name, position, address, noKtp, birthPlace, birthday, gender, phoneNumber, cityOut, salary } = req.body;
    try {
        const result = await Profiles.create({
            userId: req.params.id,
            name: name,
            position: position,
            address: address,
            noKtp: noKtp,
            birthPlace: birthPlace,
            birthday: birthday,
            gender: gender,
            phoneNumber: phoneNumber,
            cityOut: cityOut,
            salary: salary
        });
        res.json({ result, msg: "Entry Data Berhasil!" })
    } catch (error) {
        console.log(error)
    }
}

export const UpdateEntryData = async (req, res) => {
    const { name, position, address, noKtp, birthPlace, birthday, gender, phoneNumber, cityOut, salary } = req.body;
    try {
        const result = await Profiles.update({
            name: name,
            position: position,
            address: address,
            noKtp: noKtp,
            birthPlace: birthPlace,
            birthday: birthday,
            gender: gender,
            phoneNumber: phoneNumber,
            cityOut: cityOut,
            salary: salary
        }, {
            where: {
                userId: req.params.id
            }
        }
        );
        res.json({ result, msg: "Update Entry Data Berhasil!" })
    } catch (error) {
        console.log(error)
    }
}