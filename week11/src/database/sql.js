import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'WEEK11_INHA_DB',
    password: '111111',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
  getUsers: async () => {
    const [rows] = await promisePool.query(`select * from student`);
    return rows;
  },
  getClass: async () => {
    const sql = `select c.ID as ID, c.Name as Name, c.Professor as Professor, d.Dname as Opening_departments,
    c.Number_of_participant as Number_of_participant,
    (Number_of_participant - (select count(cs.Class_Id) from class_student cs where cs.Class_Id = c.ID)) as Remaining_participants
    from class as c join department as d on c.Did = d.id`;
    const [result] = await promisePool.query(sql);
    return result;
  },
  getMyClass: async (StudentId) => {
    const sql = `select c.ID as ID, c.Name as Course, c.Professor as Professor, d.Dname as Opening_departments,
    c.Number_of_participant as Number_of_participant
    from class as c join department as d on d.Id = c.Did where c.ID
    in (select cs.Class_Id from class_student cs where cs.Student_Id = (select ID from Student where StudentId = ?))`;
    const [result] = await promisePool.query(sql, [StudentId]);
    return result;
  },
  getZero: async (cId) => {
    const sql = `select (c.Number_of_participant - (SELECT COUNT(cs.Class_Id) from class_student cs
    where cs.Class_Id = c.ID)) as Remaining_participants from class as c where c.ID = ?`;
    const [result] = await promisePool.query(sql, [cId]);
    return result;
  },
  getValidation: async (StudentId, ClassId) => {
    const sql = `select Class_Id from class_student cs join student s on cs.Student_Id = s.ID where s.StudentId = ?
    and cs.Class_Id = ?`;
    const [result] = await promisePool.query(sql, [StudentId, ClassId]);
    return result;
},
}


export const createSql = {
  addClass: async (data) => {
    const uid = await promisePool.query(`select Id from Student where StudentId=${data.sId}`);
    console.log(uid);
    const results = await promisePool.query (
      `insert into class_student values (${uid[0][0].Id}, ${data.cId});`
    )
    return results[0];
  }
}