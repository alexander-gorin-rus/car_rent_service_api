const db = require("../db")

exports.getCars = async (req, res) => {
    const result = await db.query('SELECT * FROM car_rent_report JOIN cars ON car_rent_report.car_id = cars.car_id WHERE end_rent < now();')
    //console.log(result[rows]);
    try {
        res.status(200).json({
            // status: "success",
            // results: result.rows.length,
            cars: result.rows 
        })
    } catch (error) {
        console.log(error)
    }
}