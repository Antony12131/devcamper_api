const mongoose = require('mongoose');
const connectDB = async() => {
    // const conn = await mongoose.connect('mongodb+srv://nemo:<password>@devcamper.8iekmeb.mongodb.net/<data name>?retryWrites=true&w=majority')
    const conn = await mongoose.connect('mongodb+srv://nemo:123@devcamper.8iekmeb.mongodb.net/devcamper?retryWrites=true&w=majority')
    console.log(conn.connection.host)
}
module.exports = connectDB