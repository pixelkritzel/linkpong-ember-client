import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNewStore: function() {
      var newStore = this.store.createRecord('store');
      newStore.save().then(function(){
        this.transitionTo('store', newStore.id);
      }.bind(this));
    }
  }
});
