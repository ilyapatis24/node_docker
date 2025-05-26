const { v4: uuid } = require('uuid')

class Book {
    constructor(title = '', description = '', authors = '', favorite ='',  fileCover = '', fileName = '', fileBook = '', id = uuid()) {
        this.title = title
        this.description = description
        this.authors     = authors
        this.favorite    = favorite
        this.fileCover   = fileCover
        this.fileName    = fileName
        this.fileBook    = fileBook
        this.id          = id
    }
}

const books = {
  book: [
      new Book('Граф Монте-Кристо.', 'Приключенческий роман.', 'Дюма.А.',),
      new Book('Война и мир.', 'Роман эпопея.', 'Толстой Л.Н.',),
      new Book('Кому на руси жить хорошо', 'Поэма.', 'Некрасов Н.А.',),
  ],
}

module.exports = {
  Book,
  books
};