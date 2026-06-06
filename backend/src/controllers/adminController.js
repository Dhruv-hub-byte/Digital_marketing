const pool = require("../config/db");

const getUsers = async (req, res) => {

  try {

    const users = await pool.query(
      "SELECT id,name,email,role FROM users"
    );

    res.json(users.rows);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

const getCampaigns = async (req, res) => {

  try {

    const campaigns = await pool.query(
      "SELECT * FROM campaigns"
    );

    res.json(campaigns.rows);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

const getLeads = async (req, res) => {

  try {

    const leads = await pool.query(
      "SELECT * FROM leads"
    );

    res.json(leads.rows);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  getUsers,
  getCampaigns,
  getLeads
};