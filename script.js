function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("the hobbit", "tolkien", 295, false);

let myLibrary = [theHobbit];

const title = document.getElementById("book-title");
const author = document.getElementById("book-author");
const pages = document.getElementById("book-pages");
const read = document.getElementById("book-read");

title.innerHTML = `${theHobbit.title}`;
author.innerHTML = `${theHobbit.author}`;
pages.innerHTML = `Number of pages: ${theHobbit.pages}`;

if (theHobbit.read == true) {
  read.classList.add("green-color");
} else {
  read.classList.add("red-color");
}
