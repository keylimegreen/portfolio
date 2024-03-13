

const myLibrary = [];
const dialog = document.getElementById("addBookDialog");

function Book(title, author) {
  this.title = title
  this.author = author
  this.read = false
}

function addBookToLibrary(title,author) {
  const newBook = new Book(title, author)
  myLibrary.push(newBook)
}

function displayBooks() {
  for(let book of myLibrary) {

    const bookshelf = document.getElementById("bookshelf-grid")
    const newBook = document.createElement("img")
    newBook.classList.add("book")
    newBook.src ="old-book-spine.png" 
    newBook.alt = "book"
    newBook.book = book
    bookshelf.appendChild(newBook)
  }
}

function deleteBooks() {
  const books = document.getElementById("bookshelf-grid")
  while (books.firstChild) {
    books.removeChild(books.firstChild)
  }
}

window.addEventListener("load", function() { 
  const buttonAdd = document.getElementById("add-book")
  const buttonSubmit = document.getElementById("submit-btn");
  const buttonClose = document.getElementById("cancel");
  const dialog = document.getElementById("addBookDialog")

  addBookToLibrary('Huckleberry Finn', 'Mark Twain')
  deleteBooks()
  displayBooks()

  ;
  buttonAdd.addEventListener("click", ()=> {
    dialog.showModal();
  });

  
  buttonSubmit.addEventListener("click", (event)=> {
    event.preventDefault();
    const dialogForm = document.getElementById("addBookDialog")
    const formData = new FormData(dialogForm)
    addBookToLibrary(formData.get(title),formData.get(author))
    deleteBooks()
    addBookToLibrary()
    dialog.close()
  });

  
  buttonClose.addEventListener("click", ()=> {
    dialog.close()
  })
})

