import Ember from 'ember';

export default Ember.ObjectController.extend({
  bookmarklet: function() {
    var bookmarkletTemplate = this.get('bookmarkletTemplate');
    return bookmarkletTemplate.replace('__STORE__', this.get('id'));
  }.property('bookmarkletTemplate')
});
