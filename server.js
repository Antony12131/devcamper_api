const express = require('express')
const app = express();
const Bootcamps = require('./Routes/bootcamps')
app.use('/bootcamps' ,Bootcamps)
app.listen(5000, () => console.log("Server is running"));
