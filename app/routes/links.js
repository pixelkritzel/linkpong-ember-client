import Ember from 'ember';

export default Ember.Route.extend({
  model: function(model) {
    console.log('This', this);
    console.log(model);
    console.log('Äh Model',this.modelFor('store').get('links'));
    return this.currentModel;
  }
});
