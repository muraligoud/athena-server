const express = require('express')
require('./database-connection/db_connection');
const app = express()
app.use(express.json());

const routes = require('./route');

app.use('', routes);


app.listen(2020, () => {
    console.log('server listening at port 2020')
})