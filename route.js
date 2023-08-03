const express = require('express')
const userDetailsRoute = require('./routes/user-details/user_details.route')

const router = express.Router();

router.use('/fetch', (req, res) => {
    res.send('hello, athena server. your build is success')
})


router.use('/user-details', userDetailsRoute)


module.exports = router