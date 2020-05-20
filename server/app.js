const express = require('express');
const app = express();
const cors = require('cors');
const chalk = require('chalk');
const morgan = require('morgan');
require('dotenv').config();

const passport = require('passport');
const passportConfig = require('./passport');
passportConfig(passport);

const mongoose = require('mongoose');
const config = require('./config/key');

const posts = require('./routes/posts');
const auth = require('./routes/auth');

mongoose.connect(
    config.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    })
    .then(() => console.log('DataBase Connected!!!'))
    .catch(err => console.error(err));

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));

app.use('/', auth);
app.use('/post', posts);

app.listen(app.get('port'), () => {
    console.log(`${chalk.blue
        .bgHex('000000')
        .bold(`http://127.0.0.1:${app.get('port')}
        `)}`);
});