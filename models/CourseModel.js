import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;
const CourseExperience = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    profileId: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    isCertificate: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}

export default CourseExperience;