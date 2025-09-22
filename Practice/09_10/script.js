/**
 * Event Listeners code challenge - broken in the learning module
 */

// JavaScript code​​​​​​‌‌‌​​​‌‌‌‌​​‌‌‌‌‌‌​‌‌‌‌‌‌ below

const updateSpan = (event, form) => {
  const inputE = form.querySelector("input");
  const buttonE = form.querySelector("button");
  const id = buttonE.getAttribute("data-target");
  const spanE = form.parentElement.querySelector(`p#${id} > span.value`);
  spanE.textContent = inputE.value;
  console.log(form, spanE, inputE, inputE.value);
};

function updatePage(document) {
  // Your code goes here.
  //document.querySelectorAll("button").forEach((button) => {
  //const form = button.parentElement;

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        updateSpan(event, form);
      },
      false
    );
  });
}

// This is how your code will be called.
// Your answer should be the HTML output described in the challenge text.
// You can edit this code to try different testing cases.
const inputs = [
  { id: "name-input", value: "Adventure Backpack" },
  {
    id: "description-input",
    value: "A durable backpack for outdoor adventures",
  },
  { id: "color-input", value: "Green" },
  { id: "volume-input", value: "35L" },
];

updatePage(document);
