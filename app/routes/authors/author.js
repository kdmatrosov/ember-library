import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var authors = this.modelFor('authors');
    return authors.findBy('fio', params.fio);
  }
});
