const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const app = express();
const expressJwt = require('express-jwt')
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan('dev')); //logger
app.use('/api', expressJwt({secret: process.env.SECRET}));
app.use('/auth', require('./routes/auth'));
app.use('/topics', require('./routes/topicRouter'));
app.use('/articles', require('./routes/articleRouter'));

mongoose.connect(
    'mongodb://localhost:27017/crystal',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log(err)
    })

app.use((err, req, res, next) =>{
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})
