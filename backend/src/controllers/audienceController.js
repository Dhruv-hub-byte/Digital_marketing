const pool = require("../config/db");

const getAudiences = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM audiences"
  );

  res.json(result.rows);
};

const createAudience = async (req, res) => {

  const {
    industry,
    location,
    experience_level,
    company_size
  } = req.body;

  await pool.query(
    `INSERT INTO audiences
    (industry,location,experience_level,company_size)
    VALUES($1,$2,$3,$4)`,
    [
      industry,
      location,
      experience_level,
      company_size
    ]
  );

  res.json({
    message: "Audience Created"
  });
};

const updateAudience = async (req, res) => {

  const { id } = req.params;

  const {
    industry,
    location,
    experience_level,
    company_size
  } = req.body;

  await pool.query(
    `UPDATE audiences
     SET industry=$1,
         location=$2,
         experience_level=$3,
         company_size=$4
     WHERE id=$5`,
    [
      industry,
      location,
      experience_level,
      company_size,
      id
    ]
  );

  res.json({
    message: "Audience Updated"
  });
};

const deleteAudience = async (req, res) => {
  const { id } = req.params;

  await pool.query(
    "DELETE FROM audiences WHERE id=$1",
    [id]
  );

  res.json({
    message: "Audience Deleted"
  });
};

module.exports = {
  getAudiences,
  createAudience,
  updateAudience,
  deleteAudience
};