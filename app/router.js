import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('stores', function() {
     this.resource('store', { path: '/:store_id'});
     this.resource('links', { path: '/:store_id/links' }, function() {
       this.resource('link', { path: '/:link_id'});
     });
  });
});

export default Router;
