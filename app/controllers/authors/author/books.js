import Ember from 'ember';

export default Ember.Controller.extend({
  bookCreationStarted: false,
  title: '',
  isAddButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),
  noBooks: Ember.computed('model.books.length', function() {
    return this.get('model.books.length') === 0;
  }),
  actions: {
    enableBookCreation: function () {
      this.set('bookCreationStarted', true);
    }
  }
});
