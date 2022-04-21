const express = require("express");
var cors = require("cors");
var mysql = require("mysql");
const app = express();
const port = 3000;
app.use(cors());

class Player {
  constructor({ age, name, position, team }) {
    this.age = age ?? null;
    this.name = name ?? null;
    this.position = position ?? null;
    this.team = team ?? "Free Agent";
  }
}
class Team {
  constructor({ name, location, losses, players, wins }) {
    this.name = name ?? null;
    this.location = location ?? null;
    this.losses = losses ?? 0;
    this.wins = wins ?? 0;
    this.players = players ?? [];
  }
}
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "admin",
  password: "vXdgwSjVjBdHKsEc",
  database: "codingphase",
});

connection.connect();

app.get("/api/team/:teamName", (req, res) => {
  try {
    var { teamName } = req.params;
    console.log(
      "🚀 ~ file: server.js ~ line 75 ~ app.get ~ teamName",
      teamName
    );
    connection.query(
      `SELECT *
          FROM teams t
          WHERE t.name = "${teamName}"`,
      function (error, team, fields) {
        if (error) throw error;
        connection.query(
          `SELECT *
                FROM players p
                WHERE p.team_id = '${team[0].id}'`,
          function (error, players, fields) {
            if (error) throw error;
            console.log(
              "🚀 ~ file: server.js ~ line 82 ~ app.get ~ players",
              players
            );
            team.players = players.map((player) => new Player({ ...player }));
            team = new Team({ ...team });
            console.log(
              "🚀 ~ file: server.js ~ line 78 ~ app.get ~ team",
              team
            );
            res.json({
              status: 200,
              success: true,
              team,
            });
          }
        );
      }
    );
  } catch (error) {
    res.json({
      status: 200,
      success: false,
      team: null,
      error,
    });
  }
});
app.get("/api/team/:teamName/location", (req, res) => {
  try {
    var { teamName } = req.params;
    connection.query(
      `SELECT location
              FROM teams t
              WHERE t.name = "${teamName}"`,
      function (error, team, fields) {
        if (error) throw error;
        console.log("🚀 ~ file: server.js ~ line 140 ~ app.get ~ team", team);
        res.json({
          status: 200,
          success: true,
          location: team[0].location,
        });
      }
    );
  } catch (error) {
    res.json({
      status: 200,
      success: false,
      location: null,
      error,
    });
  }
});
app.get("/api/team/:teamName/name", (req, res) => {
  try {
    var { teamName } = req.params;
    connection.query(
      `SELECT name
                  FROM teams t
                  WHERE t.name = "${teamName}"`,
      function (error, team, fields) {
        if (error) throw error;
        console.log("🚀 ~ file: server.js ~ line 140 ~ app.get ~ team", team);
        res.json({
          status: 200,
          success: true,
          name: team[0].name,
        });
      }
    );
  } catch (error) {
    res.json({
      status: 200,
      success: false,
      name: null,
      error,
    });
  }
});
app.get("/api/team/:teamName/players", (req, res) => {
  try {
    var { teamName } = req.params;
    connection.query(
      `SELECT *
            FROM teams t
            WHERE t.name = "${teamName}"`,
      function (error, team, fields) {
        if (error) throw error;
        connection.query(
          `SELECT
            p.*,
            t.name as team
            FROM players p
            LEFT JOIN teams t ON t.id = p.team_id
            WHERE p.team_id = ${team[0].id}`,
          function (error, players, fields) {
            if (error) throw error;
            console.log(
              "🚀 ~ file: server.js ~ line 82 ~ app.get ~ players",
              players
            );
            players = players.map((player) => new Player({ ...player, team }));
            res.json({
              status: 200,
              success: true,
              players,
            });
          }
        );
      }
    );
  } catch (error) {
    res.json({
      status: 200,
      success: false,
      players: null,
      error,
    });
  }
});
app.get("/api/team/:teamName/record", (req, res) => {
  try {
    var { teamName } = req.params;
    connection.query(
      `SELECT
        wins, losses
        FROM teams t
        WHERE t.name = "${teamName}"`,
      function (error, team, fields) {
        if (error) throw error;
        console.log("🚀 ~ file: server.js ~ line 140 ~ app.get ~ team", team);
        res.json({
          status: 200,
          success: true,
          losses: team[0].losses,
          wins: team[0].wins,
        });
      }
    );
  } catch (error) {
    res.json({
      status: 200,
      success: false,
      losses: null,
      wins: null,
      error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
