import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return this.modelFor('store').get('links');
    return this.store.find('link');
    //return [1,2,3];
  },
  //       ,
  setupController: function(controller, model) {
    this._super(controller, model);
    //this.modelFor('links')
    //controller.set('model',[1,2,3] );
  }
});
