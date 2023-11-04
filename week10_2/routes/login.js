import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const students = await selectSql.getStudent();

    students.map((student) => {
        if (vars.id == student.student_id && vars.Password == student.Phone_number) {
            console.log('login success!');
            req.session.student = { id: student.student_id, checkLogin: true };
        }
    });

    if (req.session.student == undefined) {
        console.log('login failed!');
        res.send(`<script>
                    alert('login failed!');
                    location.href='/';
                </script>`)
    } else {
        res.redirect('/select');
    }
});

module.exports = router;