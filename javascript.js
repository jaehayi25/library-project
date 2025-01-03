const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (read ? "read" : "not read yet")
    }; 
}

function addBookToLibrary() {
    // do stuff here
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

console.log(theHobbit.info())