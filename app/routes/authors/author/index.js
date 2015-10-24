import Ember from 'ember';

export default Ember.Route.extend({

  afterModel: function(book) {
    var description = book.get('description');
    if (Ember.isEmpty(description)) {
      this.transitionTo('authors.author.book');
    } else {
      this.transitionTo('authors.author.details');
    }
  }
});
