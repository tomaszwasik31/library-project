function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("The Hobbit", "Tolkien", "295", "no");
const witcher = new Book("The Witcher", "Sapkowski", "321", "yes");
let myLibrary = [theHobbit, witcher, witcher, witcher];
let bookNumber = 0;

const main = document.getElementById("main");

function createBookDiv(book) {
  const div = document.createElement("div");
  div.className = "book";
  div.dataset.index = `${bookNumber}`;
  bookNumber += 1;
  div.innerHTML = `<p class="book-title">${book.title}</p>
<p class="book-author">${book.author}</p>
<p class="book-pages">Number of pages: ${book.pages}</p>`;

  if (book.read == "yes") {
    div.innerHTML += `<p class="read?">Book read?<button class="read-yes btn">Yes</button></p>`;
  } else {
    div.innerHTML += `<p class="read?">Book read?<button class="read-no btn">No</button></p>`;
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
  let indexToRemove = e.target.parentNode.getAttribute("data-index");
  myLibrary.splice(indexToRemove, 1);

  createLibrary();
};

function addListenerRemoveBts() {
  let removeBts = document.querySelectorAll(".book-remove");

  removeBts.forEach((e) => {
    e.addEventListener("click", removeBook);
  });
}
function clearBooksDiv() {
  main.innerHTML = "";
}

function createLibrary() {
  clearBooksDiv();
  bookNumber = 0;
  myLibrary.forEach(function (book) {
    createBookDiv(book);
  });
  addListenerRemoveBts();
  createAddBtn();
}

//form hide-show

const form = document.getElementById("myForm");

function openForm() {
  form.style.display = "flex";
}

function closeForm() {
  form.style.display = "none";
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

createLibrary();
