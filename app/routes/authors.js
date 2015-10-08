import Ember from 'ember';

import Author from '../models/author';
import Book from '../models/book';

var first = Book.create({
  title: 'Властелин колец',
  author: 'Дж. Р. Р. Толкиен',
  rating: 5
});
var second = Book.create({
  title: 'Гордость и предубеждение',
  author: 'Джейн Остин',
  rating: 5
});
var third = Book.create({
  title: '1984',
  author: 'Джордж Оруэлл',
  rating: 2
});
var fourth = Book.create({
  title: 'Хоббит',
  author: 'Дж. Р. Р. Толкиен',
  rating: 4
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

  afterModel: function() {
    Ember.$(document).attr('title', 'Авторы');
  },

  model: function() {
    return authors;
  },
  actions: {
    createAuthor: function() {
      var name = this.get('controller').get('name');
      var author = Author.create({ name: name });
      authors.pushObject(author);
      this.get('controller').set('name', '');
    }
  }

});
