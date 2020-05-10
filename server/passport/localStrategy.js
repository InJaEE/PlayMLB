const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/UserModel');
const bcrypt = require('bcrypt');

const local = function(passport){
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, () => {

    }));
};

module.exports = local;2