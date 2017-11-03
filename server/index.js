require('dotenv').config();
const express = require('express')
    , massive = require('massive')

const controller = require('./controllers/controller');

const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/makes', controller.getAllMakes);
app.get('/api/lines', controller.getAllLinesFromSelectedMakes);

const PORT = 3005;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
