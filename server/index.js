require('dotenv').config();
const express = require('express')
    , massive = require('massive')

const controller = require('./controllers/controller');

const app = express();

app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/makes', controller.getAllMakes);
app.get('/api/lines', controller.getAllLines);
app.get('/api/generations', controller.getAllGenerations);
app.get('/api/models', controller.getAllModels);
app.get('/api/years', controller.getAllYears);
app.get('/api/listings', controller.getAllListings);
app.get('/api/listing/:listingId', controller.getActiveListing);
app.get('/api/trims/:yearId', controller.getTrims);
app.get('/api/engines/:yearId', controller.getEngines);
app.get('/api/transmissions/:yearId', controller.getTransmissions);
app.get('/api/colors/:yearId', controller.getColors);
app.get('/api/interiors/:yearId', controller.getInteriors);
app.get('/api/packages/:yearId', controller.getPackages);
app.get('/api/options/:yearId', controller.getOptions);
app.get('/api/configlistings/:colorId', controller.getConfigListings);

const PORT = 3005;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
