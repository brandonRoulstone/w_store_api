import { config } from "dotenv";
config();
import mysql from "mysql2";


const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    database: process.env.MYSQL_ADDON_DB,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    multipleStatements: false,
    connectionLimit: 50
}).promise()

export { pool };