const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let arrScores = [];
//вывод значения

//let obj1 = { a: 1, b: 2, c: 3 };
//for(elementKey in obj1) {
//console.log(`elementkey is ${elementKey}`)
//console.log(`value is ${obj1[elementKey]}`)
//}

for (index in players) {
  arrScores.push(players[index].scorePoints);
}
let maxIndex = arrScores.indexOf(Math.max(...arrScores));
console.log(`${players[maxIndex].name} has max score`);
