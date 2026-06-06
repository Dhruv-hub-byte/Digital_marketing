const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      role
    } = req.body;

    const hashedPassword =
      await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO users
      (name,email,password,role)
      VALUES($1,$2,$3,$4)`,
      [
        name,
        email,
        hashedPassword,
        role || "user"
      ]
    );

    res.json({
      message: "User Registered"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {

      return res.status(404).json({
        message: "User Not Found"
      });

    }

    const user = result.rows[0];

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {

      return res.status(401).json({
        message: "Invalid Password"
      });

    }

 const token = jwt.sign(
  {
    id: user.id,
    role: user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d"
  }
);

    res.json({
      token,
      role: user.role
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = {
  registerUser,
  loginUser
};