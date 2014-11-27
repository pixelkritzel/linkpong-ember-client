import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return this.store.find('link', { link_id: param.link_id } );
  }
});
