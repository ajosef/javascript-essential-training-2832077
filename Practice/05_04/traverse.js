import Equals from "./Compare.js";

let cArr1 = [];

function traverseDownAll(elem) {
  cArr1.push([elem, elem.localName, elem.parentElement]);
  //cArr1.push(elem.localName);
  elem.childNodes.forEach((ch) => traverseDownAll(ch));
  //
}

console.log("1st Traverse");
traverseDownAll(document);
console.table(cArr1);

let cArr2 = [];
//const elem = liAll[0];
function traverseDownAll2(elem) {
  cArr2.push([elem, elem.localName, elem.parentElement]);
  //cArr2.push(elem.localName);
  for (let i = 0; i < elem.childNodes.length; ++i) {
    traverseDownAll2(elem.childNodes[i]);
  }
}

console.log("2nd Traverse");
traverseDownAll2(document);
console.table(cArr2);

cArr1.length === cArr2.length &&
  cArr1.every((value, index) => value === cArr2[index]);

console.log("Equals?");
Equals(cArr1, cArr2);
