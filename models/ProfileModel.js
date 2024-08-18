import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;
const Profile = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.TEXT
    },
    noKtp: {
        type: DataTypes.STRING
    },
    birthPlace: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.DATE
    },
    gender: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    cityOut: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}

export default Profile;