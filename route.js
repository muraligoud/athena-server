const express = require('express')
const userDetailsRoute = require('./routes/user-details/user_details.route')

const router = express.Router();

router.use('/', (req, res) => {
    res.send('hello, athena server')
})


router.use('/user-details', userDetailsRoute)


module.exports = router