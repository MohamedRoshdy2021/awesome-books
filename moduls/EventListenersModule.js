class EventListenersModule {
  constructor(bookCollection) {
    this.bookCollection = bookCollection;
    this.addBtn = document.querySelector('.add');
    const booksnavbar = document.querySelector('#books-nav');
    const bookscontainer = document.querySelector('.bookslist');
    const addbooks = document.querySelector('#new-book');
    const maincontainer = document.querySelector('.main-page');
    const contact = document.querySelector('#nav-contact');
    const contactcontainer = document.querySelector('#contact');

    this.addBtn.addEventListener('click', () => this.bookCollection.addBook());
    booksnavbar.addEventListener('click', () => {
      bookscontainer.style.display = 'flex';
      maincontainer.style.display = 'none';
      contactcontainer.style.display = 'none';
    });
    addbooks.addEventListener('click', () => {
      bookscontainer.style.display = 'none';
      maincontainer.style.display = 'flex';
      contactcontainer.style.display = 'none';
    });
    contact.addEventListener('click', () => {
      bookscontainer.style.display = 'none';
      maincontainer.style.display = 'none';
      contactcontainer.style.display = 'flex';
    });
  }
}
export default EventListenersModule;
