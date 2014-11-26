import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log('This', this);
    console.log('Äh Model',this.modelFor('store').get('links'));
    return this.currentModel;
  }
});
