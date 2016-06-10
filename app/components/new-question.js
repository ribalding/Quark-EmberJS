import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveQuestion(){
      var params = {
        user_name: this.get('user_name') ? this.get('user_name') : "",
        question_text: this.get('question_text') ? this.get('question_text') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        answers: "test"
      };
      this.sendAction('saveQuestion', params);
      this.set('user_name', "");
      this.set('question_text', "");
      this.set('notes', "");
    }
  }
});
