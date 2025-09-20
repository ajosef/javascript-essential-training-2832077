/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

//Use an event listener & CSS to highlight around the entire grid when you mouse over.
const grid = document.querySelector(".grid");
grid.addEventListener(
  "pointerenter",
  (e) => {
    //console.log(e);
    grid.style.outline = "10px solid lime";
  },
  false
);
grid.addEventListener(
  "pointerleave",
  (e) => {
    //console.log(e);
    grid.style.outline = "";
  },
  false
);

//Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
const borderCell = (event) => {
  event.target.style.outline = "5px solid green";
};

const unBorderCell = (event) => {
  event.target.style.outline = "";
};

// Add an event listener to each grid cell to change its background color when it is clicked.
const cellClicked = (event) => {
  event.target.classList.toggle("clicked");
};

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("pointerenter", borderCell, false);
  cell.addEventListener("pointerleave", unBorderCell, false);
  cell.addEventListener("click", cellClicked, false);
});

//Add an event listener to a specific key on the keyboard
// to change the background color of the whole page - from dark to light and back again.
const body = document.body;
body.addEventListener(
  "keyup",
  (event) => {
    //console.log(event, event.key);
    switch (event.key) {
      case "A":
      case "a":
        body.style.backgroundColor =
          body.style.backgroundColor === "" ? "darkolivegreen" : "";
    }
  },
  false
);
