import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('store', { path: '/store/:store_id'}, function() {
    this.resource('links');
  });
  this.route('store/links');
});

export default Router;