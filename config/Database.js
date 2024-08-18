import { Sequelize } from "sequelize";

const db = new Sequelize('calon_karyawan', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;