/**
 * Practice: function declarations
 *
 * - Create a basic function declaration
 * - Change or add an element in the DOM in the function.
 * - Call this function.
 * - Create a basic function expression.
 * - Do similar - find an element, change it, call the fn, confirm
 * - Repeat with an arrow function.
 */

const chair1 = {
  id: 1,
  name: "chair1",
  type: "armchair",
  size: "medium",
  material: "plastic",
  color: "green",
};
const chair2 = {
  id: 1,
  name: "chair2",
  type: "easychair",
  size: "large",
  material: "wood",
  color: "brown",
};

/**
 * Create a new HTMLElement out of the chair object
 * @param {*} chair object with all properties of chair
 * @returns HTMLElement having ul/li of chair data.
 */
function newChair(chair) {
  console.log("fn declaration");
  const chairE = document.createElement("chair");
  chairE.innerHTML = `<h3>${chair.name}</h3>
  <ul>
    <li>id : ${chair.id} </li>
    <li>type : ${chair.type} </li>
    <li>material : ${chair.material} </li>
    <li>color : ${chair.color} </li>
  </ul>`;
  chairE.style.color = chair.color;
  return chairE;
}

const newChair2 = function (chair) {
  console.log("fn expression");
  const chairE = document.createElement("chair");
  chairE.innerHTML = `<h3>${chair.name}</h3>
  <ul>
    <li>id : ${chair.id} </li>
    <li>type : ${chair.type} </li>
    <li>material : ${chair.material} </li>
    <li>color : ${chair.color} </li>
  </ul>`;
  chairE.style.color = chair.color;
  return chairE;
};

const newChair3 = (chair) => {
  console.log("fn arrow");
  const chairE = document.createElement("chair");
  chairE.innerHTML = `<h3>${chair.name}</h3>
  <ul>
    <li>id : ${chair.id} </li>
    <li>type : ${chair.type} </li>
    <li>material : ${chair.material} </li>
    <li>color : ${chair.color} </li>
  </ul>`;
  chairE.style.color = chair.color;
  return chairE;
};

const mainE = document.querySelector("main");
mainE.innerHTML = `<h2> Chairs </h2>`;
mainE.append(newChair2(chair1));
mainE.append(newChair2(chair2));
