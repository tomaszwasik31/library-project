function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("The Hobbit", "Tolkien", "295", "no");
const witcher = new Book("The Witcher", "Sapkowski", "321", "yes");
const lordOf = new Book("The Lord", "Tolkien", "665", "yes");
const gameOf = new Book("Game of Thrones", "Martin", "465", "no");
let myLibrary = [theHobbit, witcher, lordOf, gameOf];
let bookIndex = 0;

const main = document.querySelector("#main");

function createBookDiv(book) {
  const div = document.createElement("div");
  div.className = "book";
  div.dataset.index = `${bookIndex}`;
  bookIndex += 1;
  div.innerHTML = `<p class="book-title">${book.title}</p>
<p class="book-author">${book.author}</p>
<p class="book-pages">Number of pages: ${book.pages}</p>`;

  if (book.read == "yes") {
    div.innerHTML += `<p>Book read?<button class="btn read-status read-yes ">Yes</button></p>`;
  } else {
    div.innerHTML += `<p>Book read?<button class="btn read-status read-no">No</button></p>`;
  }

  div.innerHTML += `<button class="book-remove btn">Remove</button>`;
  main.appendChild(div);
}

function createAddBtn() {
  const div = document.createElement("div");
  div.id = "add-btn-wrapper";
  div.innerHTML = `<button  class="btn" onclick="openForm()">Add book</button>`;
  main.appendChild(div);
}

let removeBook = (e) => {
  let index = e.target.parentNode.getAttribute("data-index");
  myLibrary.splice(index, 1);

  createLibrary();
};

function addListeners() {
  let removeBts = document.querySelectorAll(".book-remove");

  removeBts.forEach((e) => {
    e.addEventListener("click", removeBook);
  });

  let statusBts = document.querySelectorAll(".read-status");
  statusBts.forEach((e) => {
    e.addEventListener("click", changeStatus);
  });
}
function clearBooksDiv() {
  main.innerHTML = "";
}

function createLibrary() {
  clearBooksDiv();
  bookIndex = 0;
  myLibrary.forEach(function (book) {
    createBookDiv(book);
  });
  addListeners();
  createAddBtn();
}

//form hide-show

const formWrapper = document.querySelector("#form-wrapper");

function openForm() {
  formWrapper.style.display = "flex";
}

function closeForm() {
  formWrapper.style.display = "none";
}

function newBook() {
  let inputTitle = document.querySelector("[name='title']").value;
  let inputAuthor = document.querySelector("[name='author']").value;
  let inputPages = document.querySelector("[name='pages']").value;
  let inputRadio = document.querySelector('input[name="read?"]:checked').value;

  let newBook = new Book(inputTitle, inputAuthor, inputPages, inputRadio);

  myLibrary.push(newBook);

  createLibrary();

  closeForm();
  form.reset();
}

let changeStatus = (e) => {
  let index = e.target.parentNode.parentNode.getAttribute("data-index");
  if (myLibrary[index].read == "yes") {
    myLibrary[index].read = "no";
  } else {
    myLibrary[index].read = "yes";
  }

  createLibrary();
};

createLibrary();
