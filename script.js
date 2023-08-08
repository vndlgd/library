let myLibrary = ["A Game Of Thrones by George R. R. Margin, 694 pages, read", "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"]

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

// let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
// console.log(theHobbit.info())

function addBookToLibrary() {
    // take user input
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Pages: ");
    let read = prompt("Have you read it? (read / not read yet)");
    let newBook = new Book(title, author, pages, read)
    // store it into the array
    myLibrary.push(newBook.info())
}

// TODO:
// display each book on the page
function displayBooks() {

    for (const item of myLibrary) {
        const book = document.createElement('div');
        book.classList.add("card")
        book.textContent += item;
        display.appendChild(book);
    }
}

const display = document.querySelector('#booksDisplay');
displayBooks();

