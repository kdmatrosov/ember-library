import Ember from 'ember';

var Author = Ember.Object.extend({
  name: ''
});

var Ostin = Author.create({ name: 'Джейн Остин' });

var Orwell = Author.create({ name: 'Джордж Оруэлл' });

var Tolkin = Author.create({ name: 'Дж. Р. Р. Толкиен' });

var authors = [Ostin, Orwell, Tolkin];

export default Ember.Route.extend({

  model: function() {
    return authors;

  }

});
