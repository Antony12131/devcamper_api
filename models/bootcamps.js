const mongoose =  require('mongoose');
const { Schema } = mongoose;

const bootcampSchema = new Schema({
  courseName: {
    type: String,
    required: [true, 'Please add cursename'],
    max: 20
  },
  title: {
    type: String,
    max: 500,
    required: [true, 'Please add title'],
  }  
});
module.exports = mongoose.model('Bootcamps', bootcampSchema);
