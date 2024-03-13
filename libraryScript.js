

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
    newBook.addEventListener("click", ()=> {
      alert('I got clicked!')
      openBook(newBook)
  })
}}


function deleteBooks() {
  const books = document.getElementById("bookshelf-grid")
  while (books.firstChild) {
    books.removeChild(books.firstChild)
  }
}

function openBook(childBook) {
  const dialogOpenBook = document.querySelector("#open-book-dialog>p")
    const book = childBook.book
    dialogOpenBook.textContent= "Book title is ${book.title} and author is ${book.author}."
    dialogOpenBook.showModal()

  
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

  
  const config = { childList: true};
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
        for (child in bookshelf.children) {
          child.addEventListener("click", ()=> {
            openBook(child)
          })
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(bookshelf, config);

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
})

