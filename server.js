const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use('/api/v1', require('./routes'));

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`This car rent service is running on port ${PORT}`)
})
