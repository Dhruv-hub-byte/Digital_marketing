const pool = require("../config/db");

const getCampaigns = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM campaigns"
  );

  res.json(result.rows);
};

const createCampaign = async (req, res) => {
  try {

    const {
      campaign_name,
      objective,
      budget,
      status
    } = req.body;

    await pool.query(
      `INSERT INTO campaigns
      (campaign_name, objective, budget, status)
      VALUES ($1,$2,$3,$4)`,
      [
        campaign_name,
        objective,
        budget,
        status
      ]
    );

    res.json({
      message: "Campaign Created"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error"
    });
  }
};

const updateCampaign = async (req, res) => {

  const { id } = req.params;

  const {
    campaign_name,
    objective,
    budget,
    status
  } = req.body;

  await pool.query(
    `UPDATE campaigns
     SET campaign_name=$1,
         objective=$2,
         budget=$3,
         status=$4
     WHERE id=$5`,
    [
      campaign_name,
      objective,
      budget,
      status,
      id
    ]
  );

  res.json({
    message: "Campaign Updated"
  });
};

const deleteCampaign = async (req, res) => {
  const { id } = req.params;

  await pool.query(
    "DELETE FROM campaigns WHERE id=$1",
    [id]
  );

  res.json({
    message: "Campaign Deleted"
  });
};


module.exports = {
  getCampaigns,
  createCampaign,
  updateCampaign,
  deleteCampaign
};

