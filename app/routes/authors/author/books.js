import Ember from 'ember';
import Book from '../../../models/book';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('authors.author');
  },

  actions: {
    didTransition: function() {
    var author = this.modelFor('authors.author');
    document.title = `${author.get('name')} книги`;
  },
    createBook: function() {
      var controller = this.get('controller');
      var author = this.modelFor('authors.author');
      var title = controller.get('title');
      var book = Book.create({ title: title, author: author });
      author.get('books').pushObject(book);
      controller.set('title', '');
    }
  }
});
