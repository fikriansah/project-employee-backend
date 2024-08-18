import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;
const EducationExperience = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    profileId: {
        type: DataTypes.INTEGER
    },
    eduLevel: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    major: {
        type: DataTypes.STRING
    },
    graduationYear: {
        type: DataTypes.STRING
    },
    ipk: {
        type: DataTypes.DECIMAL(10,2)
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}

export default EducationExperience;