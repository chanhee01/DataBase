import express from "express";
import { selectSql } from '../database/sql';
import { createSql } from '../database/sql';

const router = express.Router();

router.get('/', async function (req, res) {
    
    if (req.cookies.user) {
        const StudentId = req.cookies.user;
        const allClass = await selectSql.getClass();
        const myClass = await selectSql.getMyClass(StudentId);
        res.render('select', {
             title : "Course completion list",
             classes : myClass,
             title2: "Course List (Registration)",
             allClass: allClass,
             user: req.cookies.user });
    } else {
        res.render('/') 
    }
});

router.post('/', async(req, res) => {
    // TODO
    const data = {
        cId: req.body.applyBtn,
        sId: req.cookies.user,
    };

    const isZero = await selectSql.getZero(data.cId);
    const remainingParticipant = isZero[0].Remaining_participants;

    const isValidation = await selectSql.getValidation(data.sId, data.cId);

    if (remainingParticipant === 0) {
        console.log("해당 과목에 여석이 없습니다.");
    } else if (isValidation.length > 0) {
        console.log("이미 수강신청한 과목입니다.");
    } else {
        const result = await createSql.addClass(data);
    }

});

module.exports = router;