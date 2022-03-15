const express = require('express');
const { getAvailableCars, createOrder, getAllCars, getAllOrders } = require('../controllers');

const route = express.Router();

route.get('/get-cars', getAllCars);
route.get('/get-orders', getAllOrders);
route.get(('/cars-available'), getAvailableCars);
route.post(('/create-order'), createOrder);

module.exports = route