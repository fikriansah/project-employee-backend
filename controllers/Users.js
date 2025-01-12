// import User from "../models/UserModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
// import Profiles from "../models/ProfileModel.js";
import db_data from "../models/index.js";
import { Op } from "sequelize";

const Users = db_data.models.User;
const Profiles = db_data.models.Profile;
const WorkExperiences = db_data.models.WorkExperience;
const EducationExperiences = db_data.models.EducationExperience;
const CourseExperiences = db_data.models.CourseExperience;

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            where: {
                role: 'user'
            },
            attributes: [
                'id',
                'email',
                'role'
            ],
            include: [
                {
                    model: Profiles,
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                    }
                }
            ]
        });
        res.json(users);
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (req, res) => {
    try {
        const users = await Users.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Profiles,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: [
                        {
                            model: WorkExperiences,
                            attributes: {
                                exclude: ['id', 'createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: EducationExperiences,
                            attributes: {
                                exclude: ['id', 'createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: CourseExperiences,
                            attributes: {
                                exclude: ['id', 'createdAt', 'updatedAt']
                            },
                        }
                    ]
                }
            ]
        });
        res.json(users);
    } catch (error) {
        console.log(error)
    }
}

export const Register = async (req, res) => {
    const { email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password Tidak Sama" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            email: email,
            password: hashPassword,
            role: 'user'
        });
        res.json({ msg: "Register Berhasil!" })
    } catch (error) {
        console.log(error)
    }
}

export const RegisterAdmin = async (req, res) => {
    const { email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password Tidak Sama" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            email: email,
            password: hashPassword,
            role: 'admin'
        });
        res.json({ msg: "Register Berhasil!" })
    } catch (error) {
        console.log(error)
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Password salah" });
        const userId = user[0].id;
        const email = user[0].email;
        const role = user[0].role;
        const accessToken = jwt.sign({ userId: user, email, role }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '50s',
        });
        const refreshToken = jwt.sign({ userId, email, role }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d',
        });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({ accessToken, role })
    } catch (error) {
        res.status(404).json({ msg: "Email tidak terdaftar" });
    }
}

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

export const deleteUser = async (req, res) => {
    try {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "User Berhasil Dihapus" })
    } catch (error) {
        console.log(error.message)
    }
}
