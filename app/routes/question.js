import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },

  actions : {
    editQuestion(question, params){
      console.log(question);
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question.id);
    },

    deleteQuestion(model){
      if (confirm('Are you sure you want to delete this question?')){
        model.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
