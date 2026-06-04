const pool = require("../config/db");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users(name,email,password,role)
       VALUES($1,$2,$3,$4)
       RETURNING *`,
      [name, email, hashedPassword, role]
    );

    res.status(201).json({
      message: "User Registered",
      user: result.rows[0],
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { register };