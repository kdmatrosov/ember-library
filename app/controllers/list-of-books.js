import Ember from 'ember';

var Book = Ember.Object.extend({
  title: '',
  rating: 0,
  author: ''
});
var first = Book.create({
  title: 'Властелин колец',
  author: 'Дж. Р. Р. Толкиен',
  rating: 10
});
var second = Book.create({
  title: 'Гордость и предубеждение',
  author: 'Джейн Остин',
  rating: 9
});
var third = Book.create({
  title: '1984',
  author: 'Джордж Оруэлл',
  rating: 7
});
var BookCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties')
});
var books = BookCollection.create();
books.get('content').pushObjects([first, second, third]);
export default Ember.Controller.extend({
  books: books.get('sortedContent')
});
