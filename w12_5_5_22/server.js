const express = require("express");
var cors = require("cors");
var mysql = require("mysql");
const app = express();
const port = 3000;
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "admin",
  password: "",
  database: "codingphase",
});

connection.connect();

app.get("/api/upload", (req, res) => {
  try {
      res.json({
        status: 200,
        success: true,
      });
  } catch (error) {
    res.json({
      status: 200,
      success: false,
      team: null,
      error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
