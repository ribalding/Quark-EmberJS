import DS from 'ember-data';

export default DS.Model.extend({
  answer_name: DS.attr(),
  answer_text: DS.attr(),
  timestamp: DS.attr(),
  question: DS.belongsTo('question', { async : true })
});
