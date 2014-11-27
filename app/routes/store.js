import Ember from 'ember';

export default Ember.Route.extend({
  model: function(model) {
    console.log('This', this);
    console.log('Model', model);
    return this.store.find('store', model.store_id);
  }
});
