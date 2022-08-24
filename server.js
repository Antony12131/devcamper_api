const express = require('express')
const morgan = require('morgan')
require('dotenv').config({path: './config/config.env'})
const connectDB = require('./config/db')
// setup server
const app = express();
app.use(morgan('dev'))
// import routes
const Bootcamps = require('./Routes/bootcamps')
app.use('/bootcamps' ,Bootcamps)

// connecting to db
connectDB()

let PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
