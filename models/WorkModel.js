import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;
const WorkExperience = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    profileId: {
        type: DataTypes.INTEGER
    },
    company: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.STRING
    },
    yearIn: {
        type: DataTypes.STRING
    },
    yearOut: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}

export default WorkExperience;