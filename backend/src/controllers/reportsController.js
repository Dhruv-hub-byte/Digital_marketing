const pool = require("../config/db");

const getReports = async (req, res) => {

  try {

    const totalCampaignsResult = await pool.query(
      "SELECT COUNT(*) FROM campaigns"
    );

    const totalLeadsResult = await pool.query(
      "SELECT COUNT(*) FROM leads"
    );

    const activeCampaignsResult = await pool.query(
      "SELECT COUNT(*) FROM campaigns WHERE status='Active'"
    );

    const totalCampaigns = Number(totalCampaignsResult.rows[0].count);
    const totalLeads     = Number(totalLeadsResult.rows[0].count);
    const activeCampaigns = Number(activeCampaignsResult.rows[0].count);

    let conversionRate = 0;
    if (totalCampaigns > 0) {
      conversionRate = ((totalLeads / totalCampaigns) * 100).toFixed(2);
    }

    res.json({
      totalCampaigns,
      totalLeads,
      activeCampaigns,
      conversionRate
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  getReports
};