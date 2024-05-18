const container = document.getElementById('container');
console.log('parent', container.parentElement);
console.log('nextSiblig',container.nextElementSibling);
console.log('previousSiblig',container.previousElementSibling);
console.log('children',container.children);
console.log('firstchild',container.firstElementChild);
console.log('lastchild',container.lastElementChild);
const html = document.documentElement;
console.log({html});

console.log('body',document.body);
//UPDATING DOM
const heading = document.getElementById('heading');
heading.innerHTML = 'Introduction to DOM Manipulation';
heading.style.color = 'red'

//CREATE DOM
const textchild = document.createElement('p');
container.appendChild(textchild);
textchild.innerHTML ='This is the new child'
textchild.setAttribute("class","container-new-child");
textchild.setAttribute("id","paragraph");

//DELETE DOM
heading.remove();

const button = document.getElementById('button');
button.style.border='none';
button.style.padding ='10px 15px';
button.style.background= "#0096ff";
button.style.borderRadius= '5px'
button.style.cursor ='pointer';
button.style.color="#ffffff";
button.style.boxShadow="5px 3px cyan";


button.addEventListener('click', function(){
  button.innerHTML ='Clicked' 
  button.style.background="#50C878"
})