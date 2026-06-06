const pool = require("../config/db");

const getSettings = async (req,res)=>{

 const result = await pool.query(
   "SELECT * FROM settings"
 );

 res.json(result.rows);
};

module.exports = {
 getSettings
};