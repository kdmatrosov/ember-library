import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  description: '',
  setupBooks: Ember.on('init', function() { /*не надо иницилизировать устой массив книг вручную*/
    if (!this.get('books')) {
      this.set('books', []);
    }
  }),
  path: '',
  fio: function() {
    return this.get('name').dasherize();
  }.property('name')
});
