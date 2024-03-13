

const myLibrary = [];
const dialog = document.getElementById("addBookDialog");

function Book(title, author) {
  this.title = title
  this.author = author
  this.read = false
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  for(let book of myLibrary) {

    const bookshelf = document.getElementById("bookshelf-grid")
    const newBook = document.createElement("img")
    newBook.class = "book"
    newBook.src ="old-book-spine.png" 
    newBook.alt = "book"
    bookshelf.appendChild(book)
  }
}

window.addEventListener("load", function() { 
  const book1 = new Book('Huckleberry Fin', 'Mark Twain')
  myLibrary.push(book1)
  displayBooks()



  const buttonAdd = document.getElementById("add-book");
  buttonAdd.addEventListener("click", ()=> {
    dialog.showModal();
  });

  const buttonSubmit = document.getElementById("submit-btn");
  buttonSubmit.addEventListener("click", ()=> {
    addBookToLibrary()
  });

})

