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
  id: 2,
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
function newChair1(chair) {
  console.log("fn declaration");
  // const chairE = document.createElement("chair");
  // chairE.innerHTML = `<h3>${chair.name}</h3>
  // <ul>
  //   <li>id : ${chair.id} </li>
  //   <li>type : ${chair.type} </li>
  //   <li>material : ${chair.material} </li>
  //   <li>color : ${chair.color} </li>
  // </ul>`;
  // return chairE;
  return newChair(chair);
}

const newChair = function (chair) {
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
  chairE.setAttribute("data-id", chair.id);
  chairE.setAttribute("data-name", chair.name);
  return chairE;
};

const addChair = (chair) => {
  console.log("fn arrow");
  const chairE = newChair(chair);
  let mainE = document.querySelector("main");
  mainE.append(chairE);
  return chairE;
};

const getChairByDataAttr = (attr, val) => {
  return document.querySelector(`chair[data-${attr}="${val}"]`);
};

const getElemByAttr = (tag, attr, val) => {
  return document.querySelector(`${tag}[${attr}="${val}"]`);
};

const removeChairByDataAttr = (attr, val) => {
  let child = document.querySelector(`chair[data-${attr}="${val}"]`);
  child ? child.remove() : null;
  return child;
};

const mainE = document.querySelector("main");
mainE.innerHTML = `<h2> Chairs </h2>`;
mainE.append(newChair(chair1));
//mainE.append(newChair2(chair2));
