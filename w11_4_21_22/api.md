# PlayersAndTeams API
We provide real-time data for players and teams.

## Getting Started
**Pre-Requisites**
- Node
* Express
+ MySQL

## Installation
```
// Yarn
yarn add players-and-teams-api

// NPM
npm install players-and-teams-api
```
## Usage
After installing our package, use it to make requests to the api.
```javascript
import { api } = 'players-and-teams-api';
// NPM Package Method
const team = api.get('lakers');

// AJAX Method
const res = await fetch("http://localhost:3000/api/team/lakers");
res = await res.json();
console.log("Res:", res);
```

## API
### Player
```javascript
class Player {
  constructor({ age, name, position, team }) {
    this.age = age ?? null;
    this.name = name ?? null;
    this.position = position ?? null;
    this.team = team ?? "Free Agent";
  }
}
```
### Team
```javascript
class Team {
  constructor({ name, location, losses, players, wins }) {
    this.name = name ?? null;
    this.location = location ?? null;
    this.losses = losses ?? 0;
    this.wins = wins ?? 0;
    this.players = players ?? [];
  }
}
```

## Contributions
Thanks to CodingPhase Family for the hard work.