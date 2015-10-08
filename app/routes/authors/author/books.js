import Ember from 'ember';
import Book from '../../../models/book';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('authors.author');
  },
  actions: {
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
