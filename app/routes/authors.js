import Ember from 'ember';

import Author from '../models/author';
import Book from '../models/book';

var first = Book.create({
  title: 'Властелин колец',
  author: 'Дж. Р. Р. Толкиен',
  rating: 9
});
var second = Book.create({
  title: 'Гордость и предубеждение',
  author: 'Джейн Остин',
  rating: 8
});
var third = Book.create({
  title: '1984',
  author: 'Джордж Оруэлл',
  rating: 6
});
var fourth = Book.create({
  title: 'Хоббит',
  author: 'Дж. Р. Р. Толкиен',
  rating: 9
});

var AuthorCollection = Ember.ArrayProxy.extend({
  sortProperties: ['name'],
  sortAscending: false,
  content: []
});

var authors = AuthorCollection.create();
var Ostin = Author.create({ name: 'Джейн Остин', path:'Ostin', books:

  [second] });

var Orwell = Author.create({ name: 'Джордж Оруэлл', path:'Orwell', books: [
  third] });

var Tolkin = Author.create({ name: 'Дж. Р. Р. Толкиен', path:'Tolkin', books:
  [first, fourth] });

authors.pushObjects([Ostin, Orwell, Tolkin]);

export default Ember.Route.extend({

  model: function() {
    return authors;

  }

});
