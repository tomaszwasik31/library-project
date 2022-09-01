function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("the hobbit", "tolkien", 295, false);
let myLibrary = [theHobbit];

function createBookDiv(book) {
  const main = document.getElementById("main");
  const div = document.createElement("div");
  div.id = "book";
  div.innerHTML = `  <p id="book-title">${book.title}</p>
<p id="book-author">${book.author}</p>
<p id="book-pages">Number of pages: ${book.pages}</p>
<button id="book-read">Read</button>
<button id="book-remove">Remove</button>`;
  main.appendChild(div);
}
createBookDiv(theHobbit);
createBookDiv(theHobbit);
createBookDiv(theHobbit);