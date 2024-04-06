

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
  for(let book in myLibrary) {

    const bookshelf = document.getElementById("bookshelf-grid");
    const newBook = document.createElement("img");
    newBook.classList.add("book");
    newBook.src ="old-book-spine.png" ;
    newBook.alt = "book";
    newBook.dataset.book = book;
    
    newBook.addEventListener("click", ()=> {
      alert('I got clicked!')
      openBook(newBook.dataset.book)
  })
  bookshelf.appendChild(newBook)
}}


function deleteBooks() {
  const books = document.getElementById("bookshelf-grid")
  while (books.firstChild) {
    books.removeChild(books.firstChild)
  }
}

function openBook(bookNumber) {
  const dialogOpenBook = document.querySelector("#open-book-dialog>p")
  const dialog = document.getElementById("open-book-dialog")
  dialog.dataset.book = bookNumber
    dialogOpenBook.textContent= "Book title is " + myLibrary[bookNumber].title + " and author is " + myLibrary[bookNumber].author + "."
    dialog.showModal()
  
}

function deleteBook(bookNumer) {
  myLibrary.splice(bookNumer, 1)
}

window.addEventListener("load", function() { 
  const bookshelf = document.getElementById("bookshelf-grid")
  const buttonAdd = document.getElementById("add-book")
  const buttonSubmit = document.getElementById("submit-btn");
  const buttonClose = document.getElementById("cancel");
  const dialog = document.getElementById("addBookDialog")

  addBookToLibrary('Huckleberry Finn', 'Mark Twain')
  deleteBooks()
  displayBooks()

  
  

  buttonAdd.addEventListener("click", ()=> {
    dialog.showModal();
  });

  
  buttonSubmit.addEventListener("click", (event)=> {
    event.preventDefault();
    const dialogForm = document.getElementById("dialogForm")
    const formData = new FormData(dialogForm)
    addBookToLibrary(formData.get("title"),formData.get("author"))
    deleteBooks()
    displayBooks()
    dialogForm.reset()
    dialog.close()
  });

  
  buttonClose.addEventListener("click", ()=> {
    dialog.close()
  })

  const close = document.getElementById("open-book-dialog")
  close.addEventListener("click" , ()=> {
    close.close()
  })

  const deleteBtn= document.getElementById("delete")
  deleteBtn.addEventListener("click", (event)=> {
    deleteBook(document.getElementById("open-book-dialog").dataset.book)
    deleteBooks()
    displayBooks()
    

  })

})

