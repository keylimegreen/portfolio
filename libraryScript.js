

const myLibrary = [];

function Book(title, author) {
  this.title = title
  this.author = author
  this.read = false
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {

}

window.addEventListener("load", (event) => {
  const book1 = new Book('Huckleberry Fin', 'Mark Twain')
  myLibrary.push(book1)
  displayBooks()
})

const button = document.getElementById('add-book')
button.addEventListener("click", ()=> {
  dialog.showModal();
})