import Ember from 'ember';
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

var books = [first, second, third];
export default Ember.Route.extend({
  model: function() {
    return books;
  }
});
