function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

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

const theHobbit = new Book("The Hobbit", "Tolkien", 295, false);
const witcher = new Book("The Witcher", "Sapkowski", 321, true);
let myLibrary = [theHobbit, witcher];

function printBookArray() {
  myLibrary.forEach(function (book) {
    createBookDiv(book);
  });
  emptyArray();
}

function emptyArray() {
  myLibrary = [];
}
printBookArray();
console.log(myLibrary);
