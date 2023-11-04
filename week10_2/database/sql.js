import mysql from 'mysql2';

require("dotenv").config();

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '111111',
    database: 'week6',
});

const promisePool = pool.promise();

export const selectSql = {
    getStudent: async () => {
        const sql = `select * from student`;
        const [result] = await promisePool.query(sql);
        return result;
    },
    getClass: async () => {
        const sql = `select * from class`;
        const [result] = await promisePool.query(sql);
        return result;
    },
}

export const deleteSql = {
    deleteClass: async (data) => {
        console.log('delete class class_id =', data);
        const sql = `delete from class where class_id=${data.class_id}`
        console.log(sql);
        await promisePool.query(sql);
    },
};