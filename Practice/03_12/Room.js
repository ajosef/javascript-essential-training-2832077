const windows = {
  name: "windows",
  singleWins: 2,
  doubleWins: 0,
  tripleWins: 1,
  totalWins: function () {
    return this.singleWins + this.doubleWins + this.tripleWins;
  },
};

const Room = class {
  constructor(
    name,
    doors,
    hasBathroom,
    almiras,
    mirrors,
    ac,
    beds,
    lights,
    singleWins,
    doubleWins,
    tripleWins
  ) {
    this.name = name;
    this.doors = doors;
    this.hasBathroom = hasBathroom;
    this.almiras = almiras;
    this.mirrors = mirrors;
    this.ac = ac;
    this.beds = beds;
    this.lights = lights;
    this.wins = {
      name: "windows",
      singleWins: singleWins,
      doubleWins: doubleWins,
      tripleWins: tripleWins,
      totalWins: function () {
        return this.singleWins + this.doubleWins + this.tripleWins;
      },
    };
  }
  numWindows() {
    return this.wins.totalWins();
  }
};

globalThis.Room = Room;
export default Room;
