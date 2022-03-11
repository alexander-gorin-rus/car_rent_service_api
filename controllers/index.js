const db = require("../db")

exports.getCars = async (req, res) => {
    const result = await db.query('SELECT * from cars WHERE available = true')
    console.log(result);
    try {
         res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}