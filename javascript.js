// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = 'This is he glorious text-content!';

container.appendChild(content);

// 1
const paragraphh = document.createElement('p');
paragraphh.style.color = 'red';
paragraphh.textContent = "I'm red";
container.appendChild(paragraphh);

// 2
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm blue";
container.appendChild(h3);

// 3
// 3.1
const div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundcolor = 'pink';

// 3.2
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.textContent = "ME TOO";

//3.3 
div.append(h1, p);

container.appendChild(div);