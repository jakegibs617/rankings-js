var gamesArray = [
  { name: 'Edward', score: 21, rank: 0 },
  { name: 'Sharpe', score: 37, rank: 0 },
  { name: 'And', score: 45, rank: 0 },
  { name: 'The', score: 12, rank: 0 },
  { name: 'Magnetic', score: 3, rank: 0 },
  { name: 'Zeros', score: 37, rank: 0 }
];

var sorted = gamesArray.sort(function(a,b){return b.score-a.score});
// console.log (sorted);
// [ { name: 'And', score: 45, rank: 0 },
//   { name: 'Sharpe', score: 37, rank: 0 },
//   { name: 'Zeros', score: 37, rank: 0 },
//   { name: 'Edward', score: 21, rank: 0 },
//   { name: 'The', score: 12, rank: 0 },
//   { name: 'Magnetic', score: 3, rank: 0 } ]

function rank(array) {

  var firstArray = array;
  var rankedArray = [];
  var counter = 0;

  while (firstArray.length > 0) { 

    var game = firstArray.shift();

    if (rankedArray.length == 0) {
      game.rank = 1;
      counter += 1;
    } else {
      if (game.score == rankedArray[counter - 1].score) {
        game.rank = rankedArray[counter - 1].rank;
        counter += 1;
      } else {
        game.rank = rankedArray[counter - 1].rank + 1;
        counter += 1;
      };
    };

    rankedArray.push(game);
  };
  return rankedArray;
};

console.log(rank(gamesArray));



