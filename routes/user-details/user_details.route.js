const express = require('express');

const router = express.Router();

const User = require('./user_details_schema')


router.get('/fetch', (req, res) => {
    return Promise.resolve()
        .then(() => {
            return User.find({})
        })
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(500).json({
                error: "Error occurred while fetching users data"
            })
        })
})

router.post('/insert', (req, res) => {
    return Promise.resolve()
        .then(() => {
            const newUser = new User({
                name: "murali",
                age: 21,
                email: "muraligoudpalle1998@gmail.com"
            });
            return newUser.save()
        })
        .then((result) => {
            res.status(200).send("record inserted successfully")
        })
        .catch((error) => {
            res.status(500).json({
                error: "Error occurred while inserting user details"
            })
        })
})

module.exports = router