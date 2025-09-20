/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description: `Green frog-shaped backpack sitting upright\
    with three visible pockets and adjustable straps,\
    set against a plain background.\
    The backpack appears cheerful and playful.`,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

const newFigure = (backpack) => {
  //const imgMarkUp = `<img src="${backpack.image}" alt="Green frog-shaped backpack"/>
  //<figcaption></figcaption>`;
  const figureE = document.createElement("figure");
  const imgE = document.createElement("img");
  imgE.src = backpack.image;
  imgE.alt = "Green frog-shaped backpack";
  imgE.style.maxHeight = "50%";
  imgE.style.maxWidth = "60%";

  const figcaptionE = document.createElement("figcaption");
  figcaptionE.innerText = frogpack.description;
  //figureE.innerHTML = imgMarkUp;
  figureE.append(imgE, figcaptionE);
  return figureE;
};

const addArticle = (backpack) => {
  const articleE = document.createElement("article");
  articleE.innerHTML = content;
  articleE.prepend(newFigure(backpack));
  document.querySelector("body > main").append(articleE);
  return articleE;
};

addArticle(frogpack);
