const express = require('express');
const path = require('path')
const app = express();
const favicon = require('serve-favicon')
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./controllers/users')
require('./config/database');

const userRouter = require('./routes/users');
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', userRouter);


app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
