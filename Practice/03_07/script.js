/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const windows = {
  name: "windows",
  singleWins: 2,
  doubleWins: 0,
  tripleWins: 1,
  totalWins: function () {
    return this.singleWins + this.doubleWins + this.tripleWins;
  },
};

const room = {
  name: "bedroom1",
  doors: 1,
  hasBathroom: true,
  almiras: 1,
  mirrors: 1,
  ac: true,
  beds: 1,
  lights: 7,
  wins: {
    name: "windows",
    singleWins: 2,
    doubleWins: 0,
    tripleWins: 1,
    totalWins: function () {
      return this.singleWins + this.doubleWins + this.tripleWins;
    },
  },
  numWindows: function () {
    return this.wins.totalWins();
  },
};

console.log(windows);
console.log(room);
