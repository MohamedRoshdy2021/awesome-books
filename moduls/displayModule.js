class DisplayModule {
  constructor(bookCollection) {
    this.bookCollection = bookCollection;
    this.bookList = document.getElementById('bookList');
  }

  displayBooks = () => {
    this.bookList.innerHTML = '';

    this.bookCollection.books.forEach((book, index) => {
      const listItem = document.createElement('li');
      const listItemH2 = document.createElement('h2');
      listItem.appendChild(listItemH2);

      if (index % 2 !== 0) {
        listItem.classList.add('makeMeGrey');
      }
      listItem.innerHTML = `${book.title} by ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.classList.add('removeButtonStyle');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.bookCollection.removeBook(index);
      });

      listItem.appendChild(removeButton);
      this.bookList.insertBefore(listItem, this.bookList.firstChild);
    });
  };
}

export default DisplayModule;
