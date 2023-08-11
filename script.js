let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function displayBooks() {
    clearLibrary();
    for (const item of myLibrary) {
        const book = document.createElement('div');
        book.classList.add("card")
        book.textContent += item;
        display.appendChild(book);
    }
}

function clearLibrary() {
    while (display.lastElementChild) {
        display.removeChild(display.lastElementChild);
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block"; // Show the form
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"; // Hide the form
}

// main
const display = document.querySelector('#booksDisplay');
// Add an event listener to the form outside of submitForm
let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let newBook = new Book(title, author, pages, (read) ? 'read' : 'not read yet');
    myLibrary.push(newBook.info());
    displayBooks();

    // Clear the form inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;

    closeForm();
});
