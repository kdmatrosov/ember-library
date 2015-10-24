import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authors', function() {
    this.route('author', {
      path: ':fio'
    }, function()
    {
      this.route('books');
      this.route('details', {});
    });
  });
});

export default Router;
