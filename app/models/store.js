import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  uuid: DS.attr('string'),
  links: DS.hasMany({async: true})
});
