require('dotenv').config();
const express = require('express');

const app = express();

PORT = 3005
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
