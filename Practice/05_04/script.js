/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const liAll = document.querySelectorAll("li");

const textArr = Array.from(document.querySelectorAll("li"), (li) =>
  li.textContent.trim()
);

//console.table(textArr);

// for (let i = 0; i < liAll.length; ++i) {
//   console.log(liAll[i].textContent.trim());
// }

// document
//   .querySelectorAll("li")
//   .forEach((li) => console.log(li.textContent.trim()));

document
  .querySelectorAll("#pack02 li")[2]
  .insertAdjacentHTML("beforebegin", "textA");
document
  .querySelectorAll("#pack02 li")[2]
  .insertAdjacentHTML("afterbegin", "textB");

document
  .querySelectorAll("#pack02 li")[2]
  .insertAdjacentHTML("beforeEnd", "textBE");
document
  .querySelectorAll("#pack02 li")[2]
  .insertAdjacentHTML("afterEnd", "textE");

document
  .querySelectorAll("#pack01 li")
  .forEach((li) => (li.style.color = "purple"));

document
  .querySelectorAll("#pack02 li span")
  .forEach((sp) => (sp.style.color = "blue"));

document
  .querySelectorAll("#pack02 li")[0]
  .childNodes.forEach((ch) =>
    console.log(ch, ch instanceof Element || ch instanceof HTMLDocument)
  );

let chArr = [];
document
  .querySelectorAll("#pack02 li")
  .forEach((li) =>
    li.childNodes.forEach((ch) =>
      chArr.push([ch, ch.outerHTML || ch.textContent, ch instanceof Element])
    )
  );

//console.table(chArr);

document
  .querySelectorAll("#pack02 li")
  .forEach((li) => console.log(li.childNodes[0]));

const li0 = liAll[0];
console.log(li0.getHTML(), li0.innerHTML);

//document.childNodes.forEach((c) => (c.style.borderBlockColor = "indigo"));
