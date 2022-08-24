const mongoose = require('mongoose');

const connectDB = async() => {
    // const conn = await mongoose.connect('mongodb+srv://nemo:<password>@devcamper.8iekmeb.mongodb.net/<data name>?retryWrites=true&w=majority')
    const conn = await mongoose.connect(process.env.mongoUrl)
    console.log(conn.connection.host)
}
module.exports = connectDB
