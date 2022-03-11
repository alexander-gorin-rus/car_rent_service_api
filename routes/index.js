const express = require('express');
const { getCars } = require('../controllers');

const route = express.Router();

route.get(('/cars'), getCars);

module.exports = route