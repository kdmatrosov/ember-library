import Ember from 'ember';

var Author = Ember.Object.extend({
  name: '',
  dash: function() {
    return this.get('name').dasherize();
  }.property('name')
});

var Book = Ember.Object.extend({
  title: '',
  rating: 0,
  author: ''
});
var first = {
  title: 'Властелин колец',
  author: 'Дж. Р. Р. Толкиен',
  rating: 9
};
var second = {
  title: 'Гордость и предубеждение',
  author: 'Джейн Остин',
  rating: 8
};
var third = {
  title: '1984',
  author: 'Джордж Оруэлл',
  rating: 6
};
var fourth = {
  title: 'Хоббит',
  author: 'Дж. Р. Р. Толкиен',
  rating: 9
};

var AuthorCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['name'],
  sortAscending: false,
  content: []

});

var authors = AuthorCollection.create();
var Ostin = Author.create({ name: 'Джейн Остин', books:

  [second] });

var Orwell = Author.create({ name: 'Джордж Оруэлл', books: [
  third] });

var Tolkin = Author.create({ name: 'Дж. Р. Р. Толкиен', books:
  [first, fourth] });

authors.pushObjects([Ostin, Orwell, Tolkin]);

export default Ember.Route.extend({

  model: function() {
    return authors;

  }

});
