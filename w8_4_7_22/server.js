const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

const database = JSON.parse(`{
    "players": [
        {
            "name": "Lebron James",
            "age": 37,
            "position": "SF",
            "team": "Lakers"
        },
        {
            "name": "Russell Westbrook",
            "age":  29,
            "position": "PF",
            "team": "Lakers"
        },
        {
            "name": "Anthony Davis",
            "age":  29,
            "position": "PF",
            "team": "Lakers"
        },
        {
            "name": "Talen Horton-Tucker",
            "age":  21,
            "position": "SG",
            "team": "Lakers"
        },
        {
            "name": "Kendrick Nunn",
            "age":  26,
            "position": "G",
            "team": "Lakers"
        },
        {
            "name": "Malik Monk",
            "age":  24,
            "position": "SG",
            "team": "Lakers"
        }
    ],
    "teams": [
        {
            "name": "Lakers",
            "location": "Los Angeles",
            "losses": 44,
            "wins": 38
        }
    ]
}`);
console.log("🚀 ~ file: server.js ~ line 52 ~ database", database);

// app.get("/api/team/:teamName", (req, res) => {
//   var { teamName } = req.params;
//   console.log("🚀 ~ file: server.js ~ line 75 ~ app.get ~ teamName", teamName);
//   var team = database.teams.find(
//     (team) => team.name.toLowerCase() === teamName
//   );
//   team.players = database.players.filter(
//     (player) => player.team.toLowerCase() === teamName
//   );
//   team.players = team.players.map((player) => new Player({ ...player }));
//   team = new Team({ ...team });
//   res.json({
//     status: 200,
//     success: true,
//     team,
//   });
// });
// app.get("/api/team/:teamName/location", (req, res) => {
//   var { teamName } = req.params;
//   var { location } = database.teams.find(
//     (team) => team.name.toLowerCase() === teamName
//   );
//   res.json({
//     status: 200,
//     success: true,
//     location,
//   });
// });
// app.get("/api/team/:teamName/name", (req, res) => {
//   var { teamName } = req.params;
//   var { name } = database.teams.find(
//     (team) => team.name.toLowerCase() === teamName
//   );
//   res.json({
//     status: 200,
//     success: true,
//     name,
//   });
// });
// app.get("/api/team/:teamName/players", (req, res) => {
//   var { teamName } = req.params;
//   var players = database.players.filter(
//     (player) => player.team.toLowerCase() === teamName
//   );
//   players = players.map((player) => new Player({ ...player }));
//   res.json({
//     status: 200,
//     success: true,
//     players,
//   });
// });
// app.get("/api/team/:teamName/record", (req, res) => {
//   var { teamName } = req.params;
//   var { losses, wins } = database.teams.find(
//     (team) => team.name.toLowerCase() === teamName
//   );
//   res.json({
//     status: 200,
//     success: true,
//     losses,
//     wins,
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
