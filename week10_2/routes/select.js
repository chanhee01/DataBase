import express from 'express';
import { selectSql } from '../database/sql';

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.session.student === undefined) {
        res.redirect('/');
    } else {
        const student = await selectSql.getStudent();
        res.render('select', {
            title: "student",
            student,
        });
    }
});

module.exports = router;