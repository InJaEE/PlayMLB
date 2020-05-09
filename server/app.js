const app = require('express')();
const cors = require('cors');
const morgan = require('morgan');

const mongoose = require('mongoose');
const config = require('./config/key');


// const posts = require('./routes/posts');
// const signup = require('./routes/signup');

mongoose.connect(
    config.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    })
    .then(() => console.log('DataBase Connected !!!'))
    .catch(err => console.error(err));

app.set('port', 8008);

app.use(cors());
app.use(morgan('dev'));

// app.use('/post', posts);
// app.use('/signup', signup);

app.listen(app.get('port'), () => {
    console.log(`http://127.0.0.1:${app.get('port')}`);
});