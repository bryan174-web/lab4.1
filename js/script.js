/* Bryan Sevilla
date:10/1/2025
assignment: JavaScript for Lab 4: Changing the DOM */

var i = 0;
var names = ['images/turtle1.jpg','images/turtle2.jpg','images/turtle3.jpg','images/turtle4.jpg','images/turtle5.jpg'
  ,'images/turtle6.jpg','images/turtle7.jpg' , 'images/turtle8.jpg' , 'images/turtle9.jpg' ,'images/turtle10.jpg'
];
function run() {
  document.getElementById("myImg").src = names[i++];
  if (i === names.length) {
    i = 0;
    document.getElementById("myImg").src = names[0];
  }
}
const h = document.head;
const b = document.body; 

console.log(document.body.childNodes[1]);

const parent1 = document.querySelector('.parent-1') 
/* to select parent-1*/
console.log(parent1)

querySelectorAll
 /*only returns elements. It returns a node list, it only contains elements. It's
similar to an html collection without live update*/

console.log(parent1.parentNode)
 /*to get div class "grandparent" element*/

document.getElementById()
/* This is used to select an element by its ID. select an element by its ID. Documment is an object
. It contains properties and methods and other rested objects. */
getElementsByTagName 
/*they return an html collection*/

console.log(parent1.childNodes)
 /*selects all childNodes*/

document.createElement()
/* append an element. You get a list of elements. This adds element to html*/

innerText
/* looks at the css to see is this actually visible on the screen, inner text displays text */

innerHTML
/* to render html inside of a div or inside of any element */

previousSibling
/* selects the first node that comes before the current element */



