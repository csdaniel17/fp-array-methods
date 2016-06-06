// # FP Array Exercise B

// ## Leetspeak
// Given a paragraph of text as a string, print the paragraph in leetspeak. To translate a string to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):
//
// ```
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// ```
//
// Example: LEET => l337
// Hint: you can convert a string to an array of characters with .split('')

var str = 'ghost in leetspeak';
var str2 = str.split('');

function writeInLeetspeak(str) {
  return str2.map(function(n) {
    if (n === 'a') {
      return 4;
    } else if (n === 'e') {
      return 3;
    } else if (n === 'g') {
      return 6;
    } else if (n === 'i') {
      return 1;
    } else if (n === 'o') {
      return 0;
    } else if (n === 's') {
      return 5;
    } else if (n === 't') {
      return 7;
    }
    return n;
  });
}
var leetspeak = writeInLeetspeak(str2);
console.log(leetspeak.join(''));


// ## Basketball Players
// Given an array of objects representing basketball players:


var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];

// 1. Write a function that takes the players array and returns a new array containing only the starters.
var starters = players.filter(function(player) {
  return player.starter;
});

// console.log(starters);

// 2. Write a function that takes the players array and returns only the point guards (position = 'PG').

var pointGuards = players.filter(function(player) {
  return player.position === 'PG';
});
// console.log(pointGuards);

// 3. Write a function that takes the players array and returns a new array containing the names of each player.

var playerNames = players.map(function(player) {
  return player.name;
});
// console.log(playerNames);

//or:

function namesOfPlayers(arr) {
  return players.map(function(player) {
    return player.name;
  });
}
var playerNames2 = namesOfPlayers(players);
// console.log(playerNames2);

// 4. Write a function that takes the players array and returns a new array
// containing the names of the starters.

var startersNames1 = players.filter(function(player) {
  return player.starter;
}).map(function(player) {
  return player.name;
});

// console.log(startersNames1);

//or:

function getStartersNames(arr) {
  return players.filter(function(player) {
    return player.starter;
  }).map(function(player) {
    return player.name;
  });
}

var startersNames2 = getStartersNames(players);
// console.log(startersNames2);

// 5. Write a function that takes the players array and returns a new array containing the names of the point guards.

function getPointGuardsNames(arr) {
  return players.filter(function(player) {
    return player.position === 'PG';
  }).map(function(player) {
    return player.name;
  });
}

var pointGuardsNames = getPointGuardsNames(players);
// console.log(pointGuardsNames);

// 6. Write a function that takes the players array and returns the sum of the avgPoints for each player.

function sumAvgPoints(arr) {
  return players.map(function(player) {
    return player.avgPoints;
  }).reduce(function(currentValue, points) {
    return currentValue + points;
  }, 0);
}

var sum = sumAvgPoints(players);
console.log(sum);
// var avg = sum / players.length;
// console.log(avg);

//or

var avgTeamPoints = players.reduce(function(sum, player) {
  return sum + player.avgPoints;
}, 0);
console.log(avgTeamPoints);


// 7. Write a function that takes the players array and returns the sum of the avgPoints of the starters.

function getAvgPointsStarters(arr) {
  return players.filter(function(player) {
    return player.starter;
  }).map(function(player) {
    return player.avgPoints;
  }).reduce(function(currentValue, points) {
    return currentValue + points;
  }, 0);
}

var sum1 = getAvgPointsStarters(players);
// console.log(sum1);


// 8. Write a function that takes the players array and returns true if each player gets at least 10 minutes of average playing time, and returns false otherwise

function playsMoreThanTen(arr) {
  return players.every(function(player) {
    return player.avgMinutesPlayed > 10;
  });
}
// console.log(playsMoreThanTen(players));

// 9. Write a function that takes the players array and returns true if each starter gets at least 30 minutes of average playing time, and returns false otherwise

function playsMoreThanThirty(arr) {
  return players.filter(function(player) {
    return player.starter;
  })
  .every(function(player) {
    return player.avgMinutesPlayed > 10;
  });
}

// console.log(playsMoreThanThirty(players));

// 10. Write a function that takes the players array and returns a tally object. The tally object should count the number of players in each position. It should look like:
//
//         {
//           PG: 2,
//           SG: 4,
//           PF: 3,
//           SF: 3,
//           C: 1
//         }

var positions = players.map(function(player) {
  return player.position;
}).reduce(function(tally, position) {
  if (!tally[position]) {
    tally[position] = 1;
  } else {
    tally[position] += 1;
  }
  return tally;
}, {});

console.log(positions);


// ## Bonus
// * Write your own map implementation
  // if player plays more than 10 minutes on avg return true, if less than 10       return false
  var plays10Minutes = players.map(function(player) {
    if (player.avgMinutesPlayed > 10) {
      return true;
    } else {
      return false;
    }
    return player;
  });

  // console.log(plays10Minutes);

// * Write your own filter implementation
// * Write your own reduce implementation
// * Rewrite filter using reduce
// * Write your own every implementation using reduce
