/* Bryan Sevilla
date:10/1/2025
assignment: JavaScript for Lab 4: Changing the DOM part 2*/

const div =  document.createElement("div")
body.append(div)
/* appending elements */
div.innerText = "Hello World"

body.appendchild(div)
/*allows you to append elements */
console.log(div.textContent)
console.log(div.innerText)
/* innerText looks at the css to see is this actually visible on the screen, inner text displays text */

div.innerHTML = "<strong>Hello World 2</strong>"
/* innerHTML to render html inside of a div or inside of any element */

.toggle
/* its either going to rmove if it exists already or add it. Adds and removes */

getElementById()
/* selcts and item according to its ID. It returns the element with the specified ID among all 
elements of the document. */

querySelector()
/* The second method using CSS selectors.  It works the same way as querySelectorAll() but only
returns the first mathching element. It returns null if no associated element can be found. */

createTextNode()
/* creates a Text Node: It generates a new node that specifically contains plain text content. It
takes a single string argument which represents the text content for the newly created Text node.*/

insertAdjacentHTML()
/* method to more precisely define the position of inserted elements. an existing element and pass
it the position and a string of HTML characters that represent the new content to be added. */

addEventListener()
/* Is used to attach an event handler to a specified element without overwritng existing event 
handlers. It allows you to define a function that will be executed when a particular event occurs
on that element */

nextSibling
/* returns the next node in the same tree level as a specified node. It is a read-only property that
returns a node or null it there is no next sibling. */


