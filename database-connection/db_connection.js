const mongoose = require('mongoose');


class DBconnection {
    constructor() {
        this.db = "mongodb+srv://muraligoudpalle1998:qnbuqG6hhzdtmw61@cluster0.pelxhhd.mongodb.net/My_First_DB"
        this.connect()
    }

    connect() {
        return Promise.resolve()
            .then(() => {
                return mongoose.connect(this.db)
            })
            .then((response) => {
                console.log('database connection successful')
            }).catch((error) => {
                console.error('error occurred while connecting to the database')
            })

    }
}


module.exports = new DBconnection()