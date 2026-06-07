const pool = require("../config/db");
const bcrypt = require("bcrypt");

const getSettings = async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM settings"
    );

    res.json(result.rows);

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Server Error" });

  }

};

const updateProfile = async (req, res) => {

  try {

    const { name, email, password } = req.body;
    const userId = req.user.id;

    if (password) {

      const hashed = await bcrypt.hash(password, 10);

      await pool.query(
        "UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4",
        [name, email, hashed, userId]
      );

    } else {

      await pool.query(
        "UPDATE users SET name=$1, email=$2 WHERE id=$3",
        [name, email, userId]
      );

    }

    res.json({ message: "Profile updated successfully" });

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Server Error" });

  }

};

module.exports = {
  getSettings,
  updateProfile
};