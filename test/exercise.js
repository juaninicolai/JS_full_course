/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log("init commit");

const pTags = document.querySelectorAll("p");
console.log(pTags);

const divElement = document.querySelector(".site-header.container");
console.log(divElement);

const jumboElement = document.querySelector("#jumbotron-text");
console.log(jumboElement);

const pTags2 = document.querySelectorAll(".primary-content p");
console.log(pTags2);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const buttonElement = document
  .querySelector("#alertBtn")
  .addEventListener("click", () =>
    window.alert("Thanks for visiting Bikes for Refugees")
  );
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeColour = document.querySelector("#bgrChangeBtn");
console.log(changeColour);

changeColour.addEventListener(
  "click",
  () => (document.querySelector("body").style.backgroundColor = "green")
);
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons 
that says "Read more below."
*/
const addTextButton = document.querySelector("#addTextBtn");
console.log(addTextButton);

addTextButton.addEventListener("click", () => {
  const text = document.createElement("p");
  text.innerHTML = "Read more below";
  document.querySelector("#mainArticles").appendChild(text);
});
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largeLinks = document.querySelector("#largerLinksBtn");
const links = document.querySelectorAll("a");

largeLinks.addEventListener("click", () =>
  links.forEach((tag) => (tag.style.fontSize = "1.5rem"))
);
