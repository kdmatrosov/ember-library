import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  setupBooks: Ember.on('init', function() { /*не надо иницилизировать устой массив книг вручную*/
    if (!this.get('books')) {
      this.set('books', []);
    }
  }),
  path: '',
  fio: function() {
    return this.get('path').dasherize();
  }.property('path')
});
