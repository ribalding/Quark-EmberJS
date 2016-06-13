import DS from 'ember-data';

export default DS.Model.extend({
  user_name: DS.attr(),
  question_text: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
