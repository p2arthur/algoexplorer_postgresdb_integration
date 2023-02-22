const express = require("express");
const pool = require("./db");
const cors = require("cors");
const PORT = 8000;
const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173" }));
app.use(express.json());

app.post("/assets", async (req, res) => {
  console.log(req.body);

  const { assetCreator, assetName, unitName, assetUrl } = req.body;

  const response = await pool.query(
    "INSERT INTO assets (creator, name, unit_name, url) VALUES ($1, $2, $3, $4)",
    [assetCreator, assetName, unitName, assetUrl]
  );

  res.json(response);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
