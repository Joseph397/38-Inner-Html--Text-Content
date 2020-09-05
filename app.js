// innerHtml
// textContent

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent); // logs inner text of div
console.log(list.innerHTML); // logs inner html of #first
console.log(list.textContent); // logs inner text of #first

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
<li>list item</li><li>list item</li>`;
document.body.appendChild(ul);

// div.innerHTML = 'hello world'    // changes content
// div.textContent = 'hello people' // acts the same

div.innerHTML = `<li class="item">${randomVar}</li>
<li>list item</li><li>list item</li>`; // displays content

// div.textContent = `<li class="item">${randomVar}</li>
// <li>list item</li><li>list item</li>`; // displays inner html

