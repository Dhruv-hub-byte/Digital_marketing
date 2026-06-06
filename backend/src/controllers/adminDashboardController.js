const pool = require("../config/db");

const getAdminDashboard = async (req, res) => {

  try {

    const users = await pool.query(
      "SELECT COUNT(*) FROM users"
    );

    const campaigns = await pool.query(
      "SELECT COUNT(*) FROM campaigns"
    );

    const leads = await pool.query(
      "SELECT COUNT(*) FROM leads"
    );

    res.json({
      totalUsers: users.rows[0].count,
      totalCampaigns: campaigns.rows[0].count,
      totalLeads: leads.rows[0].count
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  getAdminDashboard
};