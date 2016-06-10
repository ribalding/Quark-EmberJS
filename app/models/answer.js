import DS from 'ember-data';

export default DS.Model.extend({
  user_name: DS.attr(),
  answer_text: DS.attr(),
  question: DS.belongsTo('question', { async : true })
});
