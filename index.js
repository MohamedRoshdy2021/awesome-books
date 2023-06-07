import DisplayModule from './moduls/displayModule.js';
import EventListenersModule from './moduls/EventListenersModule.js';
import updateClock from './moduls/luxon.js';

export default class BookCollection {
  static initialize() {
    const bookCollection = new BookCollection();
    return bookCollection;
  }

  constructor() {
    this.books = [];
    this.eventListenersModule = new EventListenersModule(this);
    this.displayModule = new DisplayModule(this);
    this.loadBooks();
    updateClock();
  }

  saveBooks = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  addBook = () => {
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const title = titleInput.value;
    const author = authorInput.value;

    if (title === '' || author === '') {
      alert('Please enter both the title and author.');
      return;
    }

    const book = {
      title,
      author,
    };

    this.books.push(book);

    this.saveBooks();

    titleInput.value = '';
    authorInput.value = '';

    this.displayModule.displayBooks();
  };

  removeBook = (index) => {
    this.books.splice(index, 1);
    this.saveBooks();
    this.displayModule.displayBooks();
  };

  loadBooks = () => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
      this.displayModule.displayBooks();
    }
  };
}
BookCollection.initialize();
