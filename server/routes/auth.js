const router = require('express').Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
const { newToken } = require('../util/token');

router.post('/signup', (req, res) => {
    const { username, password, nickname } = req.body;
    bcrypt.hash(password, 10, (err, hashedPwd) => {
        if(err){
            console.error(err);
            return res.status(500).json({ err });
        } else{
            const newUser = new UserModel({
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
    const { username, password } = req.body;
    UserModel.findOne({
        username,
    })
    .then(user => {
        if(!user){
            res.status(401).send("Authenticate failed. User not foudn.");
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if(err){
                res.status(500).send('Internal Server Error');
            }
            if(result){
                const token = newToken(user);
                const loggedInUser = {
                    username: user.username,
                    nickname: user.nickname,
                };

                res.status(200).json({
                    success: true,
                    user: loggedInUser,
                    message: 'Login Success',
                    token,
                });
            } else{
                res.status(401).json('Authenticate failed. Wrong password.');
            }
        })
    })
    .catch(err => {
        res.status(500).json('Internal Server Error');
        throw err;
    });
    
});

module.exports = router;