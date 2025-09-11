/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Room from "./Room.js";

const bedRoom = new Room("bedroom1", 1, true, 2, 1, true, 1, 8, 2, 0, 1);
globalThis.bedRoom = bedRoom;

console.log(bedRoom);
console.log(bedRoom.numWindows());

//const livingRoom = new Room("livingRoom", 1, true, 2, 1, true, 1, 8, 2, 0, 1);
const livingRoom = new Room("livingRoom", 1, false, 1, 0, false, 0, 2, 0, 0, 2);
globalThis.livingRoom = livingRoom;
console.log(livingRoom);
console.log(livingRoom.numWindows());
