import Ember from 'ember';

export default Ember.Route.extend({
  model: function(model) {
    return Ember.$.ajax('http://localhost:8080/stores/' + model.store_id + '/links', { async: true }).done(function(receivedData) {
      return  this.store.createRecord('link', receivedData.links);
    }.bind(this));
  }
});
