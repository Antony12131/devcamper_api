
const express = require('express')
const router = express.Router();
const {getAllBootcamps , getSingleBootcamp, deleteBootcamp, updateBootcamp, createBootcamp} = require('../Controller/bootcamps')
router.route('/').get(getAllBootcamps).post(createBootcamp)
router.route('/:id').get(getSingleBootcamp).delete(deleteBootcamp).put(updateBootcamp)

module.exports = router;
