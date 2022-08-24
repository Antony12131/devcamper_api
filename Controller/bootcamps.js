const Bootcamps = require('../models/bootcamps')
exports.getAllBootcamps = async(req , res) =>{
    const bootcamps = await Bootcamps.find()
    res.json({
        success: true,
        data: bootcamps
    })
}

exports.getSingleBootcamp = (req , res) =>{
    res.json('hello from single bootcamp')
    
}

exports.createBootcamp = (req , res) =>{
    res.json('hello from  post')
}

exports.deleteBootcamp = (req , res) =>{
    res.json('hello from delete')
}

exports.updateBootcamp = (req , res) =>{
    res.json('hello from update')
}
