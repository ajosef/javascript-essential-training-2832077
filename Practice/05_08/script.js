/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 *
 * 1. Find an element and add three classes.
 * 2. Remove one of the new classes.
 * 3. Replace one of the two remaining classes.
 * 4. Add a new attribute to an element - standard attr or data-*
 * 5. Request the value of the attribute
 * 6. Change the value of the attribute
 * 7. Add some inline CSS to an element using the style property
 * 8. Query the style property of the element to list all the inline styles.
 */

document.querySelector("header > div:last-child");
//<div class=​"site-description">​All backpack packing, all the time.​</div>​
document.querySelector("div:last-child");
//<div class=​"site-description">​All backpack packing, all the time.​</div>​
document.querySelector(".site-description");
//<div class=​"site-description">​All backpack packing, all the time.​</div>​
document
  .querySelector(".site-description")
  .classList.add("new-class1", "new-class2", "new-class3");
document
  .querySelector(".site-description")
  .classList.add("new-class1", "new-class2", "new-class3", "new-class4");
document
  .querySelector(".site-description")
  .classList.remove("new-class3", "new-class4");
document
  .querySelector(".site-description")
  .classList.replace("new-class2", "new-class2.2");

//-----------------

document.querySelectorAll("p");
document
  .querySelector("ul > li.packprop.backpack__strap")
  .classList.remove("packprop");
document.querySelector("li.backpack__strap").classList;
//DOMTokenList ['backpack__strap', value: 'backpack__strap']
document.querySelector("li.backpack__strap").classList.add("packprops");

//----------------------

document.querySelector("h1").classList;
//DOMTokenList ['backpack__name', value: 'backpack__name']
document.querySelector("h1").attributes;
//NamedNodeMap {0: class, class: class, length: 1}
document.querySelector("h1").setAttribute("attr");

document.querySelector("h1").setAttribute("attr", "val");
document.querySelector("h1").setAttribute("data-attr2", "val2");
document.querySelector("h1").dataset.attr2;
//'val2'
document.querySelector("h1").getAttribute("attr");
//'val'
document.querySelector("h1").setAttribute("attr", "val0");

//--------------------------------------------------------

document.querySelector("p").parentNode;
//<footer class=​"sitefooter">​…​</footer>​flex<p>​" Demo project for JavaScript Essential Training, a LinkedIn Learning course. "</p>​</footer>​
document.querySelector("p");
//<p>​…​</p>​" Demo project for JavaScript Essential Training, a LinkedIn Learning course. "</p>​
document.querySelector("footer").className;
//'sitefooter'
document.querySelector("footer").classList.remove("sitefooter");
document.querySelector("footer").classList.add("sitefooter");
document.querySelector("footer").style;
document.querySelector("footer").style.backgroundColor = "indigo";
//'indigo'
document.querySelector("footer").style.color = "yellow";
//'yellow'
document.querySelector("footer").style.color = "lightyellow";
document.querySelector("footer").style;
//CSSStyleDeclaration {0: 'background-color', 1: 'color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
