const router = require('express').Router();
const bcrypt = require('bcrypt');
const user = require('../models/UserModel');

router.post('/signup', (req, res) => {
    const { username, password, nickname } = req.body;
    bcrypt.hash(password, 10, (err, hashedPwd) => {
        if(err){
            console.error(err);
            return res.status(500).json({ err });
        } else{
            const newUser = new user({
                username,
                password: hashedPwd,
                nickname,
            });
            newUser.save((err, saved) => {
                if(err){
                    console.error(err);
                    res.status(409).send(err);
                } else{
                    console.log(saved);
                    res.send(saved);
                }
            })
        }
    });
});

router.post('/login', (req, res) => {

});

module.exports = router;