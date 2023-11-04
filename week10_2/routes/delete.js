import express from 'express';
import { selectSql, deleteSql } from '../database/sql';

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.session.student === undefined) {
        res.redirect('/');
    } else {
        const classes = await selectSql.getClass();
        res.render('delete', {
            title: "Delete",
            classes,
        });
    }
});

router.post('/', async (req, res) => {
    console.log("delete :", req.body.delBtn);
    const data = {
        class_id: req.body.delBtn,
    };

    await deleteSql.deleteClass(data);

    res.redirect('/delete/class');
});

module.exports = router;