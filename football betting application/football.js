const game = {
  team1: "Sri Lanka",
  team2: "India",
  players: [
    [
      "neuser",
      "pavard",
      "martinez",
      "alaba",
      "davies",
      "kimmich",
      "goretzka",
      "coman",
      "muller",
      "gnarby",
      "Lewandowski",
    ],
    [
      "burki",
      "schulz",
      "hummels",
      "akanji",
      "hakimi",
      "weigl",
      "witsel",
      "hazard",
      "brandt",
      "sancho",
      "gotzu",
    ],
  ],

  score: "4.0",
  scored: ["Lewandowski", "gnarby", "Lewandowski", "hummels"],
  Date: "Nov 9th 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log("----Q1----");
//Q1
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

console.log("----Q2----");
// Q2
const [goldKeeper, ...fieldPlayers] = player1;
console.log(goldKeeper);
console.log(fieldPlayers);

console.log("----Q3----");

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

console.log("----Q4----");

const newPlayers = [...player1, "Arthur", "Dutch", "Sadie", ...player2];
console.log(newPlayers);

console.log("----Q5----");
const {
  odds: { x, team1, team2 },
} = game;
console.log(x);
console.log(team1);
console.log(team2);

console.log("----Q6----");

const printGoals = function (...players) {
  console.log(players.length);
};

// printGoals("Athur", "Morgan", "dutch", "Sadie");
// printGoals("Kesara", "Gihan");
printGoals(...game.scored);

console.log("----Q7----");

team1 < team2 && console.log("team 1 is more likely to win");
