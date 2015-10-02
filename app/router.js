import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list-of-books');
  this.route('authors', function() {
    this.route('author', {
      path: ':name'
    });
  });
  this.route('books');
});

export default Router;
