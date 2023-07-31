const express = require('express')
const userDetailsRoute = require('./routes/user-details/user_details.route')

const router = express.Router();


router.use('/user-details', userDetailsRoute)


module.exports = router