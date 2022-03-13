const db = require("../db")

exports.getCars = async (req, res) => {
    const result = await db.query('SELECT * from cars WHERE car_type = \'vagon\'')
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