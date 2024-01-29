let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // Getter
  get info() {
    return `${this.title}\n${this.author}\n${this.pages} pages\n${this.read}`;
  }
}

function displayBooks() {
  clearLibrary();
  // by index to be able to remove cards
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement('div');
    const remove = document.createElement('button');
    const read = document.createElement('button');

    book.classList.add('card');
    book.textContent = myLibrary[i];

    const bookInfo = myLibrary[i].split('\n');
    const title = bookInfo[0];
    const author = bookInfo[1];
    const pages = bookInfo[2];
    const readStatus = bookInfo[3] === 'true';

    book.innerHTML = `${title}<br>${author}<br>${pages}`;

    remove.textContent = 'Remove';
    remove.classList.add('removeButton');

    read.classList.add('readButton');

    if (readStatus) {
      read.style.backgroundColor = 'var(--light-green)';
      read.textContent = 'Read';
    } else {
      read.style.backgroundColor = 'var(--light-red)';
      read.textContent = 'Not read';
    }

    remove.addEventListener('click', () => {
      // remove card by index
      removeBook(i);
    });

    read.addEventListener('click', () => {
      myLibrary[i] = toggleReadStatus(bookInfo);
      displayBooks(); // Refresh the display to update the button text
    });

    book.appendChild(read);
    book.appendChild(remove);
    display.appendChild(book);
  }
}

function clearLibrary() {
  while (display.lastElementChild) {
    display.removeChild(display.lastElementChild);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function openForm() {
  document.getElementById('myForm').style.display = 'block'; // Show the form
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none'; // Hide the form
}

function toggleReadStatus(bookInfo) {
  const title = bookInfo[0];
  const author = bookInfo[1];
  const pages = bookInfo[2];
  const readStatus = bookInfo[3] === 'true';

  if (readStatus) {
    bookInfo[3] = 'false';
  } else {
    bookInfo[3] = 'true';
  }

  return bookInfo.join('\n'); // Return the updated book string
}

// main
let index = 0;
const display = document.querySelector('#booksDisplay');
// Add an event listener to the form outside of submitForm
let form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook.info);
  displayBooks();

  // Clear the form inputs
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;

  closeForm();
});

const constraintValidationAPI = (() => {
  const titleValue = document.getElementById('title');
  const authorValue = document.getElementById('author');

  titleValue.addEventListener('input', () => {
    titleValue.setCustomValidity('');
    titleValue.checkValidity();
  });

  titleValue.addEventListener('invalid', () => {
    if (titleValue.value.trim() === '') {
      titleValue.setCustomValidity('Title cannot be blank.');
    }
  });

  authorValue.addEventListener('input', () => {
    authorValue.setCustomValidity('');
    authorValue.checkValidity();
  });

  authorValue.addEventListener('invalid', () => {
    if (authorValue.value.trim() === '') {
      authorValue.setCustomValidity('Author cannot be blank.');
    }
  });
})();
