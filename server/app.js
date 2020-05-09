const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

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

app.set('port', 8008);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', auth);
app.use('/post', posts);

app.listen(app.get('port'), () => {
    console.log(`http://127.0.0.1:${app.get('port')}`);
});