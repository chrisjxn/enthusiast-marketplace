require('dotenv').config();
const express = require('express')
    , massive = require('massive')

const controller = require('./controllers/controller');

const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/makes', controller.getAllMakes);
app.get('/api/lines', controller.getAllLines);
app.get('/api/generations', controller.getAllGenerations);
app.get('/api/models', controller.getAllModels);

const PORT = 3005;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
