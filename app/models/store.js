import DS from 'ember-data';

export default DS.Model.extend({
  // links: DS.hasMany('link'),
  title: DS.attr('string'),
  uuid: DS.attr('string')
});