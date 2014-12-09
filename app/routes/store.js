import Ember from 'ember';

export default Ember.Route.extend({
  model: function(model) {
    return this.store.find('store', model.store_id);
  },

  setupController: function(controller, model) {
    $.ajax('/bookmarklets/template', {async: false}).done(function(bookmarklet) {
      controller.bookmarklet = bookmarklet;
      this._super(controller, model);
    }.bind(this));
  }
});
