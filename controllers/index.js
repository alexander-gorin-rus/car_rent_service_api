const db = require("../db")

exports.getCars = async (req, res) => {
    const result = await db.query('SELECT * FROM car_rent_report WHERE end_rent < now()')
    //console.log(result[rows]);
    try {
        res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                cars: result.rows
            } 
        })
    } catch (error) {
        console.log(error)
    }
}