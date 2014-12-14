import Ember from 'ember';

export default Ember.Route.extend({
  model: function(model) {
    return this.store.find('store', model.store_id);
  },

  setupController: function(controller, model) {
    Ember.$.ajax('/bookmarklets/template', {async: false}).done(function(bookmarkletTemplate) {
      controller.bookmarkletTemplate = bookmarkletTemplate;
      this._super(controller, model);
    }.bind(this));
  }
});
