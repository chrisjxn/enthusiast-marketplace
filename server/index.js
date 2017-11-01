require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')

const controller = require('./controllers/controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/makes', controller.getAllMakes);

const PORT = 3005;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
