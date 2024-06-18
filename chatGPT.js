const players = [
{ name: "Quinn", scorePoints: 0 },
{ name: "Rick", scorePoints: 0 },
{ name: "Steve", scorePoints: 0 },
{ name: "Alice", scorePoints: 50 },
{ name: "Bob", scorePoints: 70 },
{ name: "Charlie", scorePoints: 90 },
{ name: "Dave", scorePoints: 60 },
{ name: "Frank", scorePoints: 80 },
{ name: "Grace", scorePoints: 80 },
{ name: "Heidi", scorePoints: 80 },
{ name: "Ivan", scorePoints: -10 },
{ name: "Judy", scorePoints: -20 },
{ name: "Karl", scorePoints: -5 }

];

let arrScores = [];

for (index in players) {
  arrScores.push(players[index].scorePoints);
}
let maxIndex = arrScores.indexOf(Math.max(...arrScores));
console.log(`${players[maxIndex].name} has max score`);
