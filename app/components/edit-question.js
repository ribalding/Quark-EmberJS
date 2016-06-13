import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion(question){
      var params = {
        user_name: this.get('user_name') ? this.get('user_name') : "",
        question_text: this.get('question_text') ? this.get('question_text') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        answers: "test"
      };
      this.sendAction('editQuestion', question, params);
    }
  }
});
