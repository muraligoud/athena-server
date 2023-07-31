const express = require('express')
const cors = require('cors');

require('./database-connection/db_connection');
const app = express()
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

const routes = require('./route');

app.use('', routes);


app.listen(2020, () => {
    console.log('server listening at port 2020')
})