const db = require("../db")

exports.getAllCars = async (req, res) => {
    const result = await db.query('SELECT * FROM cars');
    try {
        res.status(200).json({
            cars: result.rows 
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getAvailableCars = async (req, res) => {
    const result = await db.query('SELECT * FROM car_rent_order JOIN cars ON car_rent_order.car_state_id = cars.state_id WHERE end_rent < now();');
    try {
        res.status(200).json({
            cars: result.rows 
        })
    } catch (error) {
        console.log(error)
    }
}

exports.createOrder = async (req, res) => {
    const { car_state_id, start_rent, end_rent } = req.body
    try {
        const result = await db.query('INSERT INTO car_rent_order (car_state_id, start_rent, end_rent) values ($1, $2, $3) returning *;', 
        [car_state_id, start_rent, end_rent]);
    
        res.status(200).json({
            order: result.rows[0] 
        })
    } catch (error) {
        res.status(500).json({
            message: 'Sorry, a car cannot be rented for more than 30 days',
            error
        })
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const result = db.query('SELECT * FROM car_rent_order;')
        res.status(200).json({
            orders: result
        });
    } catch (error) {
        console.log(error);
    }
}