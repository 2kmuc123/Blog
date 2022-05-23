const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


//Mongo
mongoose.connect(process.env.MONGOOSE)
    .then(() => console.log('Connect to Mongo Database !!!!'))
    .catch((err) => console.log(err))

//route
app.get('/', (req, res) => {
    res.json('sever ok !!!')

});


//listen

app.listen(process.env.PORT || 8000, () => {
    console.log(`App listening on port ${process.env.PORT || 8000}`);
});
