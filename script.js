function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("The Hobbit", "Tolkien", 295, false);
const witcher = new Book("The Witcher", "Sapkowski", 321, true);
let myLibrary = [theHobbit, witcher, witcher,  witcher];

function createBookDiv(book) {
  const main = document.getElementById("main");
  const div = document.createElement("div");
  div.id = "book";
  div.innerHTML = `  <p id="book-title">${book.title}</p>
<p id="book-author">${book.author}</p>
<p id="book-pages">Number of pages: ${book.pages}</p>`;

  if (book.read == true) {
    div.innerHTML += `<p id="read?">Book read?<button class="read-yes">Yes</button></p>`;
  } else {
    div.innerHTML += `<p id="read?">Book read?<button class="read-no">No</button></p>`;
  }

  div.innerHTML += `<button id="book-remove" onclick="return this.parentNode.remove()">Remove</button>`;
  main.appendChild(div);
}

function createAddBtn() {
  const main = document.getElementById("main");
  const div = document.createElement("div");
  div.id = "add-btn-wrapper";
  div.innerHTML = `<button  class="btn" onclick="openForm()">Add book</button>`;
  main.appendChild(div);
}

function printBookArray() {
  myLibrary.forEach(function (book) {
    createBookDiv(book);
  });
}

printBookArray();
createAddBtn();

//form hide-show

function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//

let readYes = document.querySelectorAll('.read-yes');



readYes.forEach(e=>{
  e.addEventListener("click", yesToNo)
});

function yesToNo(){
  readYes.forEach(e=>{
    e.classList.replace('read-yes', 'read-no')
  });
}