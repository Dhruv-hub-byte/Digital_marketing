const pool = require("../config/db");

const getLeads = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM leads ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

const createLead = async (req, res) => {
  try {

    const {
      name,
      email,
      company,
      status
    } = req.body;

    await pool.query(
      `INSERT INTO leads
      (name,email,company,status)
      VALUES ($1,$2,$3,$4)`,
      [name, email, company, status]
    );

    res.json({
      message: "Lead Created"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

const updateLead = async (req, res) => {

  const { id } = req.params;

  const {
    name,
    email,
    company,
    status
  } = req.body;

  await pool.query(
    `UPDATE leads
     SET name=$1,
         email=$2,
         company=$3,
         status=$4
     WHERE id=$5`,
    [
      name,
      email,
      company,
      status,
      id
    ]
  );

  res.json({
    message: "Lead Updated"
  });
};

const deleteLead = async (req, res) => {
  const { id } = req.params;

  await pool.query(
    "DELETE FROM leads WHERE id=$1",
    [id]
  );

  res.json({
    message: "Lead Deleted"
  });
};

module.exports = {
  getLeads,
  createLead,
  updateLead,
  deleteLead
};